import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import QuoteBox from "./components/QuoteBox/QuoteBox";
import { actionCreators } from "./state/index";
import Container from "@mui/material/Container";

const App = () => {
  const quotes = useSelector((state) => state.quotes);
  const loading = useSelector((state) => state.loading);
  const dispatch = useDispatch();
  const { fetchQuote } = bindActionCreators(actionCreators, dispatch);

  console.log(quotes);

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Container>
      <QuoteBox quotes={quotes} loading={loading} handleClick={fetchQuote} />
    </Container>
  );
};

export default App;
