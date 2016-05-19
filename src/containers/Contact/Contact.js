import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {


  render() {
    return (
      <div>
        <h2 className="page-title">Связаться</h2>
        <p style={{lineHeight: '2.2'}}>
          email: <a href="mailto:mail@katakana.xyz">mail@katakana.xyz</a><br/>
          телефон: +7 (902) 641&#8210;85&#8210;87 (Потеряев Никита) <br />
          telegram: <a href="http://telegram.me/codejunkienick">telegram.me/codejunkienick</a> (Потеряев Никита)
        </p>
      </div>
    );
  }
}
