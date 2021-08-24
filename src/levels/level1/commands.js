import { 
    defaultCommandMapping, 
    OutputFactory, 
    CommandMapping, 
    DirOp, 
    
    setEnvVariables,
    parseOptions, 
    EnvVariableUtil,
    resolvePath, 
    makeError } from 'javascript-terminal';

import { fsErrorType } from 'react-terminal-component';


// This is where you specify default commands to remove either because you will replace them or dont want them
// delete defaultCommandMapping['cd'];


const updateStateCwd = (state, newCwdPath) => {
    return EnvVariableUtil.setEnvironmentVariable(
      state.getEnvVariables(), 'cwd', newCwdPath
    );
  };

const commandMap = CommandMapping.create({...defaultCommandMapping,

    'debug': {
        'function': (state, opts) => {
            const input = opts.join(' ');
            return {
                output: OutputFactory.makeTextOutput(input)
            };
        },
        'optDef': {}
    },

    // hasHome
    'ishome': {
        'function': (state, opts) => {
            const fs = state.getFileSystem()
            const isHomeDefined = DirOp.hasDirectory(fs, '/home')
            console.log(isHomeDefined)
            return {
                output: OutputFactory.makeTextOutput(`Home is at`)
            }
        },
        'optDef': {}
    },

})
    
export default commandMap;