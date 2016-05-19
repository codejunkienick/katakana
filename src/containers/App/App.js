import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { push } from 'react-router-redux';
import config from '../../config';
import { asyncConnect } from 'redux-connect';
import Drawer from 'material-ui/Drawer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

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

  constructor(props) {
    super(props);
    this.state = {
      open: true
    }
  }

  render() {
    const {user} = this.props;
    const styles = require('./App.scss');
    const logo = require('./logo.svg');

    const NavLink = (props) => {
      return (
        <Link activeClassName={styles.activeDrawerLink} to={props.to}>{props.text}</Link>
      );
    }

    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <div className={styles.app}>
          <Helmet {...config.app.head}/>
          <Drawer
            docked={false}
            width={400}
            open={this.state.open}
            zDepth={0}
            containerStyle={{backgroundColor: '#fefffa'}}
            containerClassName={styles.drawer}
            docked={true}
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
              Группа разработчиков <br />
              расположенная в Перми.
            </div>
          </div>
          </Drawer>
          <div className={styles.appContent}>
            {this.props.children}
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
