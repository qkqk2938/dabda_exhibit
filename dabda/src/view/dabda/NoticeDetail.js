import React, {useState, useEffect} from 'react';
import '../../css/dabda/noticedetail.scss';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import menuIcon from '../../image/dabda/menuIcon.png'


const NoticeDetail = () => {
  const [notice, setState] = useState([]);
  const movePage = useNavigate();
  const location = useLocation();
  const { id } = location.state;

   
  const getNoticeDetail = async () => {
    console.log(id);
    const result = await axios.post('/api/notice/getNoticeDetail/'+id);
    setState(result.data.data[0]);
  }

  function goNoti(){
    movePage('/dabda/notice');
  }
  
  useEffect(() => {
    getNoticeDetail();

    
  },[])

     return (
      <>
      <MobileView>
      <div id = "MBnoticeItems">
          <div id = "MBnoticeItem">
            <h2>{notice.id +". "+ notice.title}</h2>
            <table id = "Table">
              <tr id = "derow1">
                <th colSpan="2" id = "reqrT">
                  {notice.requester}
                </th>
              </tr>
              <tr id = "derow2">
                <td id = "reqdateT">
                  {notice.reqdate}
                </td>
                <td id = "hitT">
                  {notice.hit}
                </td>
              </tr>
            </table>
            <div>
              <p id = "descT">
                {notice.description}
              </p>
            </div>
            <div class="button-container-3">
              <span class="mas"></span>
              <button type="button" name="Hover" onClick={goNoti}>목록으로</button>
            </div>
          </div>
        </div>
      </MobileView>
      <BrowserView>
      <div id = "noticeItems">
          <div id = "noticeItem">
            <h2>{notice.id +". "+ notice.title}</h2>
            <table id = "Table">
              <tr id = "derow1">
                <th colSpan="2" id = "reqrT">
                  {notice.requester}
                </th>
              </tr>
              <tr id = "derow2">
                <td id = "reqdateT">
                  {notice.reqdate}
                </td>
                <td id = "hitT">
                  {notice.hit}
                </td>
              </tr>
            </table>
            <div>
              <p id = "descT">
                {notice.description}
              </p>
            </div>
            <div class="button-container-3">
              <span class="mas"></span>
              <button type="button" name="Hover" onClick={goNoti}>목록으로</button>
            </div>
          </div>
        </div>
      </BrowserView>
      
      </>
    );

  }





  export default NoticeDetail;