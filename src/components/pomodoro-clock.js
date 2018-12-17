import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import Reset from "./reset";
import PlayPause from "./play-pause";
import Session from "./session";
import SessionLength from "./session-length";

class PomodoroClock extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{ textAlign: "center" }} title="Pomodoro Clock" />
          <Divider />
          <CardContent>
            <div style={{ display: "flex" }}>
              <SessionLength sessionLabel="Session" />
              <SessionLength sessionLabel="Break" />
            </div>
            <Divider />
            <Session />
          </CardContent>
          <Divider />
          <CardActions style={{ justifyContent: "center" }}>
            <PlayPause />
            <Reset />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PomodoroClock;
