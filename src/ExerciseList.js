import ExerciseItem from './ExerciseItem.js'

function ExerciseList({exercises}){

    const allExercises = exercises.map(exercise => <ExerciseItem key={exercise.id} name={exercise.name} category={exercise.category.name}/>)
    
    return(
     <div style={{marginTop: "25px"}}>
         {allExercises}
     </div>
    )
}

export default ExerciseList