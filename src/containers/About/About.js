import React, {Component} from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./About.scss');
    return (
      <div>
        <h2 className="page-title">О нас</h2>
        <div className={styles.content}>
          <p>
            <span>Katakana</span> &mdash; это не студия и не компания, мы не являемся товарным знаком или брендом.</p>
          <p>
            <span>Katakana</span> &mdash; это группа людей, объединенная желанием создавать значимые и полезные для людей приложения, группа разработичков, которая может в краткие сроки создавать простые и качественные решения с помощью передовых технологий.
          </p>
          <p>
              Если у вас есть проект для нас, вы можете обратиться к нам c помощью <Link to="/contact">контактных данных</Link> или лично к любому из действующего состава. 
          </p>
        </div>
      </div>
    );
  }
}
