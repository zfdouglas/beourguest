import React from "react";
import "./mastercontainer.css";

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.colorinator = this.colorinator.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = (event) => {
    var answer = event.target.value;
    this.props.onChoiceSelection(answer);
  };

  handleClick = () => {
    var answer = this.props.itemVal;
    this.props.onChoiceSelection(answer);
  };

  colorinator(isChoice) {
    if (isChoice === true) {
      return { backgroundColor: "rgb(255, 216, 109)", color: "cornflowerblue" };
    } else {
      return {};
    }
  }

  render() {
    return (
      <div>
        <div
          className="ChoiceItems"
          style={this.colorinator(this.props.isChoice)}
        >
          <input
            type="radio"
            id={this.props.itemVal}
            value={this.props.itemVal}
            checked={this.props.isChoice}
            key={this.props.index}
            onChange={this.handleChange}
          ></input>
          <label
            value={this.props.itemVal}
            htmlfor={this.props.itemVal}
            onClick={this.handleClick}
          >
            {this.props.itemName}
          </label>
        </div>
      </div>
    );
  }
}

export default AnswerItem;
