
function ExerciseItem({category, name}){
    function handleClick(){
        console.log("I got clicked")
    }
    return(
        <div style={{border: "solid"}}>
            <h1>Name: {name}</h1>
            <h2>Category: {category}</h2>
            <button onClick={handleClick}>Add to Workout!</button>
        </div>
    )
}

export default ExerciseItem