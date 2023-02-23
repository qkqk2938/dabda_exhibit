import React, {useState, useEffect} from 'react';
import '../../css/dabda/noticedetail.css';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';
import { useLocation } from "react-router-dom";


const NoticeDetail = () => {
  const [notice, setState] = useState([]);

  const location = useLocation();
  const { id } = location.state;

   
  const getNoticeDetail = async () => {
    console.log(id);
    const result = await axios.post('/api/notice/getNoticeDetail/'+id);
    setState(result.data.data[0]);
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
          </div>
        </div>
      </BrowserView>
      
      </>
    );

  }





  export default NoticeDetail;