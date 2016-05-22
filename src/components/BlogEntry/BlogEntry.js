import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'react-router';

export default class BlogEntry extends Component {
  render() {
    const styles = require('./BlogEntry.scss');
    return (
        <div className={styles.entry}>
          <div className={styles.header}>
            <h2 className={styles.title}>{this.props.title}</h2>
            <div className={styles.meta}>
              <span className={styles.date}>{this.props.date}</span>
              <Link className={styles.author} to={this.props.authorLink}>@<span>{this.props.author}</span></Link>
            </div>
          </div>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
    );
  }
}
