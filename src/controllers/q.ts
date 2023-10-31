// import questions from '../constants/questions_Fri, 31 Mar 2023 08_35_30 GMT.json';
import questions from '../constants/questions_Tue, 31 Oct 2023 13_23_41 GMT.json';
// import questions from '../constants/questions_list';
// import questions from '../constants/questions_list_2';

interface IQuestionV1 {
  question: string;
  id: string;
  correct: string;
  answers: string[];
}
interface IQuestionV2 {
  question: string;
  id: string;
  correct: number;
  answers: string[];
}

type TQuestion = IQuestionV1 | IQuestionV2;

class QController {
  qNumbers = [];
  list: TQuestion[];

  constructor() {
    const localList = localStorage.getItem('Q');

    this.list = localList ? JSON.parse(localList) : questions;

    for (let i = 0; i < this.list.length; i++) {
      this.qNumbers.push(i);
    }
  }

  removeQIndex = (index) => {
    this.qNumbers.splice(index, 1);
  }

  getRandomQ = () => {
    const index =  Math.floor(Math.random() * (this.qNumbers.length - 1));

    const qNumber = this.qNumbers[index];

    if (typeof qNumber === 'undefined') {
      debugger;
    }

    return {
      ...this.list[qNumber],
      index,
    };
  }

  markAsPlayed = (index) => {
    this.removeQIndex(index)

    const newList = [];

    for (let i = 0; i < this.qNumbers.length; i++) {
      const el = this.qNumbers[i];
      
      newList.push(this.list[el]);
    }

    localStorage.setItem('Q', JSON.stringify(newList));
  }

  getCorrect = (q: TQuestion) => {
    if (typeof q.correct === 'number') {
      return q.answers[q.correct];
    }

    return q.correct;
  }
}

export default new QController();
