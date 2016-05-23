import React, { Component } from 'react';
import config from '../../config';
import Helmet from 'react-helmet';
import { BlogEntry } from 'components';
import { Link } from 'react-router';


export default class Home extends Component {
  render() {
    const styles = require('./Blog.scss');
    return (
      <div className={styles.blog}>
        <Helmet title="Блог"/>
        <BlogEntry
          title="KATAKANA --version 0.1"
          author="codejunkienick"
          authorLink="/members#codejunkienick"
          date="16-05-2016 09:22">
          <p style={{fontStyle: 'italic'}}>
            "У тебя есть портфолио?", "Когда вы уже катакану запустите", "Тебе с твоими скиллами на работу пора" &mdash; анонимные люди
          </p>
          <p>
            Вот уже почти как год <Link to="/contact#codejunkienick" title="Потеряев Никита @codejunkienick">я</Link> и <Link to="/contact#igorlem" title="Игорь Лемешкин @igorlem">Игорь</Link> зарегистрировали katakana.me, с тех пор мы несколько раз начинали разработку. Нарисовали скетчей, наделали прототипов, заводили репозиторий на bitbucket, но потом я отвлекся на разработку приложений на iOS и Android, освоение новых фреймворков и языков. Игорь в свою очередь занялся типографией и уже почти завершил свой собственный <a href="https://www.behance.net/gallery/37329789/Vocal-Typeface">шрифт</a>.
          </p>

          <p>
            После всего этого времени я решил, что нужно положить конец повисшему состоянию катаканы и создать что-то исключительно для себя, собственное место в сети. Недолго думая, я попросил Игоря отправить его старые скетчи и начал с ними работать. Затем решил сменить адрес на katakana.xyz: слишком уж сильно кусался ценник за поддержку .me домена.
          </p>
          <p>
            Я ограничил себя лишь 5 днями разработки, чтобы ни один проект не успел вмешаться и отвлечь меня. За эти 5 дней я переработал старые скетчи, убрав 80% задуманного и оставив лишь 20% того, что действительно требуется. После этого я взял уже ставший мне родным стартовый проект для ReactJS и начал его в который раз модифицировать под свои нужды.

          </p>
          <p>
            Так для чего же все-таки эта катакана? Когда я начинал создавать проект у меня в голове были изображения портфолио, выложенного плиткой. Я планировал сделать лендинг с анимациями и кнопками "нанять", "посчитать проект". Спустя год я понял, что мне это все не нужно, что мне хватит лишь сайта, где я бы мог делиться информацией о своих проектах, делиться своими идеями и решениями проблем, которые мне пришлось преодолеть, делая какой-либо проект.

          </p>
          <p>
            Подводя итог, хочу заявить, что KATAKANA v0.1 готова. Спасибо вам за то, что посетили наш проект, и если вы знаете кого-то, кому нужна помощь в разработке их проекта или вебсайта, то вы можете смело направлять их сюда. Также если вы хотите присоединиться или что-то спросить, то просто <Link to="/contact">свяжитесь с нами</Link> и дайте о себе знать.
          </p>
        </BlogEntry>
      </div>
    );
  }
}
