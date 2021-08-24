import { defaultCommandMapping, OutputFactory, CommandMapping, DirOp, EmulatorState } from 'javascript-terminal';

// delete defaultCommandMapping['whoami'];

const commandMap = CommandMapping.create({...defaultCommandMapping,

    'debug': {
        'function': (state, opts) => {
            console.log(`state: ${Object.entries(state)}`)
            
            console.log(`opts: ${opts}`)
            const input = opts.join(' ');
            console.log(`input: ${input}`)

            return {
                output: OutputFactory.makeTextOutput(input)
            };
        },
        'optDef': {}
    },

    // hasHome
    'home': {
        'function': (state, opts) => {
            const fs = state.getFileSystem()
            console.log(fs)
            console.log(state.getFileSystem())
            const isHomeDefined = DirOp.hasDirectory(fs, '/home')
            console.log(isHomeDefined)
            return {
                output: OutputFactory.makeTextOutput(`Home is at`)
            }
        },
        'optDef': {}
    }


})

export default commandMap;