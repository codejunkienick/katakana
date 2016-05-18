import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry } from 'components';


export default class Home extends Component {
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Blog"/>
        <BlogEntry
          title="News example title"
          author="codejunkienick"
          authorLink="http://codejunkienick.github.io"
          date="16-05-2016 09:22">
          <p style={{fontStyle: 'italic'}}>
            Consectetur nesciunt nobis dolorem placeat maxime quod atque temporibus, numquam perspiciatis impedit amet voluptate fuga esse pariatur atque assumenda voluptatem sed aspernatur sequi possimus quis. Ex suscipit iure placeat officiis!
          </p>
          <p>
            Dolor at et voluptatem non eum earum possimus ut error molestias. Temporibus odit vel vel excepturi sapiente. Quas rerum cupiditate obcaecati numquam eaque possimus. Odit laborum rerum officia qui enim.
          </p>
          <p>
            Dolor alias provident commodi aliquam nemo. Voluptatibus at atque mollitia a ullam? Cupiditate consectetur facilis voluptatibus libero recusandae commodi quisquam eveniet fuga ratione? Excepturi illo incidunt sunt esse blanditiis 
Consectetur dolorem voluptatibus velit consequuntur architecto, aperiam. Repudiandae ea illo quibusdam explicabo dolore saepe labore inventore repellendus? Deserunt eos maiores aut quasi sed cumque. Doloremque quasi harum optio odio voluptatum?
          </p>
          <p>
            Consectetur nesciunt nobis dolorem placeat maxime quod atque temporibus, numquam perspiciatis impedit amet voluptate fuga esse pariatur atque assumenda voluptatem sed aspernatur sequi possimus quis. Ex suscipit iure placeat officiis!
          </p>
        </BlogEntry>
        <BlogEntry
          title="News example title"
          author="codejunkienick"
          authorLink="http://codejunkienick.github.io"
          date="16-05-2016 09:22">
          <p>
            Consectetur nesciunt nobis dolorem placeat maxime quod atque temporibus, numquam perspiciatis impedit amet voluptate fuga esse pariatur atque assumenda voluptatem sed aspernatur sequi possimus quis. Ex suscipit iure placeat officiis!
          </p>
          <p>
            Dolor at et voluptatem non eum earum possimus ut error molestias. Temporibus odit vel vel excepturi sapiente. Quas rerum cupiditate obcaecati numquam eaque possimus. Odit laborum rerum officia qui enim.
          </p>
          <p>
            Dolor alias provident commodi aliquam nemo. Voluptatibus at atque mollitia a ullam? Cupiditate consectetur facilis voluptatibus libero recusandae commodi quisquam eveniet fuga ratione? Excepturi illo incidunt sunt esse blanditiis 
Consectetur dolorem voluptatibus velit consequuntur architecto, aperiam. Repudiandae ea illo quibusdam explicabo dolore saepe labore inventore repellendus? Deserunt eos maiores aut quasi sed cumque. Doloremque quasi harum optio odio voluptatum?
          </p>
          <p>
            Consectetur nesciunt nobis dolorem placeat maxime quod atque temporibus, numquam perspiciatis impedit amet voluptate fuga esse pariatur atque assumenda voluptatem sed aspernatur sequi possimus quis. Ex suscipit iure placeat officiis!
          </p>
        </BlogEntry>
      </div>
    );
  }
}
