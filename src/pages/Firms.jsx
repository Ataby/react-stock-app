import axios from 'axios';
 import useStockCalls from '../hooks/useStockCalls';
 import { useState } from 'react';
import  React from 'react';
 import Card from '@mui/material/Card';
 import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
 import EditIcon from '@mui/icons-material/Edit';
 import Collapse from '@mui/material/Collapse';
 import IconButton, { IconButtonProps } from '@mui/material/IconButton';
 import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import  TextField  from '@mui/material/TextField';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {modalStyle} from "../styles/globalStyle"
  


const Firms = () => {
  const {getFirms,dataList,brand,setbrand,handleDelete}= useStockCalls();
  const [open, setOpen] = useState(false);
  const newFirm = () => setOpen(!open);
 
  
  const handleSubmit=()=> {
    setOpen(!open)
  }
    const [buttonColor, setButtonColor] = useState('secondary');
    const handleColor =()=> {
      if (buttonColor === 'secondary') {
        setButtonColor('error'); // Rengi kırmızıya ayarla
      } else {
        setButtonColor('secondary'); // Rengi griye ayarla
      }
    }
    
    return (
      <div style={{display:"flex", flexWrap:"wrap",gap:"2rem"}}>
    {dataList?.map((item,index)=> {
      const {sira, sirket_adi,ulke,telefon_numarasi,adres,araba_modelleri}=item;
      return (
        <Card sx={{ padding:"1rem", maxWidth:380,minWidth:380 ,boxShadow:"0px 0px 5px", }}>
        <Box sx={{marginBottom:"",border:"2px solid red" }} >
         
            <Typography gutterBottom variant="h5" component="div" color="text.primary">
            {sirket_adi}
            </Typography>
            <Typography  > <span style={{textDecoration:"underline"}}>ADDRES:</span>  {item.adres}</Typography>
          
            <CardActions sx={{justifyContent:"right",alignItems:"end"}}>
              <button onClick={newFirm}><EditIcon/></button>
                {open && <Modal
                    open={open}
                    onClose={open}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={modalStyle}>                      
                    <TextField sx={{mt:2,width:"100%"}} id="outlined-basic" label="Company" variant="outlined" required />
                    <TextField required sx={{mt:2,width:"100%"}} id="outlined-basic" label="Address" variant="outlined" />
                    <TextField sx={{mt:2,width:"100%"}} id="outlined-basic" label="Image URL" variant="outlined" />
                    <div style={{border:"2px solid red",alignItems:"stretch"}}> 
                      <button style={{cursor:"pointer",marginTop:".7rem",color:"white" ,backgroundColor:"blue",border:"2px solid blue",padding:" .5rem 1rem"}}  onClick={handleSubmit}>Submit </button>
                      <button style={{cursor:"pointer",marginTop:".7rem",color:"white" ,backgroundColor:"red", padding:" .5rem "}} onClick={()=> setOpen(!open)}><CancelOutlinedIcon/> </button>
                      </div>
                    </Box>
                  </Modal>}

              <button onClick={()=>handleDelete(sira)}><DeleteOutlineIcon/></button> 
                  
            </CardActions>
          </Box>

        <CardMedia
          component="img"
          height="%94"
          image={item.resim}
          alt="logo"
          sx={{objectFit:"contain",border:"2px solid red"}}
        />
          
      </Card>
        )
      
        }
      )
    } 
  </div>      
 
  )

}

export default Firms