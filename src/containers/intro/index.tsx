import { Link } from 'react-router-dom';
import clsx from 'clsx';

import s from './styles/index.module.css';


function Intro() {

  return (
    <div className={s.main}>
      <div className={clsx(s.content, s.m_width)}>
        <div className={s.logo}>
          <img
            src="/img/logo.png"
            alt="Million guy logo"
          />
        </div>
        <div className={s.menu}>
          <Link
            to="/game"
            className={s.menu_item}
          >
            START GAME
          </Link>
          {/* <Link
            to="/create_questions"
            className={s.menu_item}
          >
            CREATE SET OF QUESTIONS
          </Link> */}
        </div>
      </div>
    </div>
  );
}

export default Intro;
