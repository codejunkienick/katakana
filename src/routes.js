import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {
    App,
    Blog,
    About,
    Contact,
    Projects,
    Members,
    NotFound,
    SinglePost
  } from 'containers';

export default (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path="/" component={App}>
      { /* Home (main) route */ }
      <IndexRoute component={Blog}/>

      { /* Routes */ }
      <Route path="blog/:slug" component={SinglePost}/>
      <Route path="blog" component={Blog}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="projects" component={Projects}/>
      <Route path="members" component={Members}/>

      { /* Catch all route */ }
      <Route path="*" component={NotFound} status={404} />
    </Route>
  );
};
