import React from "react";
import { NAVER_AUTH_URL } from "../../util/OAuth";
import naver_login_button from "../../assets/images/login/naver_login_button.png";

const NaverLoginButton = () => {

    return (
        <a href={NAVER_AUTH_URL}>
            <img src={naver_login_button} width="200" alt="naver"/>
        </a>
    )
}

export default NaverLoginButton;