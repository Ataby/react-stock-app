import axios from 'axios';
import React from 'react';
import { useEffect,useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';


const Firms = () => {
  //FIRMALARI API'DEN CEKMEK ICIN USE.EFFECT ICINDE ISTEK YAPALIM
  
  const [dataList, setdataList] = useState(null);
  const [brand, setbrand] = useState(null);
    
  const URL = `https://659a7537652b843dea539125.mockapi.io/api/v1/task`;

  const getFirms=async()=> {
    try {
      fetch(URL)
      .then((res)=> res.json())
      .then((data)=> setdataList(data));
    } catch (error) {
      console.log(error);
    }

  //   try {
  //     fetch(URL,{
  //       headers: {
  //         'X-Parse-Application-Id': 'hlhoNKjOvEhqzcVAJ1lxjicJLZNVv36GdbboZj3Z', 
  //         // This is the fake app's application id
  //         'X-Parse-Master-Key': 'SNMJJF0CZZhTPhLDIqGhTlUNV9r60M2Z5spyWfXW', 
  //         // This is the fake app's readonly master key
  //       }
  //     })
  //     .then((res)=> res.json())
  //     .then((data)=> setdataList (data))     

  //   } catch (error) {
  //     console.log(error)
  //   }
  }

  useEffect(() => {
    getFirms();
    console.log(dataList); 
    console.log(brand);
     
  }, [ ]);


  
  
  return (
    <>
    <div>
      <p> Model you choose: </p> 
      <Dropdown>
      <DropdownButton id="dropdown-basic-button" title="Brands" drop="down" variant='primary'>
        {dataList?.map((item,index)=> {
          const {sira, sirket_adi,ulke,telefon_numarasi,adres,araba_modelleri}=item;
          return (
            <div>
            <Dropdown.Item key={sirket_adi} onClick={(e)=> setbrand(e.value)}>{sirket_adi}</Dropdown.Item>
            </div> 
            
          )
        })}
 
    </DropdownButton>
    </Dropdown>

    
    </div>
    </>
  )

}

export default Firms