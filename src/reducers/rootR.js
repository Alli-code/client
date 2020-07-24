import { combineReducers } from "redux";
import workersR from "./workers/workersR";

const rootR = combineReducers({
  workers: workersR,
});

export default rootR;
