import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';




const NavBar = () => {

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link style={{textDecoration: "none", color:"White"}} to="/" >
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
          >
            Workout Creator!
          </Typography>
          </Link>
          <Stack direction="row" spacing={2}>
            <Link style={{textDecoration: "none"}} to="/routinelist" ><Button sx={{borderColor: "white", color: "white" }} variant="outlined">View and Create Workout Routines</Button></Link>
            <Link style={{textDecoration: 'none'}} to="/exerciselist"><Button sx={{borderColor: "white", color: "white" }} variant="outlined">Exercise List</Button></Link>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;