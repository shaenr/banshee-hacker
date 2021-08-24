import { addVarsToEnv } from "../../utils.js";
import data from "./data.js";

const testVars = {
  user: data.user,
  hostname: data.hostname
};

const customEnv = addVarsToEnv(testVars)

export default customEnv;