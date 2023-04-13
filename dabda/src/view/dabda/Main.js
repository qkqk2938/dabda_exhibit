import React from 'react';
import '../../css/dabda/main.css';
import logo from '../../image/logo/logo.png'
import {BrowserView, MobileView} from "react-device-detect";
import { useState } from "react";

const Main = () => {

  const data = [
    {
      id: 0,
      title: (
          <img id = "menuLogo" src = {logo} alt="logo"/>
  
      ),
      description: "1",
    },
    {
      id: 1,
      title: "답다 프로젝트01_엉성",
      description: "2",
    },
    {
      id: 2,
      title: "결핍",
      description: "3",
    },
    {
      id: 3,
      title: "은페",
      description: "4",
    },
    {
      id: 4,
      title: "사랑",
      description: "5",
    }
  ];
  const [index, setIndex] = useState(0);


    return (
      <>
        <BrowserView>
             <section className = "prame">
               <ul className = "tapHeader">
                 {data.map(item => (
                   <li 
                   key={item.id}
                   className= {(item.id===0?"mainMenu menuList":"menuItem menuList")+(item.id===index?" selectMenu":"")}
                   onClick={() => setIndex(item.id)}>{item.title}</li>
                 ))}
               </ul>
                {data.filter(item => index === item.id).map(item => (
                 <div className = "tapBody">{item.description}</div>
               ))}
             </section>
        </BrowserView>
        <MobileView>
      
        </MobileView>
      </>
    );
  };
  
  export default Main;

