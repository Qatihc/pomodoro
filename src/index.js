import React from "react";
import reactDom from "react-dom";
import { App } from "./components/App";

import './index.css'

const root = document.getElementsByClassName('root')[0];
reactDom.render(<App />, root);