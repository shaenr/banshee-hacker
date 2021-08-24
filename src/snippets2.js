

// // Utilities
// const addKeyDownListener = (eventKey, target, onKeyDown) => {
//     target.addEventListener('keydown', e => {
//       if (e.key === eventKey) {
//         onKeyDown();
  
//         e.preventDefault();
//       }
//     });
//   };
  
//   const scrollToPageEnd = () => {
//     window.scrollTo(0, document.body.scrollHeight);
//   };
  
//   // User interface
//   const viewRefs = {
//     input: document.getElementById('input'),
//     output: document.getElementById('output-wrapper')
//   };
  
  
//   const createOutputDiv = (className, textContent) => {
//     const div = document.createElement('div');
  
//     div.className = className;
//     div.appendChild(document.createTextNode(textContent));
  
//     return div;
//   };
  
//   const outputToHTMLNode = {
//     [Terminal.OutputType.TEXT_OUTPUT_TYPE]: content =>
//       createOutputDiv('text-output', content),
//     [Terminal.OutputType.TEXT_ERROR_OUTPUT_TYPE]: content =>
//       createOutputDiv('error-output', content),
//     [Terminal.OutputType.HEADER_OUTPUT_TYPE]: content =>
//       createOutputDiv('header-output', `$ ${content.command}`)
//   };
  
//   const displayOutputs = (outputs) => {
//     viewRefs.output.innerHTML = '';
  
//     const outputNodes = outputs.map(output =>
//       outputToHTMLNode[output.type](output.content)
//     );
  
//     for (const outputNode of outputNodes) {
//       viewRefs.output.append(outputNode);
//     }
//   };
  
//   const getInput = () => viewRefs.input.value;
  
//   let emulatorState = Terminal.EmulatorState.createEmpty();
//   const historyKeyboardPlugin = new Terminal.HistoryKeyboardPlugin(emulatorState);
//   const plugins = [historyKeyboardPlugin];
  
//   addKeyDownListener('Enter', viewRefs.input, () => {
//     const commandStr = getInput();
  
//     emulatorState = emulator.execute(emulatorState, commandStr, plugins);
//     displayOutputs(emulatorState.getOutputs());
//     scrollToPageEnd();
//     clearInput();
//   });