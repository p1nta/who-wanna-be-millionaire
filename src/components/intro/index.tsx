import clsx from 'clsx';

import s from './styles/index.module.css';


const formatter = new Intl.NumberFormat(
  'ua-UA',
  {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol',
  },
);

interface IIntroProps {
  onStart: () => void;
  points?: number;
 }
 
 const Intro: React.FunctionComponent<IIntroProps> = ({
  onStart,
  points,
 }) => (
  <div className={clsx(s.content, s.m_width)}>
    <div className={s.logo}>
      <img
        src="/img/logo.png"
        alt="Million guy logo"
      />
      {typeof points != 'undefined' && (
        <div className={s.points}>
          {formatter.format(points)}
        </div>
      )}
    </div>
    <div className={s.menu}>
      <button
        className={s.menu_item}
        onClick={onStart}
      >
        {typeof points != 'undefined' ? 'RESTART GAME' : 'START GAME'}
      </button>
    </div>
  </div>
 );

 export default Intro;
