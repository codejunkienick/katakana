import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {


  render() {
    return (
      <div>
        <Helmet title="Проекты"/>
        <h2 className="page-title">Проекты</h2>
        <p>KATAKANA is a lorem ipsum</p>
      </div>
    );
  }
}
