import React from 'react'
import {Box, Menu, MenuItem, Typography } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/system';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({account, setAccount}) => {

  const [open , setOpen ] = useState(false);


  const handleClick = (event) => {
      setOpen(event.currentTarget);
  }

  const handleClose = () => {
    setOpen(false);
    setAccount('');
  }

  const Component = styled(Menu)`
    margin-top : 5px;
  `
  return (
    <div>
         <Box onClick={handleClick}>
      <Typography style = {{marginTop: 2, cursor: 'pointer'}}> Hello {account}</Typography>
    </Box>
    <Menu
    anchorEl={open}
    open={Boolean(open)}
    onClose={handleClose}
    
  >
    <MenuItem onClick={handleClose}><PowerSettingsNewIcon color = 'primary' fontSize='small'/> &nbsp;  Logout</MenuItem>
  </Menu>
    </div>
     
     
  )
}

export default Profile;

