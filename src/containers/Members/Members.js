import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./Members.scss');
    return (
      <div>
        <h2 className="page-title">Состaв</h2>
        <div className={styles.member}>
        </div>
      </div>
    );
  }
}
