import { useCallback } from "react";
import Container from "../../components/layout/Container";
import KakaoLoginButton from "../../components/login/KakaoLoginButton";
import NaverLoginButton from "../../components/login/NaverLoginButton";

const LoginPage = () => {

    return (
        <>
            <Container name="로그인">
                <KakaoLoginButton />
                <NaverLoginButton />
            </Container>
        </>
    )
};

export default LoginPage;