import React from "react";
import logo from "./logo.png";
import MasterContainer from "./MasterContainer.jsx";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: false,
    };
    this.goHome = this.goHome.bind(this);
    this.resetHome = this.resetHome.bind(this);
  }
  goHome = () => {
    this.setState({
      home: true,
    });
  };
  resetHome = () => {
    this.setState({
      home: false,
    });
    return true;
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className="App-logo"
            alt="logo"
            onClick={this.goHome}
          />
          <p className="App-title" onClick={this.goHome}>
            Be Our Guest
          </p>
        </header>
        <MasterContainer
          hasReset={this.resetHome}
          homeClick={this.state.home}
        ></MasterContainer>
      </div>
    );
  }
}

export default App;
