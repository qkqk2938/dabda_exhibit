import React, {useEffect} from 'react';
import '../../css/dabda/noticeinsert.css';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import $ from 'jquery';


const Notice = () => {
  const movePage = useNavigate();

  const location = useLocation();
  const stateData = location.state;
  console.log(stateData);
  function goNotice(){
    movePage('/dabda/notice');
  }
  
  const insertNotice = async () => {
    const id = $("#inputID").val();
    const title = $("#inputTitle").val();
    const reqr = $("#inputReqr").val();
    const desc = $("#inputDesc").val();


    if(reqr == null || reqr == ""){
      alert("작성자를 입력해주세오!!");
      return;
    }

    if(title == null || title == ""){
      alert("제목을 입력해주세오! "+reqr+"!");
      return;
    }

    if(desc == null || desc == ""){
      alert("내용을 입력해주세오! "+reqr+"!");
      return;
    }

    const result = await axios.post('/api/notice/insertNotice', {
      id : id
      ,title : title
      ,requester : reqr
      ,description : desc
    },{
      headers: {
        "Content-Type": "application/json",
      }
    });


    movePage('/dabda/notice');
  }

  const getNoticeList = async (id) => {
    console.log(id);
    const result = await axios.post('/api/notice/getNoticeDetail/'+id);
    const Ddata = result.data.data[0];

    $("#inputID").val(id);
    $("#inputTitle").val(Ddata.title);
    $("#inputReqr").val(Ddata.requester);
    $("#inputDesc").val(Ddata.description);

    $("#trID").css("display", "table-row");

  }
  if(stateData != null && stateData.id != ""){
    getNoticeList(stateData.id);
  }




    
 

     return (
      <>
      <MobileView>
        <div id = "MBnoticeItems">
          <div id = "MBnoticeItem">
            
          <table>
              <tr id = "trID">
                <th className='NI1col'>
                  I &nbsp;&nbsp;&nbsp; D : 
                </th>
                <td className='NI2col'>
                  <input id = "inputID" readOnly/>
                </td>
              </tr>
              <tr>
                <th className='NI1col'>
                  제 &nbsp;&nbsp; 목 : 
                </th>
                <td className='NI2col'>
                  <input id = "inputTitle" />
                </td>
              </tr>
              <tr>
                <th>
                작성자 : 
                </th>
                <td>
                <input id = "inputReqr" value="답다맨"/>
                </td>
              </tr>
              <tr>
                <th>
                내 &nbsp;&nbsp; 용 : 
                </th>
                <td>
                <textarea id = "inputDesc">
              </textarea>
                </td>
              </tr>
            </table>
            <input className='NIfootBtn' type="button" value="취소" onClick={goNotice}/>
            <input className='NIfootBtn' type="button" value="확인" onClick={insertNotice}/>


            
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div id = "noticeItems">
          <div id = "noticeItem">

            <table>
              <tr id = "trID">
                <th className='NI1col'>
                  I &nbsp;&nbsp;&nbsp; D : 
                </th>
                <td className='NI2col'>
                  <input id = "inputID" readOnly/>
                </td>
              </tr>
              <tr>
                <th className='NI1col'>
                  제 &nbsp;&nbsp; 목 : 
                </th>
                <td className='NI2col'>
                  <input id = "inputTitle" />
                </td>
              </tr>
              <tr>
                <th>
                작성자 : 
                </th>
                <td>
                <input id = "inputReqr" value="답다맨"/>
                </td>
              </tr>
              <tr>
                <th>
                내 &nbsp;&nbsp; 용 : 
                </th>
                <td>
                <textarea id = "inputDesc">
              </textarea>
                </td>
              </tr>
            </table>
            <input className='NIfootBtn' type="button" value="취소" onClick={goNotice}/>
            <input className='NIfootBtn' type="button" value="확인" onClick={insertNotice}/>


            
          </div>
        </div>
      </BrowserView>
      
      </>
    );

  }





  export default Notice;