import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import ExerciseContainer from './ExerciseContainer';
import RoutineContainer from './RoutineContainer'



ReactDOM.render(
  <BrowserRouter>
    <Routes>
     <Route path="/" element={<App />} />
     <Route path="/exerciselist" element={<ExerciseContainer/>} />
     <Route path="/routinelist" element={<RoutineContainer/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

