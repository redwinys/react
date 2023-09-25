import React from 'react';
import { throttle } from "lodash";
import { useState } from 'react';
import '../css/new.css'


const R095_reactThrottle = ()=> {
 const throttleFunc = throttle(() => {
    console.log("Throttle API Call");
  }, 1000);
  
    return (
      <>
        <h2>검색어 입력</h2> 
        <input type="text" onChange={throttleFunc} />
        <p>My myPage</p>
      </>
    )
  }

export default R095_reactThrottle;
