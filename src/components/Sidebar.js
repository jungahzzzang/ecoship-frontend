import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const SidebarLayout = styled.nav`
  overflow: hidden;
  width: 15em;
  height: 40em;
  background: var(--green);
  display: flex;
  flex-direction: column;
  border: 2px solid var(--white);
  border-radius: 1em;
  position: fixed;
  top: 80px;
  left: -15em;
  transition: 0.3s;
  z-index: 10;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const LogoBox = styled.div`
  width: 100%;
  height: 10em;
  background: thistle;
  img {
    width: 100%;
    height: 100%;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;
const SidebarBox = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 2em;
`;

const StyledLink = styled(NavLink)`
  font-size: 20px;
  color: var(--white);
  transition: 0.3s;
  :hover {
    scale: 1.2;
  }
`;

function Sidebar({handleLinkOnClick}) {
    return (
        <>
            <SidebarLayout id="sidebar">
                <LogoBox>
                    <img src='assets/image/logo/ecoship_logo.png' alt='logo' />
                </LogoBox>
                <SidebarBox>
                    <StyledLink onClick={handleLinkOnClick} to={'/'}>
                        홈
                    </StyledLink>
                    <StyledLink onClick={handleLinkOnClick} to={'/api/board'}>
                        게시판
                    </StyledLink>
                </SidebarBox>
            </SidebarLayout>
        </>
    );
}

export default Sidebar;

