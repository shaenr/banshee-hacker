import { EmulatorState, EnvironmentVariables,  } from 'javascript-terminal';

export function addVarsToEnv(customEnv) {
    const INIT_ENV = EmulatorState.createEmpty().getEnvVariables();
    // Leave Current Env Blank to Start New Env
    const entries = Object.entries(customEnv)
    let env = EnvironmentVariables.setEnvironmentVariable(INIT_ENV, 
      entries[0][0], entries[0][1] 
    );
    console.log(`Added ${entries[0][0]}: ${entries[0][1]}`)
    for (let [k, v] of entries.slice(1)) {
      env = EnvironmentVariables.setEnvironmentVariable(env, k, v);
      console.log(`Added ${k}: ${v}`)
    }
  
    return env
}


export const buildPrompt = (levelObj) => {
  const headDelim = "(";
  const user = levelObj.Data.user;
  const atChar = "@";
  const host = levelObj.Data.hostname;
  const pathDelim = ")──[";
  // const cwd = getEnvironmentVariable(state.getEnvVariables(), 'cwd')
  const cwd = "CWD";
  const tailDelim = "] $ ";
  return headDelim + user + atChar + host + pathDelim + cwd + tailDelim;
}