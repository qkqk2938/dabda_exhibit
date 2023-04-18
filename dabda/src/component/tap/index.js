import './style.css';
import logo_mun from '../../image/logo/logo_mun.png'
// import ungsungMain from '../../image/p1/ungsungMain.jpeg'
import m1 from '../../image/p1/m1.jpg'
import m2 from '../../image/p1/m2.jpg'
import m3 from '../../image/p1/m3.jpg'
import m4 from '../../image/p1/m4.jpg'
import m5 from '../../image/p1/m5.jpg'
import Mm3 from '../../image/p1/Mm3.jpg'
import Mm4 from '../../image/p1/Mm4.jpg'
import Mm5 from '../../image/p1/Mm5.jpg'

import { useNavigate } from "react-router-dom";


const Main0 = () => {
    return (
        <div id = "tapBody">
            <div id = "main1Body">
                <div id = "main1Row">
                    <div id = "logoBox"><img id = "logo_mun" src = {logo_mun} alt="logo_mun"/></div>
                    <div id = "mainDesc">
                        <p>
                            결핍의 잔여감을 사랑으로 채운 나다운 모습을 사랑합니다.<br/>
                            다양한 형태와 오브제로 답다의 철학을 나타냅니다.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Main1 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "main1Body">
             <img id = "m1" src = {m1} alt="m1"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};
  


const Main2 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "main2Body">
             <img id = "m2" src = {m2} alt="m2"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};

const Main3 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            
            <div id = "main3Body">
             <img id = "m3" src = {m3} alt="m3"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};

const Main4 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
        <div id = "main4Body">
            
            <img id = "m4" src = {m4} alt="m4"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
        </div>
        </div>
    );
};

const Main5 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "main5Body">
             <img id = "m5" src = {m5} alt="m5"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};

const MMain1 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "Mmain1Body">
             <img id = "Mm1" src = {m1} alt="m1"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};

const MMain2 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "Mmain2Body">
             <img id = "Mm2" src = {m2} alt="m2"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
              
            </div>
        </div>
    );
};
const MMain3 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "Mmain3Body">
             <img id = "Mm3" src = {Mm3} alt="m3"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};

const MMain4 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
        <div id = "Mmain4Body">
            <img id = "Mm4" src = {Mm4} alt="m4"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
        </div>
        </div>
    );
};

const MMain5 = () => {
    const movePage = useNavigate();
    
    function goShop(){
        movePage('/redirect', { state: { url: "https://smartstore.naver.com/dabda25" } });
    }
    return (
        <div id = "tapBody">
            <div id = "Mmain5Body">
             <img id = "Mm5" src = {Mm5} alt="m5"/>
             <div id = "goShop" onClick={goShop}> 온라인샵가기 </div>
            </div>
        </div>
    );
};


export {Main0,Main1,Main2,Main3,Main4,Main5,MMain1,MMain2,MMain3,MMain4,MMain5};