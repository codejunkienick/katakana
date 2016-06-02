import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry, Spinner} from 'components';
import { Link } from 'react-router';
import { connect } from 'react-redux';

@connect(
  state => ({
    posts: state.blog.posts,
    loading: state.blog.loading
  }))
export default class Home extends Component {
  componentDidMount() {
    hljs.initHighlighting.called = false;
    hljs.initHighlighting();
  }
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.blog}>
        <Helmet title="Блог"/>
        <h1 style={{display: 'none'}}>Блог</h1>
        {this.props.posts && this.props.posts.map((post, idx) => <BlogEntry {...post} key={idx} />)}
        {this.props.loading && !this.props.posts && <Spinner />}
      </div>
    );
  }
}
