/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Question from "./Question";

class QuestionList extends Component {
  render() {
    const { questions } = this.props;
    return (
      <div className="questions">
        {questions.map((question) => {
          if (question.id === this.props.current) {
            return <Question question={question} key={question.id} {...this.props} />;
          }
          return null;
        })}
      </div>
    );
  }
}

export default QuestionList;
