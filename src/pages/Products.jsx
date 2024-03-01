import axios from 'axios';
 import useStockCalls from '../hooks/useStockCalls';
 import { useState,useEffect } from 'react';
import  React from 'react';
 import Card from '@mui/material/Card';
 import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
 
 import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
 import Divider from '@mui/material/Divider';
import {modalStyle} from "../styles/globalStyle"
import ProductModal from '../modals/ProductModal';
  


const Products = () => {
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
        <Box style={{width:"100vw"}} >
          <Typography variant='h4' color="error" mb={4} >
            Products
          </Typography>
        <Button variant='contained' color='secondary' onClick={()=>setOpen(!open)}> Add Products</Button>
        </Box>
        <ProductModal  open={open} setOpen={setOpen} info={info} setinfo={setinfo}  />
    {dataList?.map((item,index)=> {
      const {id, sirket_adi,ulke,telefon_numarasi,adres,araba_modelleri}=item;
      console.log(typeof araba_modelleri);
      return (
        <Card sx={{ padding:"1rem",margin:".8rem", maxWidth:400,minWidth:400 ,boxShadow:"0px 0px 5px" }}>
        <Box sx={{ }} >
         
            <Typography variant="h5" component="div" color="text.primary">
            {sirket_adi}
            </Typography>
            <Divider />
            <ul>
              {item.araba_modelleri?.map((model,i)=> 
                 (<li>{model} </li>)
              )}               
            </ul>
          
          </Box>          
      </Card>
        )
      
        }
      )
    } 
  </div>      
 
  )

}

export default Products