import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import Stack from '@mui/material/Stack';




const NavBar = () => {

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ mr: 5, display: { xs: 'none', md: 'flex' } }}
          >
            Workout Creator!
          </Typography>
          <Stack direction="row" spacing={2}>
      <Button sx={{borderColor: "white", color: "white" }} variant="outlined">Create a workout!</Button>
      <Button sx={{borderColor: "white", color: "white" }} variant="outlined">View Created</Button>
      <Button sx={{borderColor: "white", color: "white" }} variant="outlined">Exercise List</Button>

    
    </Stack>

        
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default NavBar;