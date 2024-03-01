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
import FirmModal from '../modals/FirmModal';
  


const Firms = () => {
  const {getFirms,dataList ,postFirms,deleteFirms,putFirms}= useStockCalls();
  const [open, setOpen] = useState(false); 
  const [info, setinfo] = useState({}); 

    
    return (
      <div style={{display:"flex", flexWrap:"wrap",border:"2px solid white",boxSizing:"borderBox",margin:"0",padding:"1rem"}}>
        <Box style={{width:"100vw"}} >
        <Typography variant='h4' color="error" mb={4} >
            Firms
          </Typography>
        <Button variant='contained' color='secondary' onClick={()=>setOpen(!open)}> Add New Firm</Button>
        </Box>
        <FirmModal  postFirms={postFirms} open={open} setOpen={setOpen} info={info} setinfo={setinfo} putFirms={putFirms} />
    {dataList?.map((item,index)=> {
      const {id, sirket_adi,ulke,telefon_numarasi,adres,araba_modelleri}=item;
      return (
        <Card sx={{ padding:"1rem",margin:".8rem", maxWidth:400,minWidth:400 ,boxShadow:"0px 0px 5px" }}>
        <Box sx={{ }} >
         
            <Typography variant="h5" component="div" color="text.primary">
            {sirket_adi}
            </Typography>
            <Typography  > <span style={{textDecoration:"underline"}}>ADDRESS:</span>  {adres}</Typography>
            <Typography><span style={{textDecoration:"underline"}}> TELEPHONE:</span> {telefon_numarasi} </Typography>
          
            <CardActions sx={{justifyContent:"right"}}>
              <button onClick={ ()=>{setOpen(!open);
                                    setinfo(item) }} ><EditIcon/></button>
              <button onClick={ ()=>deleteFirms(id) }><DeleteOutlineIcon/></button> 
                  
            </CardActions>
          </Box>

        <CardMedia
          component="img"
          height="174vh"
          image={item.resim}
          alt="logo"
          sx={{objectFit:"contain"}}/>
          
      </Card>
        )
      
        }
      )
    } 
  </div>      
 
  )

}

export default Firms