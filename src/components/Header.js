import { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';


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
  @font-face {
    font-family: 'BMEuljiro10yearslater';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/BMEuljiro10yearslater.woff') format('woff');
    font-weight: normal;
    font-style: normal;
  }
  font-family: 'BMEuljiro10yearslater';
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
            <Menu onClick={onclickHandle}/>
            <Sidebar handleLinkOnClick={onclickHandleLink} />
            {/* <Logo to="/">ecoship</Logo> */}
        </Headerbox>
    )
 };

 export default Header;