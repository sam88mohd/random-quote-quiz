import {
  NEW_QUOTE_REQUEST_FAILURE,
  NEW_QUOTE_REQUEST_SUCCESS,
} from "../../constants";

const defaultState = {};

const quotesReducer = (state = defaultState, action) => {
  switch (action.type) {
    case NEW_QUOTE_REQUEST_SUCCESS:
      return action.data;
    case NEW_QUOTE_REQUEST_FAILURE:
      return action.error;
    default:
      return state;
  }
};

export default quotesReducer;
