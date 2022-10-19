import clsx from 'clsx';

import s from './styles/index.module.css';

const answerLetters = ['A', 'B', 'C', 'D'];

interface IQuestion {
  question: string;
  correct: string;
  selected: string;
  answers: string[];
  onSelect: (value: string) => void;
 }
 
 const Question: React.FunctionComponent<IQuestion> = ({
  question,
  correct,
  answers,
  selected,
  onSelect,
 }) => (
  <div className={s.content_wrapper}>
    <div className={s.question_block}>
      {question}
    </div>
    <div className={s.answers_block}>
      {answers.map((el, i) => {

        return (
          <button
            key={el}
            className={clsx(s.answer_item, {
              [s.m_correct]:  correct && el === correct,
              [s.m_selected]: el === selected,
            })}
            onClick={() => onSelect(el)}
            disabled={!!correct}
          >
            {answerLetters[i]}:
            &nbsp;
            {el}
          </button>
        )
      })}
    </div>
  </div>
 );

 export default Question;
