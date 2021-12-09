import RoutineItem from "./RoutineItem"

function RoutineList ({routines, renderDetails}){

    const allRoutines = routines.map(routine => <RoutineItem key={routine.id} id={routine.id} name={routine.name} day={routine.days_of_week} renderDetails={renderDetails}/>)

    return (
        <div >
            {allRoutines}
        </div>
    )
}

export default RoutineList