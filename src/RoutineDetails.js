import ExerciseDetails from "./ExerciseDetails"
import AddExercise from "./AddExercise"


function RoutineDetails({routineDet, exercises, handleDelete}){
    const exerciseInfo = routineDet.exercise_routines
    const allExercises = exerciseInfo?.map(info => <ExerciseDetails handleDelete={handleDelete} key={info.id} id={info.id} name={info.exercise.name} duration={info.duration} reps={info.reps} weight={info.weight}/>)

    return(
        <div style={{textAlign:"center", border:"solid blue", borderRadius:"5px"}}>
            <h2 style={{textAlign:"center"}}>Routine Name: {routineDet.name}</h2>
            <h3>Day of the week: {routineDet.days_of_week}</h3>
            <div>
                {allExercises}
            </div>
            <div>
                <AddExercise exercises = {exercises} routineDet={routineDet}/>
            </div>
        </div>
        
    )
}

export default RoutineDetails