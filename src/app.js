import React, { Component } from "react";
import "./app.css";
import PomodoroClock from "./components/pomodoro-clock";
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Provider store={store}>
          <PomodoroClock />
        </Provider>
      </div>
    );
  }
}

export default App;
