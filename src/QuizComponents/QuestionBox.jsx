import React from "react";
import "../MasterContainer/mastercontainer.css";
import AnswerItem from "./AnswerItem.jsx";

class QuestionBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelection = this.handleSelection.bind(this);
  }
  //Sets answer to the value of the user's current choice to
  handleSelection(selectionValue) {
    this.setState({ answer: selectionValue });
  }
  //Submits the answer to MainContainer component.
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.answer !== null) {
      this.props.onChoiceSelection(this.state.answer);
      this.setState({ answer: null });
    } else {
      this.setState({ warning: "No Null Submit" });
    }
  }

  render() {
    return (
      <div>
        <div>
          <div className="ChoiceArea flex-container">
            {this.props.answers.map((item, index) => (
              <label>
                <AnswerItem
                  onChoiceSelection={this.handleSelection}
                  type="radio"
                  itemName={item.Name}
                  itemVal={item.Value}
                  key={index}
                  currentAnswer={this.state.answer}
                  isChoice={this.state.answer === item.Value}
                />
              </label>
            ))}
          </div>
          <div className="ChoiceAreaSubmit">
            <button className="SubmitButton" onClick={this.handleSubmit}>
              Onwards
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default QuestionBox;
