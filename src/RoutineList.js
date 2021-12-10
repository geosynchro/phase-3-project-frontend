import RoutineItem from "./RoutineItem"
import {useState, useEffect} from 'react'
import AddRoutine from "./AddRoutine"

function RoutineList ({ renderDetails} ){
    const [routines, setRoutines] = useState([])
    const [routinesToDisplay, setRoutinesToDisplay] = useState([])
    

    useEffect(() => {
        fetch('http://localhost:8282/routines')
        .then(r => r.json())
        .then(routinesArr => {setRoutines(routinesArr) 
            setRoutinesToDisplay(routinesArr)})
        }, [])

    
        const postRoutine = (routine) => {
            fetch('http://localhost:8282/routines',{
              method:'POST',
              headers:{
                'Content-Type':'application/json'
              },
              body: JSON.stringify(routine)
            })
            .then(res => res.json())
            .then(newRoutine => {
              setRoutinesToDisplay([newRoutine,...routines])
            })
          }

          const deleteRoutine = (id) => {
            fetch(`http://localhost:8282/routines/${id}`,{
                method: 'DELETE',
                headers:{'Content-type':'application/json'}
            })
            .then(res => res.json())
            .then(() => setRoutinesToDisplay(routines.filter(routine => routine.id !== id)))
            // .then(newRoutine => {
            //     const updatedList = routines.filter((routine) => routine.id !== newRoutine.id)
            //     setRoutinesToDisplay(updatedList)
            // })
            
        }

    
    // console.log(routines)

    const allRoutines = routinesToDisplay.map(routine => <RoutineItem deleteRoutine={deleteRoutine} key={routine.id} id={routine.id} name={routine.name} day={routine.days_of_week} renderDetails={renderDetails}/>)

    return (
        <div >
            <div  style={{display:"flex", }}>
             <AddRoutine postRoutine={postRoutine} />  
            </div>
            {allRoutines}
        </div>
    )
}

export default RoutineList