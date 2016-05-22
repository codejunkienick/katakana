import React, {Component} from 'react';
import Helmet from 'react-helmet';

export default class About extends Component {


  render() {
    const styles = require('./Projects.scss');
    return (
      <div>
        <Helmet title="Проекты"/>
        <h2 className="page-title">Проекты</h2>
        <div className={styles.project}>
          <h3 className={styles.projectName}>Katakana</h3>
          <div className={styles.projectCols}>
            <div className={styles.projectCol}>
              <p>
                <span>()</span><br />
                status: В разработке<br />
                dev_time: ? 
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(технологии)</span><br />
                node.js <br />
                ReactJS<br />
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(разработчики)</span><br />
                Потеряев Никита <br />
                Игорь Лемешкин
              </p>
            </div>
          </div>
          <p>
            Проект для экспериментов, блог, портфолио. Сайт никогда не будет закончен.
          </p>
        </div>
        <div className={styles.project}>
          <h3 className={styles.projectName}>Castor API/Front</h3>
          <div className={styles.projectCols}>
            <div className={styles.projectCol}>
              <p>
                <span>()</span><br />
                status: Заморожен<br />
                source_code: <a href="https://github.com/codejunkienick/castor-api">backend</a>, <a href="http://github.com/codejunkienick/castor-frontend">frontend</a><br />
                dev_time: 4 нед.
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(технологии)</span><br />
                ASP.NET Core, Entity Framework 7<br />
                Token Authentication<br />
                ReactJS, Redux, material-ui<br />
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(разработчики)</span><br />
                Потеряев Никита
              </p>
            </div>
          </div>
          <p>
            Проект разрабатывался для курсовой работы. Цель былa написать систему управления новостей. Одним из ограничений было использование C# и MS SQL, пришлось основательно изучить ASP.NET Core и EF7. В процессе была создана панель администратора на ReactJS, реализованы основные CRUD операции, реализована система аутентификации по токенам и поддержка пользовательских ролей. Из-за нехватки времени проект пришлось приостановить.
          </p>
        </div>
        <div className={styles.project}>
          <h3 className={styles.projectName}>Radiohse</h3>
          <div className={styles.projectCols}>
            <div className={styles.projectCol}>
              <p>
                <span>()</span><br />
                status: Заморожен<br />
                preview: <a href="http://radiohse.cloudapp.net">radiohse.cloudapp.net</a><br />
                source_code: <a href="http://github.com/codejunkenick/reactivecast">github</a><br />
                dev_time: 1.5 нед.
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(технологии)</span><br />
                node.js, socket.io, icecast <br />
                ReactJS, material-ui <br />
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(разработчики)</span><br />
                Потеряев Никита
              </p>
            </div>
          </div>
          <p>
            Проект разрабатывался в рамках студенческого онлайн радио. Чтобы в короткие сроки разработать дизайн, использовались элементы Material Design из библиотеки material-ui. Планировалось создать минималистичную CMS для интегрирования с радио сервером icecast, но так как проект не смог развиваться из-за отсуствия желания и времени со стороны организаторов радио, разработка была приостановлена и исходный код был выложен на github.
          </p>
        </div>
        <div className={styles.project}>
          <h3 className={styles.projectName}>Mymasterflorist</h3>
          <div className={styles.projectCols}>
            <div className={styles.projectCol}>
              <p>
                <span>()</span><br />
                status: Готов<br />
                preview: <a href="http://mymasterflorist.ru/shop/">mymasterflorist.ru/shop</a><br />
                dev_time: 4 нед.
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(технологии)</span><br />
                WordPress, jQuery <br />
                Material Design, Foundation 5.0<br />
                Robokassa gateway<br />
              </p>
            </div>
            <div className={styles.projectCol}>
              <p>
                <span>(разработчики)</span><br />
                Потеряев Никита <br/>
                Игорь Лемешкин
              </p>
            </div>
          </div>
          <p>
            Данный проект выполнен на заказ. Была создана уникальная тема для WordPress. При разработке дизайна использовали подход mobile-first, после чего дизайн адаптировали под планшеты и десктопы. Для оплаты заказов настроено подключение WordPress к системе оплаты Robokassa. Получен огромный опыт работы с клиентом напрямую, опыт по написанию требований к проекту.
          </p>
        </div>
      </div>
    );
  }
}
