import { Route, Routes,  Outlet } from 'react-router-dom';
import Main from './view/dabda/Main';
import Header from './component/Header';
// import Push from './view/dabda/Push';
// import Noti from './view/dabda/Notice';
// import Book from './view/dabda/Book';
// import NoticeDetail from './view/dabda/NoticeDetail';
// import NoticeInsert from './view/dabda/NoticeInsert';
// import Home from './view/Home';
import Redirect from './Redirect';

import './css/App.css';



function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<MainForm />} >
          <Route path="" element={<Main />} />
        </Route>
        {/* <Route path="dabda" element={<MainForm />} >
          <Route path="main" element={<Main />} />
          <Route path="push" element={<Push />} />
          <Route path="notice" element={<Noti />} />
          <Route path="book" element={<Book />} />
          <Route path="noticedetail" element={<NoticeDetail />} />
          <Route path="noticeinsert" element={<NoticeInsert />} />
        </Route> */}
        <Route path="/redirect" element={<Redirect />} />
      </Routes>
    </div>
  );
}

function MainForm() {
  return (
    <>
      <Header/>
      <Outlet />
    </>
  )
}


export default App;