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
// import p1_m3_1 from '../../image/p1/p1_m3_1.JPG'
// import p1_m3_3 from '../../image/p1/p1_m3_3.JPG'
// import p1_m3_4 from '../../image/p1/p1_m3_4.jpg'
// import p1_m3_5 from '../../image/p1/p1_m3_5.JPG'
// import p1_m5_1 from '../../image/p1/p1_m5_1.JPG'
// import p1_m5_2 from '../../image/p1/p1_m5_2.JPG'

const Main1 = () => {
    return (
        <div id = "tapBody">
            <div id = "main1Body">
             <img id = "m1" src = {m1} alt="m1"/>
                {/* <div id = "main0Row">
                    <div id = "mainImgBox"><img id = "ungsungMain" src = {ungsungMain} alt="ungsungMain"/></div>
                    <div id = "mainTitle">
                        엉<br/>성
                    </div>
                    <div id = "subTitle">
                     온라인<br/>전시회

                    </div>
                </div> */}
            </div>
        </div>
    );
};
  
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

const Main2 = () => {
    return (
        <div id = "tapBody">
            <div id = "main2Body">
             <img id = "m2" src = {m2} alt="m2"/>

                {/* <div id = "projectNo">답다 프로젝트01</div>
                <div id = "projectTitle">엉 성</div>
                <div id = "description">
                    <p>
                        답다의 첫번째 프로젝트 엉성입니다.<br/>
                        결핍의 잔여감으로 허공에 빠지는 이들에게<br/>
                        은폐되고 포장되어 허무에 빠지는 이들에게<br/>
                        존재 자체로 사랑스럽다 말해주고 싶었습니다.<br/>
                        엉성한 저희집 고양이는 매번 행복해보입니다.<br/>
                        온종일 눈 껌벅이며 창문만 바라보는데도요.<br/>
                        <br/>
                        당신 또한 엉성하지만 너무나 사랑스럽습니다.<br/>
                        은폐되어 허공을 맴돌고 있는 당신의 결핍들을<br/>
                        위로하고 안아주세요 당신답게 함양되길 바랍니다.<br/>
                    </p>
                </div> */}
            </div>
        </div>
    );
};

const Main3 = () => {
    return (
        <div id = "tapBody">
            
            <div id = "main3Body">
             <img id = "m3" src = {m3} alt="m3"/>
                {/* <div id = "main3Row">
                    <div id = "row_1c" className='main3row1'><img id = "p1_m3_1" className='main3row1img' src = {p1_m3_1} alt="p1_m3_1"/></div>
                    <div id = "row_2c" className='main3row1'><img id = "p1_m3_1_2" className='main3row1img' src = {p1_m3_1} alt="p1_m3_1"/></div>
                </div>
                <div id = "m3description">
                    <p>
                        모든 현존은 불충분하다.<br/>
                        채워지지 않는 잔여감에 외로이 먹먹히 떠나니지 않았으면,단순히 쾌락에 의지하지 말며 나 자신을 위로하며 함양하였으면,
                    </p>
                </div>
                <div id = "main3Row2">
                    <div id = "row2_1c" className='main3row2'><img id = "p1_m3_2" className='main3row1img' src = {ungsungMain} alt="p1_m3_2"/></div>
                    <div id = "row2_2c" className='main3row2'><img id = "p1_m3_2_2" className='main3row1img' src = {p1_m3_3} alt="p1_m3_3"/></div>
                    <div id = "row2_3c" className='main3row2'><img id = "p1_m3_2_4" className='main3row1img' src = {p1_m3_5} alt="p1_m3_5"/><img id = "p1_m3_2_3" className='main3row1img' src = {p1_m3_4} alt="p1_m3_4"/></div>
    
                </div> */}
            </div>
        </div>
    );
};

const Main4 = () => {
    return (
        <div id = "tapBody">
        <div id = "main4Body">
            
            <img id = "m4" src = {m4} alt="m4"/>
        </div>
        </div>
    );
};

const Main5 = () => {
    return (
        <div id = "tapBody">
            <div id = "main5Body">
                
             <img id = "m5" src = {m5} alt="m5"/>
                {/* <div id = "main5Row">
                    <div id = "m5_row_1c" className='main5row1'><img id = "p1_m5_1" className='main5row1img' src = {p1_m5_1} alt="p1_m5_1"/></div>
                    <div id = "m5_row_2c" className='main5row1'><img id = "p1_m5_2" className='main5row1img' src = {p1_m5_2} alt="p1_m5_2"/></div>
                </div>
                <div id = "m5description">
                    <p>
                        포장되어 허공에 떠나니는 나의 것들을<br/>
                        대면하여 위로하고 사랑하여 주세요.<br/>
                        당신은 충분히 당신답게 아름답습니다.
                    </p>
                </div> */}
            </div>
        </div>
    );
};

const MMain1 = () => {
    return (
        <div id = "tapBody">
            <div id = "Mmain1Body">
             <img id = "Mm1" src = {m1} alt="m1"/>
          
            </div>
        </div>
    );
};

const MMain2 = () => {
    return (
        <div id = "tapBody">
            <div id = "Mmain2Body">
             <img id = "Mm2" src = {m2} alt="m2"/>

              
            </div>
        </div>
    );
};
const MMain3 = () => {
    return (
        <div id = "tapBody">
            
            <div id = "Mmain3Body">
             <img id = "Mm3" src = {Mm3} alt="m3"/>
         
            </div>
        </div>
    );
};

const MMain4 = () => {
    return (
        <div id = "tapBody">
        <div id = "Mmain4Body">
            
            <img id = "Mm4" src = {Mm4} alt="m4"/>
        </div>
        </div>
    );
};

const MMain5 = () => {
    return (
        <div id = "tapBody">
            <div id = "Mmain5Body">
                
             <img id = "Mm5" src = {Mm5} alt="m5"/>
            
            </div>
        </div>
    );
};


export {Main0,Main1,Main2,Main3,Main4,Main5,MMain1,MMain2,MMain3,MMain4,MMain5};