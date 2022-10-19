import { useState } from "react";

import s from './styles/index.module.css';

import Complete from '../../components/complete';
import WinScale from '../../components/progress_scale';
import Controls from '../../components/controls';
import Sounds from '../../components/sounds';
import Question from '../../components/question';

import { progressMarks } from '../../constants/progress_marks';

import qController from '../../controllers/q';
import useCounter from '../../hooks/use_counter';

function Game() {
  const [music, setMusic] = useState('');
  const [stage, setStage] = useState<'game' | 'complete'>('game');
  const [q, setQ] = useState(qController.getRandomQ());
  const question =  useCounter(1);
  const [selected, setSelected] = useState('');
  const [correct, setCorrect] = useState('');

  const updMusic = (track) => {
    if (music && track === music) {
      setMusic('')
    } else {
      setMusic(track)
    }
  }

  const getQ = () => {
    setQ(qController.getRandomQ());
    question.increment();
    updMusic('question');
    setSelected('');
    setCorrect('');
  }

  const onSetSelected = (value) => {
    if (!selected || selected !== value) {
      setSelected(value);
      updMusic('announcer_talk');
    } else if (value === selected) {
      setCorrect(q.q.correct)

      if (q.q.correct === selected) {
        qController.markAsPlayed(q.index);
        updMusic('correct');
      } else {
        updMusic('wrong');
        qController.markAsPlayed(q.index);
      }
    }
  }

  const restart = () => {
    setMusic('question');
    setStage('game');
    getQ();
    question.reset();
  };

  const showCompleted = () => {
    const value = question.count - 1;
     if (selected) {
      question.setCount(value - question.count % 5);
    } else {
       question.setCount(value);
     }

     setStage('complete');
  };

  if (stage === 'complete') {
    return (
      <div className={s.main}>
        <Complete
          onStart={restart}
          points={progressMarks[question.count] || 0}
        />
      </div>
    );
  }

  return (
    <div className={s.main}>
      <Sounds music={music} />
      <div className={s.sidebar_wrapper}>

      </div>
      <div className={s.game_block_wrapper}>
        {q && (
          <Question
            answers={q.q.answers}
            selected={selected}
            onSelect={onSetSelected}
            correct={correct}
            question={q.q.question}
          />
        )}
      </div>
      <div className={s.sidebar_wrapper}>
        <div className={s.progress_block}>
          <WinScale active={question.count} />
        </div>
        <div className={s.controls_block}>
          <Controls
            onNext={getQ}
            onFinish={showCompleted}
            hidden={!correct}
            gameCompleted={correct && (correct !== selected || question.count === progressMarks.length)}
          />
        </div>
      </div>
    </div>
  );
}

export default Game;
