import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'react-router';

export default class BlogEntry extends Component {
  render() {
    const styles = require('./BlogEntry.scss');
    const dateObj = new Date(Date.parse(this.props.date));
    const formatedDate = ('0' + dateObj.getDate()).slice(-2) + '-' + ('0' + (dateObj.getMonth()+1)).slice(-2) + '-' + dateObj.getFullYear() + ' ' + dateObj.getHours() + ':' + dateObj.getMinutes();
    return (
        <div className={styles.entry}>
          <div className={styles.header}>
            <h2 className={styles.title}><Link to={'/blog/' + this.props.slug}>{this.props.title.rendered}</Link></h2>
            <div className={styles.meta}>
              <span className={styles.date}>{formatedDate}</span>
              <Link className={styles.author} to={'/members#' + this.props._embedded.author[0].slug}>@<span>{this.props._embedded.author[0].slug}</span></Link>
            </div>
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: this.props.content.rendered}}/>
        </div>
    );
  }
}
