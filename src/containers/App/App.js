import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-connect';
import { Drawer, AppBar, IconButton } from 'material-ui';
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
export default class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  shouldOpenDrawer(windowWidth) {
    return windowWidth > 800;
  }

  constructor(props) {
    super(props);
    this.state = {
      openDrawer: false
    }

  }
  componentDidMount() {
    window.addEventListener('resize', this.draw); 
    this.setState({
      windowWidth: window.innerWidth,
      openDrawer: this.shouldOpenDrawer(window.innerWidth)
    })
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.draw); 
  }

  draw = () => {
    this.setState({openDrawer: this.shouldOpenDrawer(window.innerWidth)})
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    const logo = require('./logo.svg');

    const NavLink = (props) => {
      return (
        <Link activeClassName={styles.activeDrawerLink} to={props.to} onClick={() => {
          this.setState({openDrawer: (this.state.windowWidth < 1024) ? false : true});
          this.props.pushState(props.to);
        }}>{props.text}</Link>
      );
    }

    const AppBarIcon = () => {
       return <NavigationMenu />;
    }

    const appBarStyles = () => {
      if (this.state.windowWidth > 1024) {
        return {
          display: 'none'
        }
      }
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={styles.app}>
          <Helmet {...config.app.head}/>
          <Drawer
            docked={false}
            width={400}
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
          <AppBar
            zDepth={0}
            style={appBarStyles()} 
            title={<span style={styles.title}>KATAKANA</span>}
            iconElementLeft={<IconButton onTouchTap={(e) => this.setState({openDrawer: !this.state.openDrawer})}><AppBarIcon /></IconButton>}
          />
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
      </MuiThemeProvider>
    );
  }
}
