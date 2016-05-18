import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./About.scss');
    return (
      <div>
        <h2>About</h2>
        <div className={styles.content}>
          <p>
            <span>Katakana</span> &mdash; это не студия и не компания, мы не являемся товарным знаком или брендом.</p>
          <p>
            <span>Katakana</span> &mdash; это группа людей, объединенная желанием создавать значимые и полезные для людей приложения, группа разработичков, которая может в краткие сроки создавать простые и качественные решения с помощью передовых технологий.
          </p>

          <p>И мы любим open source</p>
        </div>
      </div>
    );
  }
}
