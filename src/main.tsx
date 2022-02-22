import "rc-tooltip/assets/bootstrap_white.css";
import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import { Business, Contact,Experiences, Hero, Skills, Statistics, Studies } from "./sections";

ReactDOM.render(
    <React.StrictMode>
        <Hero />
        <Statistics />
        <Experiences />
        <Studies />
        <Skills />
        <Business/>
        <Contact/>
    </React.StrictMode>,
    document.getElementById("root")
);
