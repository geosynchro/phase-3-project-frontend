import ExerciseList from "./ExerciseList";
import NavBar from "./NavBar";
import {useState, useEffect} from 'react'

function ExerciseContainer(){
    const [exercises, setExercises] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:8282/exercises')
        .then(r => r.json())
        .then(exercisesArr => {setExercises(exercisesArr)})
    },[])
    return(
        <div>
            <NavBar />
            <ExerciseList exercises={exercises}/>
        </div>
    )
}

export default ExerciseContainer
