import React from "react";
import ReactDOM from "react-dom";

import SampleComponent from "../components/SampleComponent";

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <SampleComponent />,
    document.body.appendChild(document.createElement("div"))
  );
});
