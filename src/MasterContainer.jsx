import React from "react";
import "./mastercontainer.css";
import StartButton from "./masterStart.jsx";
import QuestionBox from "./QuestionBox.jsx";
import qData from "./questionData.json";
import lData from "./locationData.json";
import Results from "./Results.jsx";
import Logo from "./img/logoblue.png";
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
      start: true,
      view: "start",
      i: 0,
      buttonText: "Put Our Service to the Test!",
      button: "Start",
      content: null,
      title: "Put Our Service to the Test!",
      answer: [],
      list: [],
    };
  }
  //Resets State to the default on the MasterContainer component.
  homeClicked = (isTrue) => {
    if (this.state.start !== isTrue) {
      this.setState({
        start: true,
        view: "start",
        i: 0,
        buttonText: "Put Our Service to the Test!",
        button: "Start",
        content: null,
        title: "Put Our Service to the Test!",
        answer: [],
        list: [],
        answerKey: [],
      });
    }
  };
  //Sets the initial quiz state. Content = first question. Title = question number. Answer Key = an array with all possible choices for the given question. qSort = Unique id for question. List = all possible locations, to be filtered as questions are answered
  onStartClick = () => {
    this.props.quizStart();
    this.setState({
      buttonText: "",
      view: "quiz",
      content: this.dataArray[this.state.i].questionText,
      title: this.dataArray[this.state.i].questionNumber,
      answerKey: this.dataArray[this.state.i].choices,
      qSort: this.dataArray[this.state.i].qSort,
      list: JSON.parse(JSON.stringify(lData.locations)),
      start: false,
    });
  };
  //Function that takes in the unique sort id for a question, and the value of the user's choice, and increments the point values of all locations that fall under the answer value's criteria. Called by addAnswer().
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
  //Takes in the answerValue of the user's choice, and sets the state. state.Answer updates to include the latest user answer. state.Content updates to the next question. state.Title updates to the next question number. state.answerKey updates to the choices for the next question. state.qSort updates to the unique id of the next question. state.list updates to the list of all locations with the updated point values.
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
  //Takes in the final list of locations with final point values, and returns that list sorted with locations sorted from highest point value to lowest point value.
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
            <div className="WelcomeBox">
              <p className="Question">{this.state.content}</p>
              <div onClick={this.onStartClick}>
                <img
                  className="HomeImg"
                  src={Logo}
                  alt="Crossed Spoon and Fork"
                />
                <StartButton buttonTitle={this.state.buttonText}></StartButton>
              </div>
            </div>
          </div>
        )}
        {this.state.view === "quiz" && (
          <div className="QuestionContainer">
            <div className="QuestionTextBox">
              <div className="QuestionNumber">{this.state.title}</div>
              <div className="QuestionText">{this.state.content}</div>
            </div>
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
