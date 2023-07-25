import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/layout/Header';
import LoginPage from './page/member/LoginPage';
import KakaoLoginHandler from './components/login/KakaoLoginHandler';
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

    return (
        <>
          <BrowserRouter>
            <StyledApp>
              <Header />
              <StyledCoontent>
                <Routes>
                  <Route path="/" element={<HomePage />}/>
                  <Route path="/login" element={<LoginPage />}/>
                  <Route path="/login/oauth/kakao/callback" element={<KakaoLoginHandler/>}/>
                </Routes>
              </StyledCoontent>
            </StyledApp>
          </BrowserRouter>
        </>
    );
}

export default App;