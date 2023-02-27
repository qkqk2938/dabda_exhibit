import React from 'react';
import '../../css/dabda/main.css';
import {BrowserView, MobileView} from "react-device-detect";
import { useNavigate } from "react-router-dom";
import backIcon from '../../image/dabda/backIcon.png'

const Push = () => {

    const movePage = useNavigate();

    function goInsta(){
      movePage('/redirect', { state: { url: "https://www.instagram.com/dabda_official/" } });
    }
    function goQnA(){
      movePage('/redirect', { state: { url: "http://pf.kakao.com/_wkxiNxj" } });
    }

    function goNoti(){
      movePage('/dabda/notice');
    }
    function goMain(){
      movePage('/dabda/main');
    }

    return (
      <>
       <div id = "backIconDiv"><img id = "backIcon" src={backIcon} alt="backIcon" onClick={goMain} /></div>
      <MobileView>
        <div id = "MBcontaner">
          <div id ="MBmenuItems">
            <div onClick = {goQnA} className = "MBmenuItem" id ="qa">Q &nbsp; .&nbsp; and &nbsp; .&nbsp; A</div>
            <div onClick = {goNoti} className = "MBmenuItem">N &nbsp;O &nbsp;T &nbsp;I &nbsp;C &nbsp;E</div>
            <div onClick = {goInsta} className = "MBmenuItem" id = "insta">INSTAGRAM</div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "contaner">
        <div id ="menuItems">
          <div onClick = {goQnA} className = "menuItem" id ="qa">Q &nbsp; .&nbsp; and &nbsp; .&nbsp; A</div>
          <div onClick = {goNoti} className = "menuItem">N &nbsp;O &nbsp;T &nbsp;I &nbsp;C &nbsp;E</div>
          <div onClick = {goInsta} className = "menuItem" id = "insta">INSTAGRAM</div>
        </div>
      </div>
    </BrowserView>
    </>
    );
  };
  
  export default Push;