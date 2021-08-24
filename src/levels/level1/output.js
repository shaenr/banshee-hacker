import * as Terminal from 'javascript-terminal';

export const outputText = {
    initial: `
Welcome to SHDF!
Please enter an SHDF hostname or press [ENTER]
[shdf.net]: 

`
};

// Define Initial Output
const defaultOutputs = Terminal.EmulatorState.createEmpty().getOutputs();
const newOutputs = Terminal.Outputs.addRecord(
  defaultOutputs, Terminal.OutputFactory.makeTextOutput(outputText.initial)
);

export default newOutputs;