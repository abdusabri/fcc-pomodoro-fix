import React, { Component } from "react";
import "./app.css";
import PomodoroClock from "./components/pomodoro-clock";

class App extends Component {
  render() {
    return (
      <div className="app">
        <PomodoroClock />
      </div>
    );
  }
}

export default App;
