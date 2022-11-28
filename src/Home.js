import React, { useEffect, useState } from "react";
import "./Home.css";
import { Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = (props) => {
  // console.log("home.js에서 props.postitValue : ", props.postitValue) //전달 성공 ㅎㅎ
  // console.log("home.js에서 props.themeValue : ", props.themeValue)
  const [letterColor, setLetterColor] = useState("white");
  const [leftBorderStyle, setLeftBorderStyle] = useState("1px solid" + props.leftValue);
  const [rightBorderStyle, setRightBorderStyle] = useState("1px solid" + props.rightValue);
  const [borderDotStyle, setBorderDotStyle] = useState("1px dashed white"); //dot

  useEffect(() => {
    if (props.postitValue !== "#298FA6") {
      setLetterColor("black");
    } else {
      setLetterColor("white");
    }
    setLeftBorderStyle("1px solid " + props.leftValue);
    setRightBorderStyle("1px solid " + props.rightValue);
  }, [props]);

    //nickname, boyImg, girlImg 가져오기
    const localData = JSON.parse(localStorage.getItem("user"));
    const nowID = JSON.parse(window.sessionStorage.getItem("loginId"));
    const loggedInData = localData.filter(user => user.id === nowID);
    
    //닉네임 가져오기
    const userNickName = loggedInData[0].nickName;
    //남자 이미지 가져오기
    const boyImg = loggedInData[0].boyImgUrl;
    //여자 이미지 가져오기
    const girlImg = loggedInData[0].girlImgUrl;

  return (
    <>
      <div className="bookcover">
        <div className="bookcover-container">
          <div className="bookcover-left" style={{ background: props.leftValue, border: leftBorderStyle }}>
            <div className="bookcover-left-dot">
              <div className="bookcover-left-white">
                <div className="bookcover-left-content">
                  <div className="userImg-container">
                    <div className="userImg">
                      <img className="boyImg" src={boyImg}></img>
                      <div className="connect-container">
                        <div className="connect"></div>
                        <div className="connect"></div>
                        <div className="connect"></div>
                      </div>
                      <img className="girlImg" src={girlImg}></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bookcover-right" style={{ background: props.rightValue, border: rightBorderStyle }}>
            <div className="bookcover-right-dot">
              <div className="bookcover-right-white">
                <div className="couple-name">{userNickName} 의 홈피</div>
                <div className="bookcover-right-content">
                  <Outlet />
                </div>
              </div>

              <div className="menu">
                <div className="menu-container">
                  <Link style={{ background: props.postitValue, color: letterColor }} to="/home">
                    메인
                  </Link>
                  <Link style={{ background: props.postitValue, color: letterColor }} to="/home/photo">
                    사진
                  </Link>
                  {/* <Link style={{ background: props.postitValue, color: letterColor }} to="/home/friend">
                    친구
                  </Link> */}
                  <Link style={{ background: props.postitValue, color: letterColor }} to="/home/anniversary">
                    기념일
                  </Link>
                  <Link style={{ background: props.postitValue, color: letterColor }} to="/home/setting">
                    설정
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
