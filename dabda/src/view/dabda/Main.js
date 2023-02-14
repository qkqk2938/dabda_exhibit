import React from 'react';
import '../../css/dabda/main.css';
import { useNavigate } from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";

const Ac = () => {
    const movePage = useNavigate();

    function goPush(){
      movePage('/dabda/push');
    }
    return (
      <>
      <MobileView>
        <div id = "MBcontaner">
          <div id ="MBmenuItems">
            <div className = "MBmenuItem">S &nbsp;&nbsp; H &nbsp;&nbsp; O &nbsp;&nbsp; P</div>
            <div className = "MBmenuItem">B &nbsp;&nbsp; O &nbsp;&nbsp; O &nbsp;&nbsp; K</div>
            <div onClick = {goPush} className = "MBmenuItem">P &nbsp;&nbsp; U &nbsp;&nbsp; S &nbsp;&nbsp; H</div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "contaner">
        <div id ="menuItems">
          <div className = "menuItem">S &nbsp;&nbsp; H &nbsp;&nbsp; O &nbsp;&nbsp; P</div>
          <div className = "menuItem">B &nbsp;&nbsp; O &nbsp;&nbsp; O &nbsp;&nbsp; K</div>
          <div onClick = {goPush} className = "menuItem">P &nbsp;&nbsp; U &nbsp;&nbsp; S &nbsp;&nbsp; H</div>
        </div>
      </div>
    </BrowserView>
    </>
    );
  };
  
  export default Ac;