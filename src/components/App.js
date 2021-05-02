import React, { useState } from "react";
import Header from "./1.header/Header";
import Main from "./2.main/Main";
import Footer from "./3.footer/Footer";
import { HashRouter as Router } from "react-router-dom";

const App = () => {
  const [activeAmount, setActiveAmount] = useState(0);
  const [finishedAmount, setFinishedAmount] = useState(0);

  return (
    <Router>
      <Header />
      <Main
        setActiveAmount={setActiveAmount}
        setFinishedAmount={setFinishedAmount}
      />
      <Footer activeAmount={activeAmount} finishedAmount={finishedAmount} />
    </Router>
  );
};

export default App;
