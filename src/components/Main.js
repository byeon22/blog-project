import React from "react";
import { useNavigate } from "react-router-dom";
import { styled, createGlobalStyle } from "styled-components";

// 왜 GlobalStyle을 적용해야 전체 화면으로 작동할까..?
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    background-color: #F6F6F6;
  }
`;

const MainPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;


function Main() {

    const movePage = useNavigate();

    function goblog() {
        movePage('/Myblog');
    }

    return (
        <>
            <GlobalStyle />

            <MainPage>
                <img
                    src="https://www.nicepng.com/png/detail/232-2326770_icon-blogger-logo-now-creative-group-logo.png"
                    alt="blog logo"
                />
            <div>
                <input type="text"></input>
                <input type="password"></input>
                <button onClick={goblog}>로그인</button>
                <button>회원가입</button>
            </div>
        
            </MainPage>
        </>
    );
}

export default Main;
