import RoutineItem from "./RoutineItem"

function RoutineList ({routines, renderDetails, deleteRoutine}){
    
    // console.log(routines)

    const allRoutines = routines.map(routine => <RoutineItem deleteRoutine={deleteRoutine} key={routine.id} id={routine.id} name={routine.name} day={routine.days_of_week} renderDetails={renderDetails}/>)

    return (
        <div >
            {allRoutines}
        </div>
    )
}

export default RoutineList