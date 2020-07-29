import React from "react";
import "../MasterContainer/mastercontainer.css";

class AnswerItem extends React.Component {
  constructor(props) {
    super(props);
    this.colorinator = this.colorinator.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  //Notifies the parent component of user choice
  handleChange = (event) => {
    var answer = event.target.value;
    this.props.onChoiceSelection(answer);
  };

  //Notifies the parent component of the user choosing the item.
  handleClick = () => {
    var answer = this.props.itemVal;
    this.props.onChoiceSelection(answer);
  };

  //Highlights the chosen answer item when selected
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
            <div className="ChoiceText"> {this.props.itemName}</div>
          </label>
        </div>
      </div>
    );
  }
}

export default AnswerItem;
