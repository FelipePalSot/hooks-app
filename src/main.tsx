import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { HooksApp } from './HooksApp';
import {TrafficLight} from '../src/01-useState/TrafficLight';
import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect';

import './index.css'
import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook';
import { PokemonPage } from './03-examples/PokemonPage';
import { FocusScreen } from './04-useRef/FocusScreen';
import { TasksApp } from './05-useReducer/TaskApp';
import { ScrambleWords } from './05-useReducer/ScrambleWords';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
      {/* <TrafficLight/> */}
      {/* <TrafficLightWithEffect/> */}
      {/* <TrafficLightWithHook/> */}
      {/* <PokemonPage/> */}
      {/* <FocusScreen/> */}
      {/* <TasksApp/> */}
      <ScrambleWords/>
  </StrictMode>,
)
