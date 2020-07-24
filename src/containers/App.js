import React, { useEffect } from "react";
import { connect } from "react-redux";

import fetchWorkers from "../actions/workers/fetchWorkers";

import "./App.css";

function App() {
  useEffect(() => {
    fetchWorkers();
  });
  return (
    <div className="App">
      <h1>Home page</h1>
    </div>
  );
}

const mapStateToProps = (store) => {
  return {
    workers: store.workers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorkers: () => dispatch(fetchWorkers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
