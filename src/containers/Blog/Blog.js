import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry } from 'components';


export default class Home extends Component {
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.home}>
        <Helmet title="Блог"/>
        <BlogEntry
          title="KATAKANA --version 0.1"
          author="codejunkienick"
          authorLink="http://codejunkienick.github.io"
          date="16-05-2016 09:22">
          <p style={{fontStyle: 'italic'}}>
            "У тебя есть портфолио?", "Когда вы уже катакану запустите", "Тебе с твоими скиллами на работу пора" - people 
          </p>
          <p>
            ...
          </p>
          <h5>changelog:</h5>
          <ul>
            <li>Созданы все страницы сайта</li>
          </ul>
        </BlogEntry>
      </div>
    );
  }
}
