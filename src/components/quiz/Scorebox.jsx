/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Alert from "react-bootstrap/Alert";

class Scorebox extends Component {
  render() {
    return (
      <Alert className="scorebox">
        <center>
          Question <strong>{this.props.current + 1}</strong> of{" "}
          <strong>{this.props.questions.length}</strong>
          <br />
          <strong>Score </strong>
          <span className="score">{this.props.score}</span>
        </center>
      </Alert>
    );
  }
}

export default Scorebox;
