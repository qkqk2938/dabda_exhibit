import React from 'react';
import '../../css/dabda/main.css';
import {BrowserView, MobileView} from "react-device-detect";
import { useNavigate } from "react-router-dom";
import backIcon from '../../image/dabda/backIcon.png'

const Push = () => {

    const movePage = useNavigate();

  
    function goMain(){
      movePage('/dabda/main');
    }

    return (
      <>
       <div id = "backIconDiv"><img id = "backIcon" src={backIcon} alt="backIcon" onClick={goMain} /></div>
      <MobileView>
        <div id = "MBcontaner">
          <div id ="MBmenuItems">
         dsf
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "contaner">
        <div id ="menuItems">
asdf
        </div>
      </div>
    </BrowserView>
    </>
    );
  };
  
  export default Push;