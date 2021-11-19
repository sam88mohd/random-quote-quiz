import {
  NEW_QUOTE_REQUEST,
  NEW_QUOTE_REQUEST_SUCCESS,
  NEW_QUOTE_REQUEST_FAILURE,
} from "../../constants";

export const fetchQuoteRequest = (state) => {
  return (dispatch) => {
    dispatch({
      type: NEW_QUOTE_REQUEST,
      state,
    });
  };
};

export const newQuoteSuccess = (data) => {
  return (dispatch) => {
    dispatch({
      type: NEW_QUOTE_REQUEST_SUCCESS,
      data,
    });
  };
};

export const newQuestFailure = (error) => {
  return (dispatch) => {
    dispatch({
      type: NEW_QUOTE_REQUEST_FAILURE,
      error,
    });
  };
};

export const fetchQuote = () => {
  return async (dispatch, getState) => {
    dispatch(fetchQuoteRequest(true));
    try {
      const response = await fetch("https://api.quotable.io/random");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      dispatch(fetchQuoteRequest(false));
      dispatch(newQuoteSuccess(data));
    } catch (error) {
      dispatch(fetchQuoteRequest(false));
      dispatch(newQuestFailure(error));
    }
  };
};
