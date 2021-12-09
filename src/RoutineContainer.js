import RoutineList from "./RoutineList";
import {useState, useEffect} from 'react'
import NavBar from "./NavBar";
import AddRoutine from "./AddRoutine"
import RoutineDetails from "./RoutineDetails"

function RoutineContainer(){
    const [routines, setRoutines] = useState([])
    const [routineDet, setRoutineDet] = useState([])

    useEffect(() => {
        fetch('http://localhost:8282/routines')
        .then(r => r.json())
        .then(routinesArr => {setRoutines(routinesArr)})
      },[]) 

      function renderDetails(id){
          fetch(`http://localhost:8282/routines/${id}`)
          .then(res => res.json())
          .then(routineObj => {setRoutineDet(routineObj)})
      }

    return(
        <div>

        <NavBar />
        <div style={{display:"flex"}}>
            <div>
                <h1 style={{display:"flex"}} >Routine List:</h1>     
                    <div  style={{display:"flex"}}>
                        <AddRoutine />  
                    </div>
                    <div style={{display:'flex'}}> 
                        <RoutineList  routines ={routines} renderDetails={renderDetails}/>
                    </div>
                </div>
                <div style={{minWidth:"50%", justifyContent:"center", marginLeft:"25px"}}>
                    <div style={{justifyContent:"center"}}>
                        <h1 style={{textAlign:'center'}}>Routine Details:</h1>
                    </div>
                    <div>
                        <RoutineDetails routineDet = {routineDet}/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RoutineContainer