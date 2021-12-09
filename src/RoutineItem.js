function RoutineItem({id, name, day, renderDetails}){
    return(
        <div style={{border: "solid blue", borderRadius:"5px", padding: "5px", marginTop:"10px" }} onClick={() => renderDetails(id)}>

        <h2>Title: {name}</h2>
        <h3>Schedule: {day}</h3>
        <p>Click for details</p>

        </div>
    )
}

export default RoutineItem