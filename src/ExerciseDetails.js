import Button from '@mui/material/Button';

function ExerciseDetails({id, name, duration, reps, weight, handleDelete}){

    return(
        <div style={{border:"solid blue", borderRadius:"5px", textAlign:"center", margin:"5px"}}>
            <p style={{}}>
                <strong>Exercise:</strong> {name}  
                <span> <strong>|</strong> </span>  
                <strong>Duration:</strong> {duration} mins
                <span> <strong>|</strong> </span> 
                <strong>Reps:</strong> {reps}
                <span> <strong>|</strong> </span> 
                <strong>Weight:</strong> {weight}
                <Button style={{marginLeft:"15px", backgroundColor:"red"}} variant="contained" onClick={() => handleDelete(id)}>Remove</Button>
            </p>
        </div>
    )
}
export default ExerciseDetails