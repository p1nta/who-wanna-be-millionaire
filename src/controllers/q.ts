import questions from '../constants/questions_list';

class QController {
  qNumbers = [];
  list: {
    question: string;
    correct: string;
    answers: string[];
}[];

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
      q: this.list[qNumber],
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
}

export default new QController();
