import { BrowserRouter, Route, Routes} from 'react-router-dom';
import React, {Suspense, useState} from 'react';
import styled from 'styled-components';
import Header from './components/layout/Header';
import LoginPage from './page/member/LoginPage';
import KakaoLoginHandler from './shared/KakaoLoginHandler';
import HomePage from './page/HomePage';

const StyledApp = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0e9df;
`;

const StyledCoontent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

function App() {
  
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState(null);
  const[accessToken, setAccessToken] = useState("");
  //const navigate = useNavigate();

  return (
      <BrowserRouter>
        <Suspense fallback={<div></div>}>
          <StyledApp>
            <Header />
            <StyledCoontent>
              <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/login" element={<LoginPage />}/>
                <Route path="/user/kakao/callback" element={<KakaoLoginHandler/>}/>
              </Routes>
            </StyledCoontent>
          </StyledApp>
        </Suspense>
      </BrowserRouter>
  );
}

export default App;