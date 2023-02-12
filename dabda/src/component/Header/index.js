import './style.css';
import menu from '../../image/header/menu.png'

const header = () => {
    return (
        <div id = "header">
            <div id = "headerMain" className = "headerSize"><img id = 'menuicon' src = {menu} /><h1>헤더</h1></div>

            <div id = "headerShield" className = "headerSize"></div>


        </div>
   
    );
  };
  
  export default header;