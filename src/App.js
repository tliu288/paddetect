import React from 'react';
import './App.css';
import bowser from "bowser";
import Platform from "platform";

class App extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            isOnMac: 'OS X' === Platform.os.family,
            isOnIos: bowser.ios === true,
            isTouchDevice: 'ontouchstart' in window,
            isMaxTouch: navigator.maxTouchPoints > 1
        };
    }

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
                <p>
                    isOnMac: 'OS X' === Platform.os.family
                    <br/>
                    Result: {this.state.isOnMac.toString()}
                </p>

                <p>
                    bowser.ios === true
                    <br/>
                    Result: {this.state.isOnIos.toString()}
                </p>

                <p>
                    isTouchDevice: 'ontouchstart' in window
                    <br/>
                    Result: {this.state.isTouchDevice.toString()}
                </p>

                <p>
                    isMaxTouch: navigator.maxTouchPoints > 1
                    <br/>
                    Result: {this.state.isMaxTouch.toString()}
                </p>
            </p>
          </header>
        </div>
    );
  }
}

export default App;
