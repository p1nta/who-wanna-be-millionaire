import clsx from 'clsx';


import s from './styles/index.module.css';

interface IControlsProps {
  onNext: () => void;
  onFinish: () => void;
  hidden: boolean;
  gameCompleted: boolean;
}

const Controls: React.FunctionComponent<IControlsProps> = ({
  onNext,
  onFinish,
  hidden,
  gameCompleted,
}) => (
  <div className={clsx(s.content_wrapper, hidden && s.m_hidden)}>
    <button
      className={clsx(s.controls_button, gameCompleted && s.m_hidden)}
      onClick={onNext}
    >
      Next Question
    </button>
    <button
      className={s.controls_button}
      onClick={onFinish}
    >
      Complete
    </button>
  </div>
);

export default Controls;
