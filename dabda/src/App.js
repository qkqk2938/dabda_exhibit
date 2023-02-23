import { Route, Routes,  Outlet } from 'react-router-dom';
import Main from './view/dabda/Main';
import Push from './view/dabda/Push';
import Noti from './view/dabda/Notice';
import NoticeDetail from './view/dabda/NoticeDetail';
import NoticeInsert from './view/dabda/NoticeInsert';
import Home from './view/Home';
import Redirect from './Redirect';

import './css/App.css';



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dabda" element={<User />} >
          <Route path="main" element={<Main />} />
          <Route path="push" element={<Push />} />
          <Route path="notice" element={<Noti />} />
          <Route path="noticedetail" element={<NoticeDetail />} />
          <Route path="noticeinsert" element={<NoticeInsert />} />
        </Route>
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </div>
  );
}

function User() {
  return (
    <>
      <Outlet />
    </>
  )
}


export default App;