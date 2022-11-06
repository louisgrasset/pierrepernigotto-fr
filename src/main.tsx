import "rc-tooltip/assets/bootstrap_white.css";
import "./index.scss";

import React from "react";
import { createRoot } from "react-dom/client";

import { Business, Contact,Experiences, Hero, Portfolio, Skills, Statistics, Studies } from "./sections";
const container = document.getElementById("root");
const root = createRoot(container as Element);
root.render(
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
);
