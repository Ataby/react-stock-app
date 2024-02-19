import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {useDispatch, useSelector} from "react-redux";
 import { fetchFail ,fetchStart,getSuccess} from '../features/stockSlice';
import useStockCalls from '../hooks/useStockCalls';

const Firms = () => {
  //FIRMALARI API'DEN CEKMEK ICIN USE.EFFECT ICINDE ISTEK YAPALIM
  const {getFirms,dataList,brand,setbrand}= useStockCalls();

  // const dispatch = useDispatch();
  // const [dataList, setdataList] = useState(null);
  // const [brand, setbrand] = useState(null);
    
  // const URL = `https://659a7537652b843dea539125.mockapi.io/api/v1/task`;

  // const getFirms=async()=> {
  //   const url= "firms";
  //   dispatch(fetchStart)
  //   try {
  //     fetch(URL)
  //     .then((res)=> res.json())
  //     .then((data)=> setdataList(data));
  //     dispatch(getSuccess({dataList,url}));
  //   } catch (error) {
  //     dispatch(fetchFail)
  //     console.log(error);
  //   }
    //---------------------------------------------------------------------
    //   // try { BURASI HOCANIN YAPTIĞI KOD
    //   //   fetch(URL,{
      //   //     headers: {
        //   //       'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', 
        //   //       // This is the fake app's application id
        //   //       'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', 
        //   //       // This is the fake app's readonly master key
        //   //     }
        //   //   })
        //   //   .then((res)=> res.json())
        //   //   .then((data)=> setdataList (data))     
        
        //   // } catch (error) {
          //   //   console.log(error)
          //   // } 
          //---------------------------------------------------------------------
  //  }

  // const {getFirms}= useStockCalls()

  // useEffect(() => {
  //   getFirms();
  //   console.log(dataList); 
  //   console.log(brand);
     
  // }, [ ]);


  
  
  return (
    <>
    <div style={{maxWidth:"150px"}} class="dropdown-center">
      <p> Model you choose: </p> 
     
      <button button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" > CARS BRANDS </button>
 
       <ul class="dropdown-menu">
        {dataList?.map((item,index)=> {
          const {sira, sirket_adi,ulke,telefon_numarasi,adres,araba_modelleri}=item;
          return (
 
            <li ><button class="dropdown-item" onClick={()=> setbrand(item)} href="#"> {sirket_adi}</button></li>
 
          )
        }
        )}
        </ul>
        </div>
        {console.log(brand,dataList)}
    </>
 

    
   
  )

}

export default Firms