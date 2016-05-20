import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./Members.scss');
    return (
      <div>
        <h2 className="page-title">Состaв</h2>
        <div className={styles.member}>
          <h3 className={styles.memberName}>Никита Потеряев</h3>
          <div>
            <div>
              <p>
                <span>(связаться)</span><br />
                website: <a href="http://codejunkienick.github.io">codejunkienick.gihub.io</a><br />
                gihub: <a href="http://github.com/codejunkienick">@codejunkienick</a><br/>
                messenger: <a href="">telegram</a><br/>
                mail: <a href="mailto:nickpoteryaev@gmail.com">nickpoteryaev@gmail.com</a><br/>
                social: <a href="http://vk.com/codejunkienick">Vkontakte</a><br/>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
