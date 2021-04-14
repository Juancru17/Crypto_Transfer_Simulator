import React, { useState } from 'react';

function GetApi(){
const [data,setData]=useState([]);
    const getData=()=>{
        fetch('fakeApi.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            console.log(response)
            return response.json();
          })
          .then(function(myJson) {
            console.log(myJson);
            setData(myJson)
          });
      }
    }
       
      export default GetApi;