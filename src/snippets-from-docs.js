
// // Starts new Terminal
// const emulator = new Terminal.Emulator();

// // Creates Empty State from Terminal
// const emulatorState = Terminal.EmulatorState.createEmpty();

// // Preparing a new command for entering into state
// const commandStr = 'ls';
// const plugins = [];

// // Returns a new emulator state from running the command on the old and applying the side effectss
// const newEmulatorState = emulator.execute(emulatorState, commandStr, plugins)

// // You can use this to se the new Outputs.
// newEmulatorState.getOutputs()


// const historyKeyboardPlugin = new Terminal.HistoryKeyboardPlugin(emulatorState);
// const commandStr = 'ls'; // commandStr contains the user input
// emulator.execute(emulatorState, commandStr, [historyKeyboardPlugin]); // updates keyboard history




//  // Autocomplete example
//  const partialString = 'ech';
// emulator.autocomplete(emulatorState, partialString); // autocompletes to 'echo'




// const defaultOutputs = defaultState.getOutputs();

// const newOutputs = Terminal.Outputs.addRecord(
//   defaultOutputs, Terminal.OutputFactory.makeTextOutput("Added Output")
// );

// let emulatorState = defaultState.setOutputs(newOutputs);

// const commandStr = 'ls';
// const plugins = [];

// const newEmulatorState = emulator.execute(emulatorState, commandStr, plugins)

// const customFileSystem = Terminal.FileSystem.create({
//   '/home': { },
//   '/home/README': {content: 'This is a text file', canModify: false},
//   '/home/nested/directory/file': {content: 'End of nested directory!'}
// });

// // Using a custom operation
// const isHomeDefined = Terminal.DirOp.hasDirectory(customFileSystem, '/home')

// emulatorState = Terminal.EmulatorState.create({
//   'fs': customFileSystem
// })
