import { Route, Routes,  Outlet } from 'react-router-dom';
import Ac from './view/Ac';
import Home from './view/Home';
import Header from './component/Header';

import './css/App.css';



function App() {
  return (
    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="ac" element={<User />} >
          <Route path="acc" element={<Ac />} />
        </Route>

      </Routes>
    </div>
  );
}

function User() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}


export default App;