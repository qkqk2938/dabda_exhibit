import React from 'react';
import '../../css/dabda/main.css';
import logo from '../../image/logo/logo.png'
import {Main1,Main2,Main3,Main4,Main5,MMain1,MMain2,MMain3,MMain4,MMain5} from '../../component/tap'
import {BrowserView, MobileView} from "react-device-detect";
import { useState } from "react";

const Main = () => {

  const data = [
    // {
    //   id: 0,
    //   title: "",
    //   Mtitle: "",
    //   description: (<Main0></Main0>),
    // },
    {
      id: 1,
      title: (
          <img id = "menuLogo" src = {logo} alt="logo"/>
  
      ),
      Mtitle: (
        <div id  = "MlogoBox">
          <img id = "MmenuLogo" src = {logo} alt="logo"/>
        </div>
      ),
      description: (<Main1></Main1>),
      Mdescription: (<MMain1></MMain1>),
    },
    {
      id: 2,
      title: "답다 프로젝트01_엉성",
      Mtitle: (<p>답다<br/><br/>프<br/>로<br/>젝<br/>트<br/>01<br/><br/>엉<br/>성</p>),
      description: (<Main2></Main2>),
      Mdescription: (<MMain2></MMain2>),
    },
    {
      id: 3,
      title: "결핍",
      Mtitle: (<p>결핍</p>),
      description: (<Main3></Main3>),
      Mdescription: (<MMain3></MMain3>),
    },
    {
      id: 4,
      title: "은페",
      Mtitle: (<p>은페</p>),
      description: (<Main4></Main4>),
      Mdescription: (<MMain4></MMain4>),
    },
    {
      id: 5,
      title: "사랑",
      Mtitle: (<p>사랑</p>),
      description: (<Main5></Main5>),
      Mdescription: (<MMain5></MMain5>),
    }
  ];
  const [index, setIndex] = useState(1);


    return (
      <>
        <BrowserView>
             <section className = "prame">
               <ul className = "tapHeader">
                 {data.map(item => (
                   <li 
                   key={item.id}
                   className= {(item.id===1?"mainMenu menuList":"menuItem menuList")+(item.id===index?" selectMenu":"")}
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
                 <div className = "MtapMainBody">{item.Mdescription}</div>
               ))}
               <ul className = "MtapHeader">
                 {data.map(item => (
                   <li 
                   key={item.id}
                   className= {("MmenuItem MmenuList")+(item.id===index?" selectMenu":"")}
                   onClick={() => setIndex(item.id)}>{item.Mtitle}</li>
                 ))}
               </ul>
                
             </section>
        </MobileView>
      </>
    );
  };
  
  export default Main;

