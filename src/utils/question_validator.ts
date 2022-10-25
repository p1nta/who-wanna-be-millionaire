function assertQuestion(q: IQuestion) {
  const { question, correct, answers } = q;

  if (typeof question !== 'string' || !question.length) {
    throw new Error('Question cant\'t be empty')
  }

  if (typeof correct !== 'string' || !correct.length) {
    throw new Error('Correct answer cant\'t be empty')
  }

  if (typeof answers === 'string' || !Array.isArray(answers) || answers.length !== 4) {
    throw new Error('Answers array must be array with 4 strings')
  }

  if (!answers.includes(correct)) {
    throw new Error('Answers array must contain correct answer')
  }

  if (answers.some((el) => typeof el === 'string' && !el)) {
    throw new Error('Answers cant\'t be empty')
  }

  if (new Set(answers).size !== answers.length) {
    throw new Error('Answers must be unique')
  }
}

function questionValidator(q: IQuestion | IQuestion[]) {
  if (Array.isArray(q)) {
    return q.forEach(assertQuestion);
  }

  return assertQuestion(q);
}

export default questionValidator;
