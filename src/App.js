import MainPage from "./MainPage";
import NavBar from "./NavBar";
import ExerciseList from "./ExerciseList";
import {Fragment, useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import ExerciseContainer from "./ExerciseContainer";
import RoutineContainer from "./RoutineContainer"

function App() {
  

  return (
    <div className="App">
      <NavBar />
      <div style={{textAlign:"center"}}>
      <h1 >
        Welcome to the Workout Creator where you can create your own custom workouts!
      </h1>
      <img src="https://media.istockphoto.com/photos/she-motivates-me-to-keep-going-picture-id1288737414" alt="working out"/>
      </div>
      

    </div>
  );
}

export default App;
