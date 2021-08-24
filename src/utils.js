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