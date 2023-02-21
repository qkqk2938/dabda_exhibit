import React from 'react';
import '../../css/dabda/notice.css';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';
import $ from 'jquery';
//import { useNavigate } from "react-router-dom";

const Notice = () => {

   // const movePage = useNavigate();
  axios.post('/api/notice/getNoticeList')
  .then((Response)=>{
    var data = Response.data.data;
    console.log(data);
    for(var i = 0 ; i < data.length; i++){
      var row = data[i];
      $("#notiTable").append(
        `
          <tr id = "row`+row.id+`.">
            <th>`+row.id+`</th>
            <th>`+row.title+`</th>
            <th>`+row.requester+`</th>
            <th>`+row.reqdate+`</th>
            <th>`+row.hit+`</th>
          </tr>
        `
      );
 

    }
  })
  .catch((Error)=>{console.log(Error)});


    return (
      <>
      <MobileView>
        <div id = "noticeItems">
          <div id = "noticeItem">
            <h2>NOTICE</h2>
              <table id = 'notiTable'>

            </table>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div id = "noticeItems">
          <div id = "noticeItem">
            <h2>NOTICE</h2>
              <table id = 'notiTable'>
            
            </table>
          </div>
        </div>
      </BrowserView>
      </>
    );
  };
  
  export default Notice;