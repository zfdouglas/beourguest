import React from "react";
import logo from "./img/logo.png";
import MasterContainer from "./MasterContainer.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      view: null,
      isStart: true,
    };
    this.setAsHome = this.setAsHome.bind(this);
    this.quizStarted = this.quizStarted.bind(this);
  }
  //Sets state to true when nav logo is clicked
  setAsHome = () => {
    if (this.state.home !== true) {
      this.setState({
        home: true,
        isStart: true,
      });
    }
  };
  //Sets state to false when quiz is started
  quizStarted = () => {
    this.setState({
      home: false,
      isStart: false,
    });
  };

  render() {
    return (
      <div className={this.state.isStart ? "AppHome" : "AppQuiz"}>
        <header className="AppHeader">
          <img
            src={logo}
            className="AppLogo"
            alt="logo"
            onClick={this.setAsHome}
          />
          <p className="AppTitle" onClick={this.setAsHome}>
            Be Our Guest
          </p>
        </header>
        <MasterContainer
          homeClick={this.state.home}
          quizStart={this.quizStarted}
          homeToggle={this.homeToggle}
        ></MasterContainer>
      </div>
    );
  }
}

export default App;
