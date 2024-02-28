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
  wnameth: 400,
  bgcolor: 'background.paper',
  border: '2px solid red',
  boxShadow: 24,
  p: 4,
  display:"flex",
  flexDirection:"column",
  gap:"1rem"
};

export default function FirmModal({open,setOpen,info,setinfo,postFirms,putFirms}) {

  const handleSubmit = function (e){
    e.preventDefault();
    if(info.id){
      console.log(info);
      putFirms(info);
      setOpen(!open);
    }else {
      postFirms(info);
      setOpen(!open);

    }

    setinfo({})
  }
  
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setinfo({...info, [name]:value })
    //ONCE OBJEYI AC, SONRA HANGI KEY ISTENIYORSA ONU DEGISTIR.
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={()=>{setinfo({}); setOpen(!open)}}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <TextField name="sirket_adi" type='text' placeholder="Firm Name" variant="outlined"
          onChange={handleChange} value={info?.sirket_adi || ""} />
          {/* <TextField id="phone" type="number" placeholder="Phone" variant="outlined" 
          onChange={handleChange} value={info?.name || ""} /> */}
          <TextField name="adres" type="text" placeholder="Address" variant="outlined" 
          onChange={handleChange} value={info?.adres || ""}  />
          <TextField name="resim" type='text' placeholder="Image URL" variant="outlined" 
          onChange={handleChange} value={info?.resim || ""} />
          <Button type='submit' variant='contained' size={"large"} onClick={handleSubmit} sx={{marginTop:".5rem"}}>Submit Firm</Button>
        </Box>
      </Modal>
    </div>
  );
}