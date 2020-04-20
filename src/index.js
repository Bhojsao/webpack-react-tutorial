import ReactDOM from "react-dom";
import React from "react";

import Form from "./js/components/Form";
import AppComp from "./jsx/components/app.jsx";
import Mercury from "./jsx/components/mercury.jsx";

//ReactDOM.render(<AppComp greeting="Hello World" now={new Date().toString()}/>, document.getElementById("container"));

//ReactDOM.render(<Form />, document.getElementById("container")); 

ReactDOM.render(<Mercury />, document.getElementById("container")); 

