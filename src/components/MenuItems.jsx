import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import DashboradIcon from "@mui/icons-material/Dashboard"
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import InventoryIcon from '@mui/icons-material/Inventory';
import StoreIcon from '@mui/icons-material/Store';
import StarsIcon from '@mui/icons-material/Stars';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import { useNavigate } from 'react-router-dom';


const icons = [
    {
    icon:<DashboradIcon/>,
    title:"Dashboard",
    url:"/stock/"
    },
    {
    icon:<ShoppingCartIcon/>,
    title:"Purchase",
    url:"/stock/purchases"
    },
    {
    icon:<AttachMoneyIcon/>,
    title:"Sales",
    url:"/stock/sales"
    },
    {
    icon:<StoreIcon/>,
    title:"Firms",
    url:"/stock/firms"
    },
    {
    icon:<StarsIcon/>,
    title:"Brands",
    url:"/stock/brands"
    },
    {
    icon:<InventoryIcon/>,
    title:"Products",
    url:"/stock/products"
    },
    {
    icon:<SupervisorAccountIcon/>,
    title:"Admin Panel",
    url:"https://10001.fullstack.clarusway.com/"
    }
]
     

const MenuItems = () => {
    const navigate = useNavigate();
    //NAVIGATE HOOK'U ADRES CUBUGUNDA VAROLAN LINKIN UZERINE EKLEEME YAPAR. HARIIC LINKE GITMEK ISTIYORSAK "LINK TO= " KULLANIRIZ.
     
    const iconStyle = {
        color:"white",
        "& .MuiSvgIcon-root": {color:"white"}, 
        "&:hover": {color:"orange"},
        "&:hover .MuiSvgIcon-root": {color:"orange"}, 
    }
  return (
    <div>
    <List>
    {icons?.map((item, index) => (
      <ListItem key={index} disablePadding>
        {!item.url.includes("https") && 
        <ListItemButton onClick={()=>navigate(item.url)} sx={iconStyle}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>}
        {item.url.includes("http") && 
        <ListItemButton to={item.url} sx={iconStyle}>
          <ListItemIcon>
            {item.icon}
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>}


      </ListItem>
    ))}
    </List>
    </div>
  )
}

export default MenuItems