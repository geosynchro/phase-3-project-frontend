import ExerciseDetails from "./ExerciseDetails"
import AddRoutine from "./AddRoutine"
import { Info } from "@material-ui/icons"

function RoutineDetails({routineDet}){
    const exerciseInfo = routineDet.exercise_routines
    console.log(exerciseInfo)
    // const allExercises = exerciseInfo.map(info => <ExerciseDetails name={info.exercise.name} duration/>)
    // const allExercises = exerciseInfo.each(exercise => <ExerciseDetails name={exercise.exercise.name} duration={exercise.duration} reps={exercise.reps} weight={exercise.weight}/>)
    // const allExercises = routineDet.exercises.each(exercise => <p>{exercise.name}</p>)
    return(
        <div style={{textAlign:"center", border:"solid blue", borderRadius:"5px"}}>
            <h1 style={{textAlign:"center"}}>Routine Name: {routineDet.name}</h1>
            <h3>Day of the week: {routineDet.days_of_week}</h3>
            <div>
                {/* {allExercises} */}
            </div>
        </div>
        
    )
}

export default RoutineDetails