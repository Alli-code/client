import { FETCH_WORKERS_REQ } from "../../actions/workers/fetchWorkers";
import { FETCH_WORKERS_SUCC } from "../../actions/workers/fetchWorkers";

const initialState = {
  wait: false,
  workers: [],
};

const workersR = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_WORKERS_REQ:
      return {
        ...state,
        wait: action.payload.wait,
      };
    case FETCH_WORKERS_SUCC:
      return {
        ...state,
        wait: action.payload.wait,
        pworkers: action.payload.workers,
      };
    default:
      return state;
  }
};

export default workersR;
