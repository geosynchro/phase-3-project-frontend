import ExerciseDetails from "./ExerciseDetails"
import AddExercise from "./AddExercise"
import { useEffect, useState } from "react"


function RoutineDetails({routineDet, exercises, handleDelete, exRoutines, setExRoutines, setRoutineDet}){
    const [routineExercises, setRoutineExercises] = useState([])
    

    useEffect(() => {
        const exerciseInfo = routineDet.exercise_routines
        setRoutineExercises(exerciseInfo)
    }, [routineDet])

    let test = routineExercises
    // const exerciseInfo1 = routineDet.exercise_routines
    const allExercises = test?.map(info => <ExerciseDetails handleDelete={handleDelete} key={info.id} exerciseObj ={info} />)
    console.log(test)

    // id={info.id} duration={info.duration} name={info.exercise.name} reps={info.reps} weight={info.weight}

    return(
        <div style={{textAlign:"center", border:"solid blue", borderRadius:"5px"}}>
            <h2 style={{textAlign:"center"}}>Routine Name: {routineDet.name}</h2>
            <h3>Day of the week: {routineDet.days_of_week}</h3>
            <div>
                {allExercises}
            </div>
            <div>
                <AddExercise exercises = {exercises} routineDet={routineDet} exRoutines={exRoutines} setExRoutines={setExRoutines} routineExercises={routineExercises} setRoutineExercises={setRoutineExercises}/>
            </div>
        </div>
        
    )
}

export default RoutineDetails