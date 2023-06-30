import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';

const Homenavbox = styled.div`
  background: var(--white);
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 15px;
  }
`;
const StyledLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 15px;
  padding-bottom: 5px;
  border-bottom: 3px solid var(--brown);
  p {
    font-size: 20px;
  }
  .icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--brown);
    transition: 0.3s;
    :hover {
      background: var(--light-brown);
      scale: 1.2;
    }
  }
  .navicon {
    font-size: 50px;
  }
  @media (max-width: 1199px) {
    p {
      font-size: 18px;
    }
    .icon {
      width: 80px;
      height: 80px;
    }
    .navicon {
      font-size: 40px;
    }
    margin: 10px;
  }
  @media (max-width: 991px) {
    p {
      font-size: 16px;
    }
    .icon {
      width: 60px;
      height: 60px;
    }
    .navicon {
      font-size: 30px;
    }
    margin: 5px;
  }
  @media (max-width: 768px) {
    p {
      font-size: 14px;
    }
    .icon {
      width: 50px;
      height: 50px;
    }
    .navicon {
      font-size: 20px;
    }
    margin: 0px;
  }
`;

function HomeNav () {
    return (
        <Homenavbox>
            <StyledLink >
                <div>
                    <FiPackage className='navicon' color={'var(--white)'} />
                    <p>전체</p>
                </div>
            </StyledLink>
        </Homenavbox>
    )
}

export default HomeNav;