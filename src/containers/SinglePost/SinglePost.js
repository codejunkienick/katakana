import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry, Spinner } from 'components';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { getPost } from 'redux/modules/blog';

@connect(
  state => ({
    post: state.blog.post,
    loading: state.blog.loading,
    loaded: state.blog.loaded,
  }), 
  {getPost}
)
export default class Home extends Component {
  constructor(props) {
    super(props);
    const {slug} = this.props.params;
    const { getPost } = this.props;
    getPost(slug);
  }
  render() {
    const { loading, post, loaded } = this.props;
    const styles = require('./SinglePost.scss');
    return (
      <div className={styles.blog}>
        <Helmet title={(post) ? post.title.rendered : 'Загрузка'}/>
        {loaded && post &&
          <BlogEntry {...post} />
        }
        {loading && <Spinner />}
      </div>
    );
  }
}
