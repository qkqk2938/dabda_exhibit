import logo from '../image/logo/logo_mun.png'
import { useNavigate } from "react-router-dom";


const Home = () => {
    const movePage = useNavigate();

    function gohome(){
      movePage('/dabda/main');
    }
    return (
      <div id = "mainlogodiv">
        <img id = "mainlogo" src ={logo} alt="logo" onClick={gohome}/>
      </div>
    );
  };
  
  export default Home;