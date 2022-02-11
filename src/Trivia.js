/* eslint-disable react/jsx-no-bind */
/* eslint-disable block-scoped-var */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { Component } from "react";
import QuestionList from "./components/quiz/QuestionList";
import Scorebox from "./components/quiz/Scorebox";
import Results from "./components/quiz/Results";
import "./Trivia.css";
import { createQuizData as quizData } from "./api/opentdb";

class Trivia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      score: 0,
      current: 0,
      loading: undefined,
    };
  }

  setCurrent(current) {
    this.setState({ current });
  }

  setScore(score) {
    this.setState({ score });
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
      this.setState({ questions: await quizData(), loading: false });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    if (this.state.loading === false) {
      if (this.state.current >= this.state.questions.length) {
        var scorebox = "";
        var results = <Results {...this.state} />;
      } else {
        scorebox = <Scorebox {...this.state} />;
        results = "";
      }
      return (
        <div>
          {scorebox}
          <QuestionList
            {...this.state}
            setCurrent={this.setCurrent.bind(this)}
            setScore={this.setScore.bind(this)}
          />
          {results}
        </div>
      );
    }
    return null;
  }
}

export default Trivia;
