import React from "react";
import { KAKAO_AUTH_URL } from "../../util/OAuth";
import kakao_login_button from "../../assets/images/login/kakao_login_button.png";

const KakaoLoginButton = () => {

    return (
        <a href={KAKAO_AUTH_URL}>
            <img src={kakao_login_button} width="200" alt="kakao"/>
        </a>
    )
}

export default KakaoLoginButton;