import { Link } from 'react-router-dom';
import clsx from 'clsx';

import useQuestionForm from '../../hooks/use_question_form';
import downloadAsJSON from '../../utils/download_as_json';

import s from './styles/index.module.css';

function renderAnswer(value, index, correct, onCorrectChange, onTextChange) {
  return (
    <div key={index} className={s.questions_row}>
      <div className={s.is_correct_wrapper}>
        <input
          type="checkbox"
          value={index}
          checked={correct === index}
          onChange={onCorrectChange}
          className={s.checkbox_view}
        />
      </div>
      <div className={s.answer_wrapper}>
        <textarea
          className={s.question_input}
          onChange={onTextChange}
          name={index}
          value={value}
          required
          placeholder={`Answer ${index + 1}`}
        />
      </div>
    </div>
  );
}

function renderSidebar(questionsList, handleOpenQuestion) {
  if (!questionsList.length) {
    return null;
  }

  return  (
    <>
      <div className={s.sidebar_header}>
        Questions list
      </div>
      {questionsList.map((el, i) => (
        <div className={s.sidebar_item} key={el.question} onClick={() => handleOpenQuestion(el)}>
          {`${i+1}. ${el.question}`}
        </div>
      ))}
    </>
  )
}

function QuestionCreate() {
  const {
    question,
    correct,
    answers,
    isValid,
    questionsList,
    id,
    handleQuestionChange,
    handleCorrectChange,
    handleAnswerChange,
    setStateFrom,
    resetState,
    handelQuestionSubmit,
  } = useQuestionForm();

  return (
    <div className={s.main}>
      <div className={s.sidebar_wrapper}>
        <div className={s.sidebar_content}>
          {renderSidebar(questionsList, setStateFrom)}
        </div>
        <div className={s.controls_block}>
          <button
            className={s.controls_button}
            onClick={() => downloadAsJSON(JSON.stringify(questionsList))}
            disabled={!questionsList.length}
          >
            DOWNLOAD
          </button>
          <Link
              to="/"
              className={s.controls_button}
            >
              BACK TO MAIN
          </Link>
        </div>
      </div>
      <div className={s.content}>
        <div className={s.m_form}>
          <p className={s.label}>
            Question
          </p>
          <textarea
            className={s.textarea_view}
            value={question}
            onChange={handleQuestionChange}
            placeholder="Type your question here"
            required
          />
          <div className={s.questions_wrapper}>
            <div className={s.questions_row}>
              <p className={clsx(s.label, s.is_correct_wrapper)}>
                Is correct
              </p>
              <p className={clsx(s.label, s.answer_wrapper)}>
                Answer
              </p>
            </div>
            {answers.map((e, i) => renderAnswer(e, i, correct, handleCorrectChange, handleAnswerChange))}
          </div>
          <button
            disabled={!isValid}
            className={s.menu_item}
            onClick={handelQuestionSubmit}
          >
            Submit
          </button>
          <button
            className={s.menu_item}
            onClick={() => resetState(id)}
            disabled={!question.length && !answers.some(el => el.length) && isNaN(correct)}
          >
            {id ? 'Delete' : 'Clear'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionCreate;
