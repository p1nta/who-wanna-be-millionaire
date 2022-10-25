import { useState, useCallback } from 'react'

import questionValidator from '../utils/question_validator';
import uuid from '../utils/uuid';

const initialQuestion: IQuestion['question'] = '';
const initialCorrect: number = NaN;
const initialAnswers: IQuestion['answers'] = ['', '', '', '']
const initialIsValid: boolean = false;
const initialID: string = '';

function useQuestionForm() {
  const [id, setId] = useState(initialID);
  const [questionsList, setQuestionList] = useState<IQuestion[]>([]);
  const [question, setQuestion] = useState(initialQuestion);
  const [correct, setCorrect] = useState(initialCorrect);
  const [answers, setAnswers] = useState(initialAnswers);
  const [isValid, setValid] = useState(initialIsValid);

  const validateDataFullFilled = useCallback(() => {
    try {
      questionValidator({
        id,
        question,
        answers,
        correct: answers[correct],
      });

      setValid(true);
    } catch (err) {
      console.warn(err);
      setValid(false);
    }
  }, [question, correct, answers]);

  const resetState = (questionID = '') => {
    if (questionID) {
      const updatedQuestionList = questionsList.filter(el => el.id !== questionID);

      setQuestionList(updatedQuestionList);
    }

    setQuestion(initialQuestion);
    setCorrect(initialCorrect);
    setAnswers(initialAnswers);
    setValid(initialIsValid);
    setId(initialID);
  }

  const setStateFrom = (data: IQuestion) => {
    setQuestion(data.question);
    setCorrect(data.answers.indexOf(data.correct));
    setAnswers(data.answers);
    setId(data.id);
    setValid(true);
  }

  const handleQuestionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setQuestion(e.target.value);
    validateDataFullFilled();
  }

  const handleCorrectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Number(e.target.value);
    setCorrect(index);
    validateDataFullFilled();
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const index = Number(name);
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
    validateDataFullFilled();
  }

  const handelQuestionSubmit = () => {
    if (isValid) {
      const data = {
        question: question.trim(),
        answers: answers.map(el => el.trim()),
        id: id ? id : uuid(),
        correct: answers[correct].trim(),
      };

      if (!id) {
        questionsList.unshift(data);
      } else {
        const index = questionsList.findIndex(el => el.id === id);

        if (index !== -1) {
          questionsList[index] = data;
        }
      }

      setQuestionList([...questionsList]);
      resetState();
    }
  }

  return {
    questionsList,
    question,
    correct,
    answers,
    isValid,
    id,
    handleQuestionChange,
    handleCorrectChange,
    handleAnswerChange,
    resetState,
    setStateFrom,
    handelQuestionSubmit,
  }
}

export default useQuestionForm
