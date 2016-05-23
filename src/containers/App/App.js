import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-connect';
import { Drawer, AppBar, IconButton, CircularProgress } from 'material-ui';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { RouteTransition, presets } from 'react-router-transition';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    // if (!isInfoLoaded(getState())) {
    //   promises.push(dispatch(loadInfo()));
    // }

    return Promise.all(promises);
  }
}])
@connect(
  state => ({user: state.auth.user}),
  {pushState: push})
class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  shouldOpenDrawer(windowWidth) {
    return windowWidth > 1024;
  }

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false,
      loading: true
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.draw); 
    this.setState({
      windowWidth: window.innerWidth,
      openDrawer: this.shouldOpenDrawer(window.innerWidth),
      loading: false,
    })
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.draw); 
  }

  draw = () => {
    this.setState({
      windowWidth: window.innerWidth,
      openDrawer: this.shouldOpenDrawer(window.innerWidth)
    })
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    const logo = require('./logo.svg');
    const logoMobile = require('./logoMobile.svg');

    const NavLink = (props) => {
      return (
        <Link activeClassName={styles.activeDrawerLink} to={props.to} onClick={() => {
          this.setState({openDrawer: (this.state.windowWidth < 1024) ? false : true});
          this.props.pushState(props.to);
        }}>{props.text}</Link>
      );
    }

    const AppBarIcon = () => {
       return <NavigationMenu style={{fill: 'rgb(150, 149, 149)'}} />;
    }
    const AppBarTitle = () => {
      return (
        <div style={{display: 'flex', height: 'inherit'}}>
          <img style={{display: 'flex', alignSelf: 'center', height: '20px'}} src={logoMobile}/>
        </div>
      );
    }

    const appBarStyles = () => {
      if (this.state.windowWidth > 1024) {
        return {
          display: 'none'
        }
      } else {
        return {
          backgroundColor: '#fefffa',
          borderBottom: '3px solid #e2e4e0'
        }
      }
    }

    return (
        <div className={styles.app}>
          <Helmet {...config.app.head}/>
          <AppBar
            zDepth={0}
            style={appBarStyles()} 
            title={<AppBarTitle />}
            iconElementLeft={<IconButton onTouchTap={(e) => this.setState({openDrawer: !this.state.openDrawer})}><AppBarIcon /></IconButton>}
          />
          <Drawer
            docked={false}
            width={(this.state.windowWidth > 1024) ? 400 : 300}
            open={this.state.openDrawer}
            zDepth={0}
            containerStyle={{backgroundColor: '#fefffa'}}
            containerClassName={styles.drawer}
            docked={(this.state.windowWidth > 1024)}
            onRequestChange={(open) => this.setState({openDrawer: open})}
          >
          <div className={styles.drawerContent}>
            <div className={styles.drawerLogo}>
              <img src={logo} alt="KATAKANA" />
            </div>
            <ul className={styles.nav}>
              <li><NavLink to="/blog" text="Блог" /></li>
              <li><NavLink to="/projects" text="Проекты" /></li>
              <li><NavLink to="/members" text="Состав" /></li>
              <li><NavLink to="/about" text="О нас" /></li>
              <li><NavLink to="/contact" text="Связаться" /></li>
            </ul>
            <div className={styles.drawerFooter}>
              Группа разработчиков, <br />
              расположенная в Перми.
            </div>
          </div>
          </Drawer>
          <RouteTransition
            pathname={this.props.location.pathname}
            runOnMount={false}
            {...presets.fade}
            >
            <div
              className={styles.appContent}
              style={{
                marginTop: (this.state.windowWidth > 1024) ? '56px' : '16px',
                marginLeft: (this.state.windowWidth > 1024) ? '456px' : '16px',
              }}
              >
              {this.props.children}
          </div>
        </RouteTransition>
        </div>
    );
  }
}

export default class AppWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    this.setState({loading: false});
  }
  
  render() {
    const style = `
.sk-folding-cube {
  margin: 40px auto;
  width: 40px;
  height: 40px;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg); }
  .sk-folding-cube .sk-cube {
    float: left;
    width: 50%;
    height: 50%;
    position: relative;
    -webkit-transform: scale(1.1);
        -ms-transform: scale(1.1);
            transform: scale(1.1); }
  .sk-folding-cube .sk-cube:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #333;
    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;
            animation: sk-foldCubeAngle 2.4s infinite linear both;
    -webkit-transform-origin: 100% 100%;
        -ms-transform-origin: 100% 100%;
            transform-origin: 100% 100%; }
  .sk-folding-cube .sk-cube2 {
    -webkit-transform: scale(1.1) rotateZ(90deg);
            transform: scale(1.1) rotateZ(90deg); }
  .sk-folding-cube .sk-cube3 {
    -webkit-transform: scale(1.1) rotateZ(180deg);
            transform: scale(1.1) rotateZ(180deg); }
  .sk-folding-cube .sk-cube4 {
    -webkit-transform: scale(1.1) rotateZ(270deg);
            transform: scale(1.1) rotateZ(270deg); }
  .sk-folding-cube .sk-cube2:before {
    -webkit-animation-delay: 0.3s;
            animation-delay: 0.3s; }
  .sk-folding-cube .sk-cube3:before {
    -webkit-animation-delay: 0.6s;
            animation-delay: 0.6s; }
  .sk-folding-cube .sk-cube4:before {
    -webkit-animation-delay: 0.9s;
            animation-delay: 0.9s; }

@-webkit-keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; }
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; }
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; } }

@keyframes sk-foldCubeAngle {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; }
  25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; }
  90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; } }
`
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          {!this.state.loading && <App {...this.props}/>}
          {this.state.loading && 
            <div style={{
              height: '100%',
              flex: '1 1 100%',
              display: 'flex',
              justifyContent: 'center', 
              alignItems: 'center',
              flexDirection: 'column'
            }}>
            <style>
              {style}
            </style>
              <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
              </div>
              Ожидайте...
            </div>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}
