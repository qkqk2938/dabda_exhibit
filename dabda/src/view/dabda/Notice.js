import React, {useState, useEffect} from 'react';
import '../../css/dabda/notice.css';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import $ from 'jquery';
import closeIcon from '../../image/dabda/closeIcon.png'
import backIcon from '../../image/dabda/backIcon.png'

const Notice = () => {
  const [notice, setState] = useState([]);
  const [auth, setAuth] = useState(false);
  const movePage = useNavigate();


  function goDetail(id){
    movePage('/dabda/noticedetail',{ state: { id: id } });
    increaseHit(id);
  }
  
  function goHidden(id){
    movePage('/dabda/noticeinsert',{ state: { id: id } });
  }
  function goPush(){
    movePage('/dabda/push');
  }
  
  const increaseHit = async (id) => {
    const result = await axios.post('/api/notice/increaseHit', {
      id : id
    },{
      headers: {
        "Content-Type": "application/json",
      }
    });
  }

  const getNoticeList = async () => {
    const result = await axios.post('/api/notice/getNoticeList');
    setState(result.data.data);
  }

  const deleteNotice = async (id) => {
    
    if(!window.confirm(id+"번 공지를 삭제하시겠습니다?")){
      return;
    }

    const result = await axios.post('/api/notice/deleteNotice', {
      id : id
    },{
      headers: {
        "Content-Type": "application/json",
      }
    }).then(Response =>{
      getNoticeList();

    }
    );
  }


  function showHidden () {
    $("#entWrite").css("display", "block");
  }
  function showHiddenPass () {
    $("#hiddenPass").css("display", "block");
  }
  function addPass (key) {
    $("#password").val( $("#password").val()+key);
  }
  function deletePass () {
    $("#password").val("");
  }
  function hidePass(){
    $("#entWrite").css("display", "none");
    $("#hiddenPass").css("display", "none");
    deletePass();
  }
  function showHiddenBtn(){
    if($("#password").val() == "~dpftk031"){
      $(".tdBtn").css("display", "table-cell");
      $("#hiddenInsertBtn").css("display", "block");

    }
    hidePass();
  }

  const handleKeyPress = e => {
    if(e.key === 'Enter') {
      showHiddenBtn();
    }
  }

  useEffect(() => {
    getNoticeList();

    
  },[])

     return (
      <>
      <div id = "backIconDiv"><img id = "backIcon" src={backIcon} alt="backIcon" onClick={goPush} /></div>
      <div id = "entWrite" onDoubleClick={showHiddenPass}></div>

      <div id = "hiddenPass" >
        <div id = "HP1">답다맨 외 이용을 금지합니다.<img id = "closeIcon" src={closeIcon} alt="closeIcon" onClick={hidePass} /></div>
        <div id = "HP2"><input id = "password" type="password" onKeyUp={handleKeyPress}/></div>
        <div id = "keypad">
          <div id ="1key" className='key' onClick={() => addPass("1")}><span className='keySpan'>1</span></div>
          <div id ="2key" className='key' onClick={() => addPass("2")}><span className='keySpan'>2</span></div>
          <div id ="3key" className='key' onClick={() => addPass("3")}><span className='keySpan'>3</span></div>
          <div id ="4key" className='key' onClick={() => addPass("4")}><span className='keySpan'>4</span></div>
          <div id ="5key" className='key' onClick={() => addPass("5")}><span className='keySpan'>5</span></div>
          <div id ="6key" className='key' onClick={() => addPass("6")}><span className='keySpan'>6</span></div>
          <div id ="7key" className='key' onClick={() => addPass("7")}><span className='keySpan'>7</span></div>
          <div id ="8key" className='key' onClick={() => addPass("8")}><span className='keySpan'>8</span></div>
          <div id ="9key" className='key' onClick={() => addPass("9")}><span className='keySpan'>9</span></div>
          <div id ="allDeletekey" className='key' onClick={deletePass}><span className='keySpan'>지우기</span></div>
          <div id ="0key" className='key' onClick={() => addPass("0")}><span className='keySpan'>0</span></div>
          <div id ="closekey" className='key' onClick={showHiddenBtn}><span className='keySpan'>확인</span></div>
        </div>
      </div>
      <MobileView>
        <div id = "MBnoticeItems">
          <div id = "MBnoticeItem">
           <h2 onDoubleClick={showHidden}>NOTICE</h2>
              <table id = 'notiTable'>
                  <tr>
                    <th id = "culId">No.</th>
                    <th id = "culTitle">제목</th>
                    <th id = "culReq">작성자</th>
                  </tr>
                {notice.map((row, index) => (
                    <tr id = {"row"+row.id} onClick={() => goDetail(row.id)}>
                      <td className='tdId'>{row.id}. </td>
                      <td className='tdTitle'>{row.title}</td>
                      <td className='tdReq'>{row.requester}</td>
                      <td className='tdBtn'><input type="button" className="updateBtn" value="수정" onClick={(e) => {e.stopPropagation();goHidden(row.id)}} /></td>
                      <td className='tdBtn'><input type="button" className="updateBtn" value="삭제" onClick={(e) => {e.stopPropagation();deleteNotice(row.id)}} /></td>
                    </tr>        
                ))}
            </table>
            <input className='tdBtn' id = "hiddenInsertBtn" type="button" value="글쓰기" onClick={goHidden}/>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div id = "noticeItems">
          <div id = "noticeItem">
            <h2 onDoubleClick={showHidden}>NOTICE</h2>
              <table id = 'notiTable'>
                  <tr>
                    <th id = "culId">No.</th>
                    <th id = "culTitle">제목</th>
                    <th id = "culReq">작성자</th>
                    <th id = "culReqd">작성일</th>
                    <th id = "culHit">조회</th>
                  </tr>
                {notice.map((row, index) => (
                    <tr id = {"row"+row.id} onClick={() => goDetail(row.id)}>
                      <td className='tdId'>{row.id}. </td>
                      <td className='tdTitle'>{row.title}</td>
                      <td className='tdReq'>{row.requester}</td>
                      <td className='tdReqd'>{row.reqdate}</td>
                      <td className='tdHit'>{row.hit}</td>
                      
                      <td className='tdBtn'><input type="button" className="updateBtn" value="수정" onClick={(e) => {e.stopPropagation();goHidden(row.id)}} /></td>
                      <td className='tdBtn'><input type="button" className="updateBtn" value="삭제" onClick={(e) => {e.stopPropagation();deleteNotice(row.id)}} /></td>
                    </tr>        
                ))}
            </table>
            <input className='tdBtn' id = "hiddenInsertBtn" type="button" value="글쓰기" onClick={goHidden}/>
          </div>
        </div>
      </BrowserView>
      
      </>
    );

  }





  export default Notice;