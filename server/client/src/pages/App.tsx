import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { SurveyDashboard } from "./Surveys/SurveyDashboard";
import { LandingPage } from "./Landing";
import { SurveyNew } from "./Surveys/SurveyNew";
import { Header } from "../components/Header";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/surveys" component={SurveyDashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    </div>
  );
};

export default App;
