import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import  TextField   from '@mui/material/TextField';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FirmModal({open,setOpen,info,setinfo}) {

  const handleSubmit = function (e){
    e.preventDefault()
  }
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setinfo({...info, [name]:value })

  }

  return (
    <div>

      <Modal
        open={open}
        onClose={()=>setOpen(!open)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <TextField id="name" label="Firm Name" variant="filled"
          onChange={handleChange} value={info?.name || ""} />
          <TextField id="filled-basic" label="Phone" variant="filled" />
          <TextField id="filled-basic" label="Address" variant="filled" />
          <TextField id="filled-basic" label="Image URL" variant="filled" />
          <Button type='submit' variant='contained' onClick={handleSubmit}>Submit New Firm</Button>
        </Box>
      </Modal>
    </div>
  );
}