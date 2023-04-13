import React from 'react';
import '../../css/dabda/main.css';
import { useNavigate } from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";

const Main = () => {
    const movePage = useNavigate();

    function goPush(){
      movePage('/dabda/push');
    }
    function goBook(){
      movePage('/dabda/book');
    }
    function goSStore(){
      movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }

    return (
      <>
      <MobileView>
        <div id = "MBcontaner">
          <div id ="MBmenuItems">
            <div onClick = {goSStore} className = "MBmenuItem">S &nbsp;&nbsp; H &nbsp;&nbsp; O &nbsp;&nbsp; P</div>
            <div onClick = {goBook} className = "MBmenuItem">B &nbsp;&nbsp; O &nbsp;&nbsp; O &nbsp;&nbsp; K</div>
            <div onClick = {goPush} className = "MBmenuItem">P &nbsp;&nbsp; U &nbsp;&nbsp; S &nbsp;&nbsp; H</div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "contaner">
        <div id ="menuItems">
          <div onClick = {goSStore} className = "menuItem">S &nbsp;&nbsp; H &nbsp;&nbsp; O &nbsp;&nbsp; P</div>
          <div onClick = {goBook} className = "menuItem">B &nbsp;&nbsp; O &nbsp;&nbsp; O &nbsp;&nbsp; K</div>
          <div onClick = {goPush} className = "menuItem">P &nbsp;&nbsp; U &nbsp;&nbsp; S &nbsp;&nbsp; H</div>
        </div>
      </div>
    </BrowserView>
    </>
    );
  };
  
  export default Main;