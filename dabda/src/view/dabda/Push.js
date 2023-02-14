import React from 'react';
import '../../css/dabda/main.css';
import {BrowserView, MobileView} from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Ac = () => {
  // const moveOutPage = window.location.href();

  // function goInsta(){
  //   moveOutPage('https://www.instagram.com/dabda/');
  // }
    const movePage = useNavigate();

    function goInsta(){
      movePage('/redirect', { state: { url: "https://www.instagram.com/dabda_official/" } });
    }
    function goQnA(){
      movePage('/redirect', { state: { url: "http://pf.kakao.com/_wkxiNxj" } });
    }

    return (
      <>
      <MobileView>
        <div id = "MBcontaner">
          <div id ="MBmenuItems">
            <div onClick = {goQnA} className = "MBmenuItem" id ="MBqa">Q &nbsp; .&nbsp; and &nbsp; .&nbsp; A</div>
            <div className = "MBmenuItem">N &nbsp;O &nbsp;T &nbsp;I &nbsp;C &nbsp;E</div>
            <div onClick = {goInsta} className = "MBmenuItem" id = "MBinsta">INSTAGRAM</div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "contaner">
        <div id ="menuItems">
          <div onClick = {goQnA} className = "menuItem" id ="qa">Q &nbsp; .&nbsp; and &nbsp; .&nbsp; A</div>
          <div className = "menuItem">N &nbsp;O &nbsp;T &nbsp;I &nbsp;C &nbsp;E</div>
          <div onClick = {goInsta} className = "menuItem" id = "insta">INSTAGRAM</div>
        </div>
      </div>
    </BrowserView>
    </>
    );
  };
  
  export default Ac;