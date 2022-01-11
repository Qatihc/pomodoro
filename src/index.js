import React from "react";
import reactDom from "react-dom";
import { App } from "./Components/App";

import './index.css'

const root = document.getElementsByClassName('root')[0];
console.log(root);
reactDom.render(<App />, root);