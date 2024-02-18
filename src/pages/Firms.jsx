import axios from 'axios';
 import useStockCalls from '../hooks/useStockCalls';
 import { useState } from 'react';
import  React from 'react';
 import Card from '@mui/material/Card';
 import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
 import FavoriteIcon from '@mui/icons-material/Favorite';
 import Collapse from '@mui/material/Collapse';
 import IconButton, { IconButtonProps } from '@mui/material/IconButton';
 import { styled } from '@mui/material/styles';
 import CardHeader from '@mui/material/CardHeader';
 import Avatar from '@mui/material/Avatar';
 import { red } from '@mui/material/colors';
 import MoreVertIcon from '@mui/icons-material/MoreVert';



 const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
 


const Firms = () => {
  const {getFirms,dataList,brand,setbrand}= useStockCalls();
  
    const [expanded, setExpanded] = useState(false);
  
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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
        <Card sx={{  maxWidth:380,minWidth:380 ,boxShadow:"0px 0px 5px"}}>
        
        <CardMedia
          component="img"
          height="294"
          image={item.resim}
          alt="logo"
          
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div" color="text.primary">
          {sirket_adi}
          </Typography>
          <Typography>{item.adres}</Typography>
        </CardContent>
        <CardActions >
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography color="error">
              {ulke}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
        )
      
        }
      )
    } 
  </div>      
 
  )

}

export default Firms