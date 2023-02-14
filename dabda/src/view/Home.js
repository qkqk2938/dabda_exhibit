import logo from '../image/logo/logo_mun.png'
import { useNavigate } from "react-router-dom";
import {BrowserView, MobileView} from "react-device-detect";

const Home = () => {
    const movePage = useNavigate();

    function gohome(){
      movePage('/dabda/main');
    }
    return (
      <>
      <MobileView>
        <div id = "MBmainlogodiv">
          <img id = "MBmainlogo" src ={logo} alt="logo" onClick={gohome}/>
        </div>
      </MobileView>
      
      <BrowserView>
        <div id = "mainlogodiv">
          <img id = "mainlogo" src ={logo} alt="logo" onClick={gohome}/>
        </div>
      </BrowserView>
      </>
      
    );
  };
  
  export default Home;