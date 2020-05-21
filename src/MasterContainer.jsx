import React from "react";
import "./mastercontainer.css";
import StartButton from "./masterStart.jsx";
import QuestionBox from "./QuestionBox.jsx";
import Rizzo from "./rizzo.png";
import qData from "./questionData.json";
import lData from "./locationData.json";
import Results from "./Results.jsx";

class MasterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.filterLocations = this.filterLocations.bind(this);
    this.homedClicked = this.homeClicked.bind(this);
    this.endQuiz = this.endQuiz.bind(this);
    this.incrementer = 0;
    this.dataArray = qData.questions;
    this.arrayOfUserAnswers = [];
    this.state = {
      view: "start",
      i: 0,
      buttonText: "Begin",
      button: "Start",
      content: null,
      title: "Welcome to Be Our Guest!",
      answer: [],
      list: [],
      homeClicked: false,
    };
  }

  homeClicked = (isTrue) => {
    if (isTrue) {
      this.setState({
        view: "start",
        i: 0,
        buttonText: "Begin",
        button: "Start",
        content: null,
        title: "Welcome to DisnEats!",
        answer: [],
        list: [],
        homeClicked: true,
      });
      this.props.hasReset();
    }
  };
  onStartClick = () => {
    this.setState({
      buttonText: "",
      view: "quiz",
      content: this.dataArray[this.state.i].questionText,
      title: this.dataArray[this.state.i].questionNumber,
      answerKey: this.dataArray[this.state.i].choices,
      qSort: this.dataArray[this.state.i].qSort,
      list: JSON.parse(JSON.stringify(lData.locations)),
      homeClicked: false,
    });
  };

  filterLocations = (sortMethod, answerValue) => {
    const list = [...this.state.list];
    if (sortMethod === "Name") {
      if (answerValue !== "NotMatter") {
        list.map((item) => {
          if (item[sortMethod] === answerValue) {
            item.Places.map((place) => {
              place.Points = place.Points + 3;
            });
          }
        });
      }
    } else {
      list.map((item) => {
        item.Places.map((loc) => {
          if (loc[sortMethod] == answerValue) {
            loc.Points++;
          }
        });
      });
    }
    return list;
  };
  addAnswer = (answerValue) => {
    let screenState = "quiz";
    let updatedList = this.filterLocations(this.state.qSort, answerValue);
    this.state.i = this.state.i + 1;
    if (this.state.i === 13) {
      updatedList = this.endQuiz(updatedList);
      screenState = "results";
    }
    this.setState({
      answer: this.state.answer.concat([answerValue]),
      content: this.dataArray[this.state.i].questionText,
      title: this.dataArray[this.state.i].questionNumber,
      answerKey: this.dataArray[this.state.i].choices,
      qSort: this.dataArray[this.state.i].qSort,
      list: updatedList,
      homeClicked: false,
      view: screenState,
    });
  };
  endQuiz = (list) => {
    return list.map((item) => {
      return item.Places.sort((a, b) => {
        return b.Points - a.Points;
      });
    });
  };
  render() {
    return (
      <div homeClicked={this.homeClicked(this.props.homeClick)}>
        {this.state.view === "start" && (
          <div className="Welcome">
            <div className="Welcome-box">
              <p className="Welcome-title">{this.state.title}</p>
              <p className="Question">{this.state.content}</p>
              <div onClick={this.onStartClick}>
                <img
                  style={{ width: "30%", marginBottom: "1%" }}
                  src={Rizzo}
                  alt="Rizzo"
                />
                <StartButton buttonTitle={this.state.buttonText}></StartButton>
              </div>
            </div>
          </div>
        )}
        {this.state.view === "quiz" && (
          <div className="QuestionTextBox">
            <div className="QuestionNumber">{this.state.title}</div>
            <div className="QuestionText">{this.state.content}</div>
          </div>
        )}
        <div className="ChoiceAreaBox">
          {this.state.view === "quiz" && (
            <QuestionBox
              onChoiceSelection={this.addAnswer}
              answers={this.state.answerKey}
              onSubmitAnswer={this.addAnswer}
            />
          )}
        </div>
        {this.state.view === "results" && (
          <div>
            <Results resultData={this.state.list}></Results>
          </div>
        )}
      </div>
    );
  }
}

export default MasterContainer;
