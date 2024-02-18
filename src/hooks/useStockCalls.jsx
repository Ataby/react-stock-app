import React from 'react';
import { axiosWithoutToken } from '../service API/axiosInstance';
import axios from 'axios';
import { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import {useDispatch, useSelector} from "react-redux";
import { fetchFail ,fetchStart,getSuccess} from '../features/stockSlice';
import { axiosPublic } from './useAxios';
 
const useStockCalls = () => {
    const URL = `https://659a7537652b843dea539125.mockapi.io/api/v1/task`;
    const dispatch = useDispatch();
    const [dataList, setdataList] = useState(null);
    const [brand, setbrand] = useState(null);
    
    const getFirms=async()=> {
        // const url= "firms";
        dispatch(fetchStart)
        try {
          fetch(URL)
          .then((res)=> res.json())
          .then((data)=> setdataList(data));
          dispatch(getSuccess({dataList,URL}));
        } catch (error) {
          dispatch(fetchFail)
          console.log(error);
        }
    }
      

    useEffect(() => {
        getFirms();
        console.log(dataList); 
        console.log(brand);
         
      }, [ ]);
    // const getFirms=async()=> {
    //     const url= "firms";
    //     dispatch(fetchStart)
    //     try {
    //       fetch(URL)
    //       .then((res)=> res.json())
    //       .then((data)=> setdataList(data));
    //       dispatch(getSuccess({dataList,url}));
    //     } catch (error) {
    //       dispatch(fetchFail)
    //       console.log(error);
    //     }
    // }
    
     
//CUSTOM HOOK ICINDE NORMAL FONKSIYONLAR YAZILABILIR, HER TURLU HOOK KULLANILABILIR. FAKAT "RETURN" KISMINDA JSX DONDURMEYIZ. ONUN YERINE BURADAKI FONKSIYONLARI DONDURURUZ
// aslında yazılan fonksıyonu dondurmek ıcın custom hook yazıyoruz.Cunku fonksıyonu tekrar tekrar yazmak ıstemıyoruz.
  return {getFirms,dataList,brand,setbrand}
}

export default useStockCalls