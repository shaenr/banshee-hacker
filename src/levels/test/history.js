import * as Terminal from 'javascript-terminal';

const defaultHistory = Terminal.EmulatorState.createEmpty().getHistory();
const myHistory = Terminal.History.recordCommand(defaultHistory, 'history');

export default myHistory;