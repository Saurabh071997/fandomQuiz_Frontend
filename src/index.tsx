import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizDataProvider } from "./context/QuizDataProvider";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <Router>
    <QuizDataProvider>
      <App />
    </QuizDataProvider>
  </Router>,
  rootElement
);
