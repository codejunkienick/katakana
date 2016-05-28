import React, { Component } from 'react';
import config from '../../config';
import { Link } from 'react-router';

export default class BlogEntry extends Component {
  static defaultProps = {
    single: false 
  }
  render() {
    const styles = require('./BlogEntry.scss');
    const { 
      single,
      slug, 
      title, 
      date, 
      content,
      _embedded: { author: [author] }
    } = this.props;
    const dateObj = new Date(Date.parse(date));
    const formatedDate = ('0' + dateObj.getDate()).slice(-2) + '-' + ('0' + (dateObj.getMonth()+1)).slice(-2) + '-' + dateObj.getFullYear() + ' ' + dateObj.getHours() + ':' + dateObj.getMinutes();

    return (
        <div className={styles.entry}>
          <div className={styles.header}>
            <h2 className={styles.title}><Link to={'/blog/' + slug}>{title.rendered}</Link></h2>
            <div className={styles.meta}>
              <span className={styles.date}>{formatedDate}</span>
              <Link className={styles.author} to={'/members#' + author.slug}>@<span>{author.slug}</span></Link>
            </div>
          </div>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: content.rendered}}/>
          { single && <Link to="/blog">&lt;- oбратно</Link> }
        </div>
    );
  }
}
