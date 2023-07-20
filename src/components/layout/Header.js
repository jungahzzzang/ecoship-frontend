import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Sidebar from '../layout/Sidebar';
import logo from '../../assets/images/logo/ecoship_logo.png';

const Headerbox = styled.header`
  width: 100%;
  height: 80px;
  background-color: var(--green);
  position: sticky;
  top: 0;
  z-index: 99;
  display: flex;
  justify-content: space-between;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .active {
    left: 0em;
  }
`;

const Menu = styled(FiMenu)`
  color: var(--white);
  font-size: 50px;
  margin-left: 20px;
  margin-top: 15px;
  cursor: pointer;
  opacity: 0.8;
  :hover {
    opacity: 1;
    transition: 0.4s;
  }
`;

const Logo = styled(Link)`
  color: var(--white);
  line-height: 80px;
  font-size: 30px;
  margin-left: 100px;
  cursor: pointer;
`;

const LoginArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    all: unset;
    cursor: pointer;
    border: 1px solid var(--white);
    color: var(--white);
    padding: 10px 20px;
    margin-right: 20px;
    border-radius: 5px;
    opacity: 0.8;
    :hover {
      opacity: 1;
      transition: 0.4s;
    }
  }
`;
 const Header = () => {
    const [sidebar, setSidebr] = useState(false);
    const onclickHandle = () => {
        if(!sidebar) {
            setSidebr(true);
            document.getElementById('sidebar').classList.add('active');
        } else {
            setSidebr(false);
            document.getElementById('sidebar').classList.remove('active');
        }
    };

    const onclickHandleLink = () => {
        setSidebr(false);
        document.getElementById('sidebar').classList.remove('active');
    };

    return (
        <Headerbox>
          <Menu onClick={onclickHandle} />
          <Sidebar handleLinkOnClick={onclickHandleLink} />
          <Logo to="/"><img src={logo} className='App-logo' width={160} height={40}/></Logo>
          <LoginArea>
            <>
              <Link to="/login">로그인</Link>
            </>
          </LoginArea>
        </Headerbox>
    )
 };

 export default Header;