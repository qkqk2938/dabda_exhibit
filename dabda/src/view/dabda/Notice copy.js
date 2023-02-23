import React from 'react';
import '../../css/dabda/notice.css';
import {BrowserView, MobileView} from "react-device-detect";
import axios from 'axios';

class Notice extends React.Component {

  state = {
    gnotice: []
  }


  getNoticeList = async () => {

    const result = await axios.post('/api/notice/getNoticeList');
    const gnotice = result.data.data;
    this.setState({ gnotice });
  }

  componentDidMount() {
    this.getNoticeList();
   
  }

  render() {
    const notice = this.state.gnotice;

    return (
      <>
      <MobileView>
        <div id = "MBnoticeItems">
          <div id = "MBnoticeItem">
            <h2>NOTICE</h2>
              <table id = 'notiTable'>
                  <tr>
                    <th id = "culId">No.</th>
                    <th id = "culTitle">제목</th>
                    <th id = "culReq">작성자</th>
                  </tr>
                {notice.map((row, index) => (
                    <tr id = "row{row.id}">
                      <td className='tdId'>{row.id}. </td>
                      <td className='tdTitle'>{row.title}</td>
                      <td className='tdReq'>{row.requester}</td>
                    </tr>        
                ))}
            </table>
          </div>
        </div>
      </MobileView>
      <BrowserView>
        <div id = "noticeItems">
          <div id = "noticeItem">
            <h2>NOTICE</h2>
              <table id = 'notiTable'>
                  <tr>
                    <th id = "culId">No.</th>
                    <th id = "culTitle">제목</th>
                    <th id = "culReq">작성자</th>
                    <th id = "culReqd">작성일</th>
                    <th id = "culHit">조회</th>
                  </tr>
                {notice.map((row, index) => (
                    // <tr id = {"row"+row.id}>
                    <tr id = {"row"+row.id}>
                      <td className='tdId'>{row.id}. </td>
                      <td className='tdTitle'>{row.title}</td>
                      <td className='tdReq'>{row.requester}</td>
                      <td className='tdReqd'>{row.reqdate}</td>
                      <td className='tdHit'>{row.hit}</td>
                    </tr>        
                ))}
            </table>
          </div>
        </div>
      </BrowserView>
      
      </>
    );

  }


}


  export default Notice;