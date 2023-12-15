import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { KAKAO_BACK_REDIRECT_URL, KAKAO_REDIRECT_URL } from "../util/OAuth";
import axios from 'axios';
//const axios = require('axios');

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

function KakaoLoginHandler() {

    const navigate = useNavigate();
    const authorization_code = new URL(window.location.href).searchParams.get('code');
    console.log("KAKAO_CODE", authorization_code)

    useEffect(() => {
        const kakaoLogin =  async () => {

            ////////////////////////////////////////////
            //// 백엔드로부터 인가코드 넘기고 jwt 토큰 받기
            ///////////////////////////////////////////
    
            try {
                await axios({
                    method: "GET",
                    url: `${KAKAO_BACK_REDIRECT_URL}?code=${authorization_code}`, 
                }).then((res) => {  //백엔드 완료 후 토큰 넘겨주기 성공 시
                    console.log("응답 확인", res);
                    //const accessToken = res.headers.get("Authorization");
                    const accessToken = res.headers.authorization;
                    const refreshToken = res.headers['refresh-token'];
        
                    window.localStorage.setItem('access-token',accessToken);
                    window.localStorage.setItem('refresh-token',refreshToken);
                    //navigate('/', {replace: true});
                    // if(res.data.data.login === true) {
                    //     navigate('/', {replace: true});
                    // }

                    if (res.data.success === true) {
                        navigate('/', {replace: true});
                    }
                    if (res.data.success === false) {
                        window.alert("아이디 혹은 패스워드를 확인해주세요.");
                         navigate("/login");
                    }
                    
                });
    
            } catch(e) {
                console.log(e);
                window.alert("아이디 혹은 패스워드를 확인해주세요.");
                navigate("/login");
                return;
            }
        };

        kakaoLogin();
    },[]);

    return (
        <>
            <Container>로그인 중입니다. 잠시만 기다려주세요.</Container>
        </>
    )
}

export default KakaoLoginHandler;