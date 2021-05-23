import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Navigation } from "./components/Navigation";
import { PrivateRoute } from "./components/PrivateRoute";
import { Home } from "./components/Home";
import { LeaderBoard } from "./components/LeaderBoard";
import { QuizPage } from "./components/QuizPage";
import { Footer } from "./components/Footer";
import { QuizPlay } from "./components/private/QuizPlay";
import { QuizResult } from "./components/private/QuizResult";

export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Navigation />
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/quiz/:quizId/:quizName" element={<QuizPage />} />
          <PrivateRoute path="/quiz/:quizId/play" element={<QuizPlay />} />
          <PrivateRoute path="/result" element={<QuizResult />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
