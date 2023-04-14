import React from 'react';
import '../../css/dabda/main.css';
import logo from '../../image/logo/logo.png'
import {Main0,Main1,Main2,Main3,Main4,Main5} from '../../component/tap'
import {BrowserView, MobileView} from "react-device-detect";
import { useState } from "react";

const Main = () => {

  const data = [
    {
      id: 0,
      title: "",
      description: (<Main0></Main0>),
    },
    {
      id: 1,
      title: (
          <img id = "menuLogo" src = {logo} alt="logo"/>
  
      ),
      description: (<Main1></Main1>),
    },
    {
      id: 2,
      title: "답다 프로젝트01_엉성",
      description: (<Main2></Main2>),
    },
    {
      id: 3,
      title: "결핍",
      description: (<Main3></Main3>),
    },
    {
      id: 4,
      title: "은페",
      description: (<Main4></Main4>),
    },
    {
      id: 5,
      title: "사랑",
      description: (<Main5></Main5>),
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
                   className= {(item.id===0?"":item.id===1?"mainMenu menuList":"menuItem menuList")+(item.id===index?" selectMenu":"")}
                   onClick={() => setIndex(item.id)}>{item.title}</li>
                 ))}
               </ul>
                {data.filter(item => index === item.id).map(item => (
                 <div className = "tapMainBody">{item.description}</div>
               ))}
             </section>
        </BrowserView>
        <MobileView>
        <section className = "prame">
               {data.filter(item => index === item.id).map(item => (
                 <div className = "MtapMainBody">{item.description}</div>
               ))}
               <ul className = "MtapHeader">
                 {data.map(item => (
                   <li 
                   key={item.id}
                   className= {(item.id===0?"":item.id===1?"MmainMenu MmenuList":"MmenuItem MmenuList")+(item.id===index?" selectMenu":"")}
                   onClick={() => setIndex(item.id)}>{item.title}</li>
                 ))}
               </ul>
                
             </section>
        </MobileView>
      </>
    );
  };
  
  export default Main;

