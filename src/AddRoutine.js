import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';


function AddRoutine({postRoutine}) {
    const [formdata, setFormData] = useState({name: "", days_of_week: ""})

    function handleSubmit(event){
        event.preventDefault()
        postRoutine(formdata)
        setFormData({name: "", days_of_week: ""})
    }

    function handleOnChange(e){
       setFormData({...formdata, [e.target.name]: e.target.value })

    }

  return (
    <div style={{border:"solid blue", borderRadius:"5px", padding:"4px"}}>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h3 style={{textAlign:"center"}}>Add a new Routine:</h3> 
            <OutlinedInput placeholder="Routine Name" value={formdata.name} name="name" onChange={handleOnChange}/>
            <OutlinedInput style={{marginLeft:"5px"}} placeholder="Day of the week" value={formdata.days_of_week} name="days_of_week" onChange={handleOnChange}/>
            <Button style={{margin:"7px"}} variant="contained" type="submit">Submit</Button>
        </Box>
    </div>
  );
}

export default AddRoutine