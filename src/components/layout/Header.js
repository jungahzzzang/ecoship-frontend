import { useState, useEffect } from 'react';
import styled, {css} from 'styled-components';
import { Link } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import { FiMenu } from 'react-icons/fi';
import Sidebar from './Sidebar';
import logo from '../../assets/images/logo/ecoship_logo.png';

 const Header = () => {
    const [sidebar, setSidebr] = useState(false);
    const [login, setLogin] = useState("");

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

    useEffect(() => {
      try {
        if (localStorage.getItem("token") !== null) {
          setLogin(true);
          console.log("token: "+localStorage.getItem("token"));
        }else {
          setLogin(false);
        }
      } catch (error) {
        console.log("error: "+JSON.stringfy(localStorage));
      }
    }, [login]);

    return (
        <Headerbox>
          <TopNavigation>
            <Fr>
              {login? (
                <>
                 {jwt_decode(localStorage.getItem("token")).nickname}님
                </>
              ) : (
                <>
                  <LoginBtn href="/signup">회원가입</LoginBtn>
                  <LoginBtn href="/login">로그인</LoginBtn>
                </>
              )}
            </Fr>
          </TopNavigation>
          <SearchHeader>
            <SearchHeaderBar>
              <SearchHeaderLogo>
                <LogoArea to="/">
                  <Logo src={require("./ecoship_logo.png")} />
                </LogoArea>
              </SearchHeaderLogo>
              <SearchInput>
                <SearchInputForm>
                  <HeaderSearch>
                  </HeaderSearch>
                  <HeaderSearchLabel>
                    <SearchButton>
                      <IconSearch className='fa fa-search'/>
                    </SearchButton>
                  </HeaderSearchLabel>
                </SearchInputForm>
              </SearchInput>
            </SearchHeaderBar>
          </SearchHeader>
        </Headerbox>
    )
 };

 const Headerbox = styled.header`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  display: block;

  &:after {
    content: "";
    display: block;
    width: 100%;
    padding-bottom: 40px;
  }
`;

const TopNavigation = styled.div`
  border-top: 0 none;
  background: #f5f5f5;
  color: #666;
  vertical-align: middle;
  height: 32px;
  width: 100%;
`;

const InnerW = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
  align-items: center;
  height: 100%;
  justify-content: space-between;
  -webkit-box-align: center;
  display: flex;
`;

const Fr = styled.nav`
  display: block;
  float: right;
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

const SearchHeader = styled.div`
  padding: 8px 0 4px;
`;
const SearchHeaderBar = styled.div`
  width: 1056px;
  margin: 0 auto;
  position: relative;
`;
const SearchHeaderLogo = styled.h1`
  display: inline-block;
  width: 128px;
  height: 29px;
  padding: 0 27px;
  vertical-align: middle;
  margin-top: -8px;
`;

const LogoArea = styled(Link)`
  width: 74px;
  height: 29px;
  text-decoration: none;
`;
const Logo = styled.img`
  display: block;
  width: 115.5px;
  // height: 29px;
`;

const LoginBtn = styled.a`
  display: inline-block;
  vertical-align: middle;
  padding: 0 13.5px;
  font-size: 11px;
`;

const SearchInput = styled.div`
  position: relative;
  margin-right: 24px;
  margin-left: 13px;
  display: inline-block;
  vertical-align: middle;
  border: 1px solid #f1c333;
  border-radius: 4px;
  height: 40px;
`;
const SearchInputForm = styled.form`
  height: 100%;
  overflow: hidden;
  background: #ffffff;
  border-radius: 4px;
`;
const HeaderSearch = styled.input.attrs({
  placeholder: "검색어를 입력하세요.",
})`
  padding: 0;
  margin: 0;
  border: 0 none;
  text-align: left;
  text-indent: 12px;
  font-size: 14px;
  width: 285px;
  height: 36px;
  vertical-align: middle;
  line-height: 36px;
`;

const SearchRelated = styled.div`
  box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
  border-radius: 2px;
  position: absolute;
  z-index: 200;
  background: #ffffff;
  top: 39px;
  left: 0;
  right: 0;
  padding: 8px 12px 0;
  max-height: 538px;
  overflow-y: auto;
  display: none;
`;

const SearchResultUl = styled.ul`
  list-style: none;
`;

const SearchResultLi = styled.li`
  position: relative;
  cursor: pointer;
  padding: 11px 0;
  color: #333333;
  display: flex;
  align-items: center;
`;

const SearchResultKeyword = styled.span`
  list-style: none;
  // display: block;
  display: -webkit-box;
  height: 16.8px;
  font-size: 12px;
  line-height: 1.4;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 6px;
`;

const HeaderSearchLabel = styled.label`
  display: inline-block;
  width: 42px;
  height: 100%;
  font-weight: bold;
`;
const SearchButton = styled.button`
  width: 100%;
  height: 100%;
  color: #ffffff;
  border: 0 none;
  background: none;
  text-align: center;
  font-size: 16px;
  vertical-align: middle;
`;
const IconSearch = styled.i`
  color: #f1c333;
  font-size: 24px;
  line-height: 38px;
`;

 export default Header;