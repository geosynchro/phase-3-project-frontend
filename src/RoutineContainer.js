import RoutineList from "./RoutineList";
import {useState, useEffect} from 'react'
import NavBar from "./NavBar";
import AddRoutine from "./AddRoutine"
import RoutineDetails from "./RoutineDetails"

function RoutineContainer(){
    const [routines, setRoutines] = useState([])
    const [routineDet, setRoutineDet] = useState([])
    const [exercises, setExercises] = useState([])
    const [exRoutines, setExRoutines] = useState([])

    useEffect(() => {
        fetch('http://localhost:8282/routines')
        .then(r => r.json())
        .then(routinesArr => {setRoutines(routinesArr)})

        fetch('http://localhost:8282/exercises')
        .then(r => r.json())
        .then(exercisesArr => {setExercises(exercisesArr)})

        fetch('http://localhost:8282/exerciseroutines')
        .then(r => r.json())
        .then(exRoutinesArr => {setExRoutines(exRoutinesArr)})
      },[]) 


      const handleDelete = (id) => {
        fetch(`http://localhost:8282/exerciseroutines/${id}`, {
            method: 'DELETE',
            headers:{'Content-type':'application/json'}
        })
        .then(res => res.json())
        .then(res => setExRoutines(res))
    }  

      function renderDetails(id ){
          fetch(`http://localhost:8282/routines/${id}`)
          .then(res => res.json())
          .then(routineObj => {setRoutineDet(routineObj)}) 
      }

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
          setRoutines([newRoutine,...routines])
        })
      }

      const deleteRoutine = (id) => {
        fetch(`http://localhost:8282/routines/${id}`,{
            method: 'DELETE',
            headers:{'Content-type':'application/json'}
        })
        .then(res => res.json())
        .then(r => console.log(r))
        
        fetch(`http://localhost:8282/routines`)
        .then(res => res.json())
        .then(routines => setRoutines(routines))
      }

    //   const postRoutine = (exercise) => {
    //     fetch('http://localhost:8282/exerciseroutines',{
    //       method:'POST',
    //       headers:{
    //         'Content-Type':'application/json'
    //       },
    //       body: JSON.stringify(exercise)
    //     })
    //     .then(res => res.json())
    //     .then(newRoutine => {
    //       setRoutines([newExRoutine,...routines])
    //     })
    //   }

    return(
       <div>
        <NavBar />
            <div style={{display:"flex", marginLeft:"25px"}}>
                <div>
                    <h1 style={{display:"flex", justifyContent:"center"}} >Routine List:</h1>     
                    <div  style={{display:"flex", }}>
                     <AddRoutine postRoutine={postRoutine} />  
                    </div>
                    <div style={{display:'flex'}}> 
                     <RoutineList  routines ={routines} renderDetails={renderDetails} deleteRoutine={deleteRoutine}/>
                    </div>
                </div>
                <div style={{minWidth:"50%", justifyContent:"center", marginLeft:"25px"}}>
                    <div style={{justifyContent:"center"}}>
                        <h1 style={{textAlign:'center'}}>Routine Details:</h1>
                    </div>
                    <div>
                        <RoutineDetails routineDet = {routineDet} exercises={exercises} handleDelete={handleDelete}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RoutineContainer