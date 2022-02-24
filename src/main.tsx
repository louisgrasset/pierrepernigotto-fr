import "rc-tooltip/assets/bootstrap_white.css";
import "./index.scss";

import React from "react";
import ReactDOM from "react-dom";

import { Business, Contact,Experiences, Hero, Portfolio, Skills, Statistics, Studies } from "./sections";

ReactDOM.render(
    <React.StrictMode>
        <Hero />
        <Statistics />
        <Experiences />
        <Studies />
        <Skills />
        <Portfolio/>
        <Business/>
        <Contact/>
    </React.StrictMode>,
    document.getElementById("root")
);
