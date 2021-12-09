import * as React from 'react';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Box from '@mui/material/Box';
import FormHelperText from '@mui/material/FormHelperText';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


export default function AddRoutine() {

    function handleSubmit(event){
        event.preventDefault()
    }
  return (
    <div style={{border:"solid blue", borderRadius:"5px", padding:"4px"}}>
        <Box component="form" noValidate autoComplete="off" onSubmit={handleSubmit}>
            <h3 style={{textAlign:"center"}}>Add a new Routine:</h3> 
            <OutlinedInput placeholder="Routine Name" />
            <OutlinedInput placeholder="Day of the week" />
            <Button style={{margin:"7px"}} variant="contained" type="submit">Submit</Button>
        </Box>
    </div>
  );
}