import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Header from './components/Header';
import HomeNav from './components/HomeNav';

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
   const [hello, setHello] = useState('')

    return (
        <>
          <BrowserRouter>
            <StyledApp>
              {/* <Header /> */}
              <HomeNav />
              <StyledCoontent>
                <Routes>
                  <Route path="/" element={<HomePage />}/>
                </Routes>
              </StyledCoontent>
            </StyledApp>
          </BrowserRouter>
        </>
    );
}

export default App;