const { Emulator, EmulatorState, OutputType } = require('../lib/terminal.js');

/**
 * Processes multiple outputs for display.
 *
 * Currently only text-based output is supported.
 * @param  {number} outputCount number of outputs from the command run
 * @param  {list}   outputs     all emulator outputs
 * @return {none}
 */
const commandOutputToString = (outputCount, outputs) => {
  return outputs
    .slice(-1 * outputCount)
    .filter(output => output.type === OutputType.TEXT_OUTPUT_TYPE || output.type === OutputType.TEXT_ERROR_OUTPUT_TYPE)
    .map(output => output.content)
    .join('\n');
};

/**
 * Creates an evaluator for a Node REPL
 * @return {function} Node REPL evaluator
 */
const getTerminalEvaluator = () => {
  const emulator = new Emulator();
  let state = EmulatorState.createEmpty();
  let lastOutputsSize = 0;

  return (commandStr) => {
    state = emulator.execute(state, commandStr);

    const outputs = state.getOutputs();
    const outputStr = commandOutputToString(outputs.size - lastOutputsSize, outputs);

    lastOutputsSize = outputs.size;

    return outputStr;
  };
};

module.exports = getTerminalEvaluator;
