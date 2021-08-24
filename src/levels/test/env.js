import { addVarsToEnv } from "../../utils.js";
import data from "./data.js";

const testVars = {
  user: data.user,
};

const customEnv = addVarsToEnv(testVars)

export default customEnv;