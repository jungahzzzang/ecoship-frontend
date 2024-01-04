import styled from 'styled-components';
import HomeNav from './HomeNav';

const Homelayout = styled.section`
  background: var(--off-white);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

function HomeLayout() {
    return (
        <Homelayout>
          메인입니다.
        </Homelayout>
    );
}

export default HomeLayout;