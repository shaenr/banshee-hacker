import React, { useEffect, useState } from 'react';

import ReactTerminalStateless, { 
  ReactOutputRenderers 
} from 'react-terminal-component';

import { 
  EmulatorState
} from 'javascript-terminal';

import myTheme from './myTheme';
import Level from './levels/level1/index';

import { buildPrompt } from './utils';

import "./app.css";

// Define Emulator State From Modules
const emulatorState = EmulatorState.create({
  'fs': Level.FS,
  'outputs': Level.Output,
  'history': Level.History,
  'environmentVariables': Level.Env,
  'commandMapping': Level.Commands,
})


// Component: App
export default function App() {

  // Declaring State Hooks
  const [input, setInput] = useState('');
  const [emuState, setEmuState] = useState(emulatorState);


  // figure out how to reference cwd from env to set up state hook to promp based on

  const [promptSymbol, setPromptSymbol] = useState(buildPrompt(Level));

  useEffect(() => {
    console.log('render')
  }, [emuState])

  return (
    <ReactTerminalStateless
      emulatorState={emuState}
      theme={ myTheme }
      promptSymbol={promptSymbol}
      outputRenderers={ ReactOutputRenderers  }
      inputStr={input}
      onInputChange={( (inp) => setInput(inp) )}
      onStateChange={( (eS) => setEmuState(eS) )}
      clickToFocus 
    />
  );
}
