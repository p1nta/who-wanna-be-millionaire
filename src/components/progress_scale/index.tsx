import clsx from 'clsx';

import { progressMarks } from '../../constants/progress_marks';

import s from './styles/index.module.css'

const formatter = new Intl.NumberFormat(
  'ua-UA',
  {
    style: 'currency',
    currency: 'UAH',
    minimumFractionDigits: 0,
    currencyDisplay: 'narrowSymbol',
  },
);

interface IWinScaleItemProps {
  sum: number;
  index: number;
   active: number;
};

const ProgressScaleItem : React.FunctionComponent<IWinScaleItemProps> = ({ sum, index, active }) => (
  <div
    className={clsx(s.win_scale_item, {
      [s.m_active]: index === active,
      [s.m_completed]: index < active,
      [s.m_stone]: index % 5 === 0,
    })}
  >
    <div className={s.position}>
      {index}.
    </div>
    <div className={s.value}>
      {formatter.format(sum)}
    </div>
  </div>
);


const ProgressScale: React.FunctionComponent<{ active: number }> = ({ active}) => {
  return (
    <div className={s.content_wrapper}>
      {progressMarks.map((el, i) => (
        <ProgressScaleItem
          key={el}
          sum={el}
          index={i + 1}
          active={active}
        />
      ))}
    </div>
  );
};

export default ProgressScale;
