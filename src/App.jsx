import React, { useState } from 'react';

import ReactTerminalStateless, { 
  ReactOutputRenderers 
} from 'react-terminal-component';

import { 
  EmulatorState, 
  getEnvironmentVariable 
} from 'javascript-terminal';

import myTheme from './myTheme';
import Level from './levels/level1/index';

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
  const promptSymbol = "DSfds"

  const buildPrompt = () => {
    const headDelim = "(";
    const user = Level.Data.user;
    const atChar = "@";
    const host = Level.Data.hostname;
    const pathDelim = ")──[";
    // const cwd = getEnvironmentVariable(state.getEnvVariables(), 'cwd')
    const cwd = "CWD";
    const tailDelim = "] $ ";
    return headDelim + user + atChar + host + pathDelim + cwd + tailDelim;
  }


   const [promptText, setPromptText] = useState(buildPrompt())



  return (
    <ReactTerminalStateless
      emulatorState={emuState}
      theme={ myTheme }
      promptSymbol={promptText}
      outputRenderers={ ReactOutputRenderers  }
      inputStr={input}
      onInputChange={( (inp) => setInput(inp) )}
      onStateChange={( (eS) => setEmuState(eS) )}
      clickToFocus 
    />
  );
}
