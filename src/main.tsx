import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HooksApp } from './HooksApp';
import {TrafficLight} from '../src/01-useState/TrafficLight';
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
      {/* <TrafficLight/> */}
      <TrafficLightWithEffect/>
  </StrictMode>,
)
