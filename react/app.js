import React from "react";
import { render } from "react-dom";

const App = props => (
  <div>
    <h1>Hello Phonegap from react</h1>
  </div>
);

render(<App />, document.querySelector("#app"));
