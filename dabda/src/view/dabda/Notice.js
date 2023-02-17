import React from 'react';
import {BrowserView, MobileView} from "react-device-detect";
import { useNavigate } from "react-router-dom";

const Notice = () => {

    const movePage = useNavigate();


    function goNoti(){
      movePage('/dabda/notice');
    }

    return (
      <>
      <MobileView>

      </MobileView>
      <BrowserView>

    </BrowserView>
    </>
    );
  };
  
  export default Notice;