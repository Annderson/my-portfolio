import styled from 'styled-components';

import colors from '@/styles/colors';
import dimensions from '@/styles/dimensions';

export const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  max-width: 1024px;
  margin: 0 auto;
  height: auto;
  margin-bottom: 52px;
  overflow-x: hidden;
`;

export const Header = styled.div`
  align-items: center;
  background-color: #00000099;
  box-shadow: 0px 0px 4px 2px ${colors.purple};
  display: flex;
  height: ${dimensions.px.size80};
  justify-content: space-between;
  padding: 0 24px;
  position: fixed;
  top: 0;
  left: 0;
  width: ${dimensions.per.fullSize};
  z-index: 2;
`;

export const LogoImg = styled.img`
  box-shadow: 0 0 36px 4px ${colors.purple};
  border-radius: 62px;
  cursor: pointer;
  height: 45px;
  width: 50px;

  &:hover {
    box-shadow: 0 0 16px 1px ${colors.red};
  }
`;

export const Menu = styled.div`
  display: flex;
  gap: ${dimensions.px.size32};
`;

export const MenuItem = styled.a`
  cursor: pointer;
  color: ${colors.white};
  font-family: 'LXGWWenKaiTC-Bold';
  font-size: ${dimensions.px.size22};

  &:hover {
    text-decoration: underline;
  }
`;

export const TestContainer = styled.div`
  background-color: aliceblue;
  height: 400px;
  margin: 0 auto;
  margin-top: 40px;
  width: 400px;
`;

export const Test2 = styled.div`
  background-color: aliceblue;
  height: 100%;
  width: 100%;
`;

export const Test = styled.div`
  background-color: aliceblue;
  clip-path: polygon(
    100% 0%,
    98.138% 0%,
    98.138% 0%,
    92.871% 2.8%,
    88.093% 10.4%,
    83.687% 21.6%,
    79.538% 35.2%,
    75.528% 50%,
    71.541% 64.8%,
    67.461% 78.4%,
    63.172% 89.6%,
    58.556% 97.2%,
    53.497% 100%,
    0% 100%,
    0% 0%,
    100% 0%
  );
  height: 100px;
  width: 97%;
`;
