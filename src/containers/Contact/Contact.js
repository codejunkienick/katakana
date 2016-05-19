import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {


  render() {
    return (
      <div>
        <h2 className="page-title">Связаться</h2>
        <p>
          наш email: <a href="mailto:mail@katakana.xyz">mail@katakana.xyz</a>
        </p>
      </div>
    );
  }
}
