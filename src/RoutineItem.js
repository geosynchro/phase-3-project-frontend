function RoutineItem({id, name, day, renderDetails, deleteRoutine}){
    return(
        <div style={{border: "solid blue", borderRadius:"5px", padding: "5px", marginTop:"10px" }}>
        <div  onClick={() => renderDetails(id)}>

        <h2>Title: {name}</h2>
        <h3>Schedule: {day}</h3>
        <p>Click for details</p>
        </div>

        <button onClick={() => deleteRoutine(id)}>Delete</button>
    
        </div>
    )
}

export default RoutineItem