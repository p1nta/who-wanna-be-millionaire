import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Game from './containers/game';
import Intro from './containers/intro';
import QuestionCreate from './containers/question_create';

const Routing = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/create_questions"
        element={<QuestionCreate />}
      />
      <Route
        path="/game"
        element={ <Game />}
      />
      <Route
        path="/"
        element={ <Intro />}
      />
      <Route
        path="*"
        element={ <Game />}
      />
    </Routes>
  </BrowserRouter>
);

export default Routing;
