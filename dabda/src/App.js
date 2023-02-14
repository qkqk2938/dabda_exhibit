import { Route, Routes,  Outlet } from 'react-router-dom';
import Main from './view/dabda/Main';
import Push from './view/dabda/Push';
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