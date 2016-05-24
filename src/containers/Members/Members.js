import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {
  render() {
    const styles = require('./Members.scss');
    return (
      <div>
        <Helmet title="Состав"/>
        <h2 className="page-title">Состaв</h2>
        <div>
          <h3 className={styles.memberName}>Никита Потеряев @codejunkenick</h3>
          <div className={styles.memberCols}>
            <div className={styles.memberCol}>
              <p>
                <span>(связаться)</span><br />
                mail: <a href="mailto:nickpoteryaev@gmail.com">nickpoteryaev@gmail.com</a><br/>
                website: <a href="http://codejunkienick.github.io">codejunkienick.gihub.io</a><br />
                messenger: <a href="http://telegram.me/codejunkienick">telegram</a><br/>
                gihub: <a href="http://github.com/codejunkienick">@codejunkienick</a><br/>
                social: <a href="http://vk.com/codejunkienick">vk</a><br/>
              </p>
            </div>
            <div className={styles.memberCol}>
              <p>
                <span>(технологии)</span><br />
                ES 6/7, C#, CSS, HTML<br/>
                node.js, asp.net 5, <br/>
                React.js, socket.io, express<br/>
                PostgreSQL, MongoDB <br/>
              </p>
            </div>
            <div className={styles.memberCol}>
              <p>
                <span>(навыки)</span><br />
                frontend/backend разработчик<br/>
                Прототипирование<br/>
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className={styles.memberName}>Игорь Лемешкин @igorlem</h3>
          <div className={styles.memberCols}>
            <div className={styles.memberCol}>
              <p>
                <span>(связаться)</span><br />
                mail: <a href="mailto:igorlem@icloud.com">igorlem@icloud.com</a><br/>
                behance: <a href="http://behance.net/igorlem">behance.net/igorlem</a><br />
                messenger: <a href="http://telegram.me/igorlem">telegram</a><br/>
              </p>
            </div>
            <div className={styles.memberCol}>
              <p>
                <span>(технологии)</span><br />
                Adobe Ilustrator<br/>
                Sketch<br/>
              </p>
            </div>
            <div className={styles.memberCol}>
              <p>
                <span>(навыки)</span><br />
                Дизайнер UI/UX<br/>
                Типография
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
