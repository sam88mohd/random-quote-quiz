import { NEW_QUOTE_REQUEST } from "../../constants";

const loadingReducer = (state = true, action) => {
  switch (action.type) {
    case NEW_QUOTE_REQUEST:
      return action.state;
    default:
      return state;
  }
};

export default loadingReducer;
