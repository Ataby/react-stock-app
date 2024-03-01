import axios from 'axios';
import useStockCalls from '../hooks/useStockCalls';
import { useState,useEffect } from 'react';
import  React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import {modalStyle} from "../styles/globalStyle"
   


const Brands = () => {
  const {getFirms,dataList}= useStockCalls();
  const [open, setOpen] = useState(false); 
  const [info, setinfo] = useState({}); 

  useEffect(() => {
    // getBrands();
    // getCategories();
    // getProducts();
  }, [ ])
  
    
    return (
      <div style={{display:"flex", flexWrap:"wrap",border:"2px solid white",boxSizing:"borderBox",margin:"0",padding:"1rem"}}>
    {dataList?.map((item,index)=> {


      return (
        <Card sx={{ padding:"1rem",margin:".8rem", maxWidth:400,minWidth:400 ,boxShadow:"0px 0px 5px" }}>
        <Box sx={{ }} >
         
            <Typography variant="h5" component="div" color="text.primary">
            {item.sirket_adi}
            </Typography>
            <Divider />
            <CardMedia
          component="img"
          height="174vh"
          image={item.resim}
          alt="logo"
          sx={{objectFit:"contain",marginTop:"1rem"}}/>

          
          </Box>          
      </Card>
        )
      
        }
      )
    } 
  </div>      
 
  )

}

export default Brands