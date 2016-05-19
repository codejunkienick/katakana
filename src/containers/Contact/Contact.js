import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {


  render() {
    return (
      <div>
        <h2 className="page-title">Contact</h2>
        <p>
          our email: <a href="mailto:mail@katakana.xyz">mail@katakana.xyz</a>
        </p>
      </div>
    );
  }
}
