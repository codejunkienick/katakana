import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry } from 'components';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(
  state => ({posts: state.blog.posts}))
export default class Home extends Component {
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.blog}>
        <Helmet title="Блог"/>
        {this.props.posts.map((post, idx) => <BlogEntry {...post} key={idx} />)}
      </div>
    );
  }
}
