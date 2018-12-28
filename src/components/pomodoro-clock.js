import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import CardActions from "@material-ui/core/CardActions";
import Divider from "@material-ui/core/Divider";
import ClockControls from "./clock-controls";
import Session from "./session";
import Length from "./length";
import WithBreakLength from "./with-break-length";
import WithSessionLength from "./with-session-length";
import WithClock from "./with-clock";

class PomodoroClock extends Component {
  render() {
    return (
      <div>
        <Card>
          <CardHeader style={{ textAlign: "center" }} title="Pomodoro Clock" />
          <Divider />
          <CardContent>
            <div style={{ display: "flex" }}>
              <WithSessionLength
                render={(
                  lengthLabel,
                  lengthValue,
                  handleIncrement,
                  handleDecrement,
                  handleSet
                ) => (
                  <Length
                    lengthLabel={lengthLabel}
                    lengthValue={lengthValue}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onSet={handleSet}
                  />
                )}
              />
              <WithBreakLength
                render={(
                  lengthLabel,
                  lengthValue,
                  handleIncrement,
                  handleDecrement,
                  handleSet
                ) => (
                  <Length
                    lengthLabel={lengthLabel}
                    lengthValue={lengthValue}
                    onIncrement={handleIncrement}
                    onDecrement={handleDecrement}
                    onSet={handleSet}
                  />
                )}
              />
            </div>
            <Divider />
            <WithClock
              render={(activeSessionLabel, timeLeft) => (
                <Session
                  activeSessionLabel={activeSessionLabel}
                  timeLeft={timeLeft}
                />
              )}
            />
          </CardContent>
          <Divider />
          <CardActions style={{ justifyContent: "center" }}>
            <ClockControls />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default PomodoroClock;
