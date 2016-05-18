import React, { Component } from 'react';
import config from '../../config';

export default class BlogEntry extends Component {
  render() {
    const styles = require('./BlogEntry.scss');
    return (
        <div className={styles.entry}>
          <div className={styles.header}>
            <h3 className={styles.title}>{this.props.title}</h3>
            <div className={styles.meta}>
              <span className={styles.date}>{this.props.date}</span>
              <a className={styles.author} href={this.props.authorLink}>@<span>{this.props.author}</span></a>
            </div>
          </div>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
    );
  }
}
