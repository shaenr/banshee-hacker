import React, { Component } from 'react';
import ReactTerminalStateless, { 
  ReactThemes, ReactOutputRenderers
} from 'react-terminal-component';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emulatorState: props.EmulatorState.createEmpty(),
      inputStr: "Welcome, banshee. It is such and such Unix time"
    };

    // Business

  }
  render() {
    return (
      <div>
        <ReactTerminalStateless
          clickToFocus autoFocus
          emulatorState={ this.state.emulatorState }
          theme={ ReactThemes.hacker }
          promptSymbol={ "banshee@bash$"  }
          outputRenderers={ ReactOutputRenderers  }
          onInputChange={(inputStr) => this.setState({inputStr})}
          onStateChange={(emulatorState) => this.setState({emulatorState})}

        />
      </div>
    );
  }
}
