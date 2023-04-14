import './style.css';
import logo_mun from '../../image/logo/logo_mun.png'
import ungsungMain from '../../image/p1/ungsungMain.jpg'

const Main0 = () => {
    return (
        <div id = "tapBody">
            <div id = "main0Body">
                <div id = "main0Row">
                    <div id = "mainImgBox"><img id = "ungsungMain" src = {ungsungMain} alt="ungsungMain"/></div>
                    <div id = "mainTitle">
                        엉<br/>성
                    </div>
                    <div id = "subTitle">
                     온라인<br/>전시회

                    </div>
                </div>
            </div>
        </div>
    );
};
  
const Main1 = () => {
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
                <div id = "projectNo">답다 프로젝트01</div>
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
                </div>
            </div>
        </div>
    );
};

const Main3 = () => {
    return (
        <div id = "tapBody">
            3
        </div>
    );
};

const Main4 = () => {
    return (
        <div id = "tapBody">
            4
        </div>
    );
};

const Main5 = () => {
    return (
        <div id = "tapBody">
            5
        </div>
    );
};

export {Main0,Main1,Main2,Main3,Main4,Main5};