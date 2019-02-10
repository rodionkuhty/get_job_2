import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";

//components
import Header from "./components/header";
import MainMenu from "./components/menu";
import MainPage from "./routes/pages";

import FormMainPage from "./components/form/index";
class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Fragment>
            <Header />
            <MainMenu />
            <FormMainPage />
            <MainPage />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
