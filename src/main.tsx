import React from 'react'
import ReactDOM from 'react-dom'
import 'rc-tooltip/assets/bootstrap_white.css';
import './index.scss'
import { Hero, Experiences, Statistics, Studies, Skills, Business, Contact } from './sections'

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
  document.getElementById('root')
)
