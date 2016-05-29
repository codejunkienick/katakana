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
import { isLoaded as isBlogLoaded, load as loadBlog } from 'redux/modules/blog';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

@connect(
  state => ({}),
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
      loading: true,
      drawerFontsLoaded: false
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.draw); 
    this.setState({
      windowWidth: window.innerWidth,
      openDrawer: this.shouldOpenDrawer(window.innerWidth),
      loading: false,
    })
    this.loadFonts();
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.draw); 
  }

  loadFonts() {
    const FontFaceObserver = require('fontfaceobserver');
    const robotoMono = new FontFaceObserver('Roboto Mono');
    const latoBody = new FontFaceObserver('Lato');
    const latoLead = new FontFaceObserver('Lato', {style: 'italic'});

    Promise.all([latoBody.load(), latoLead.load()]).then(() => {
      document.body.className += ' fonts-loaded';
    });
    robotoMono.load().then(() => {
      this.setState({drawerFontsLoaded: true}); 
    });
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
      <div
        style={{height: '100%'}}
        className={(this.state.fontsLoaded) ? styles.app + ' ' + styles.fontsLoaded : styles.app}>
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
            containerStyle={{
              backgroundColor: '#fefffa',
              fontFamily: (this.state.drawerFontsLoaded) ? 'Roboto Mono, monospace' : 'monospace'
            }}
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
              <div>
              Группа разработчиков, <br />
              расположенная в Перми.
              </div>
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
                marginLeft: (this.state.windowWidth > 1024) ? '400px' : '0px',
                paddingLeft: (this.state.windowWidth > 1024) ? '56px' : '16px',
              }}
              >
              {this.props.children}
          </div>
        </RouteTransition>
        </div>
    );
  }
}


@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];

    console.log('asyncConnect');

    if (!isBlogLoaded(getState())) {
      promises.push(dispatch(loadBlog()));
    }

    return Promise.all(promises);
  }
}])
export default class AppWrapper extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div>
          <App {...this.props}/>
        </div>
      </MuiThemeProvider>
    );
  }
}
