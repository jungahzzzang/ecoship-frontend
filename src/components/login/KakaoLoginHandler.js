import axios from "axios"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { KAKAO_REDIRECT_URL } from "../../util/OAuth";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const KakaoLoginHandler = (props) => {

    const navigate = useNavigate();
    const code = new URL(window.location.href).searchParams.get('code');

    useEffect(() => {
        const kakaoLogin = async () => {
            await axios ({
                method:"GET",
                url: `${KAKAO_REDIRECT_URL}?code=${code}`,
                headers: {
                    "Content-Type": "application/json;charset=utf-8", //JSON 형태로 데이터를 보내겠다는 뜻
                },
            }).then((res) => {  //백에서 완료 후 토큰 넘기기 성공 시
                    console.log(res);
                    //계속 쓸 정보들 (ex: 이름)은 localStorage에 저장
                    localStorage.setItem("token", res.headers.authorization);
                    //로그인 성공 시 이동할 페이지
                    navigate("/");
                })
            kakaoLogin();
        }
    },[props.history]);

    return (
        <>
            <Container></Container>
        </>
    )
}

export default KakaoLoginHandler;