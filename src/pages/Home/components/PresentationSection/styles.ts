import styled, { keyframes } from 'styled-components';
import { BsLinkedin } from 'react-icons/bs';

import colors from '@/styles/colors';
import dimensions from '@/styles/dimensions';

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  height: 100vh;
  justify-content: space-between;
  padding: 16px;
`;

export const ProfileImg = styled.img`
  border-radius: 213px;
  filter: drop-shadow(0px 0px 10px ${colors.yellow});
  height: 400px;
  width: 300px;
`;

export const TextName = styled.h1`
  font-family: 'Merienda-ExtraBold';
  font-size: ${dimensions.px.size42};
`;

const digital = keyframes`
  to {
    border-right-color: ${colors.yellow}aa;
  }
  from {
    border-right-color: transparent;
  }
`;
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 355px;
  }
`;
export const TextProfessional = styled.h2`
  animation:
    ${digital} 0.5s steps(40) infinite normal,
    ${typing} 4s steps(40) normal;
  border-right: ${dimensions.px.size2} solid ${colors.yellow}aa;
  color: ${colors.yellow};
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: ${dimensions.px.size32};
  font-weight: 100;
  letter-spacing: 1px;
  overflow: hidden;
  text-shadow:
    2px 2px 6px ${colors.yellow},
    2px 2px 1em ${colors.yellow},
    2px 2px 0.5em ${colors.yellow};
  white-space: nowrap;
  width: 355px;
`;

export const LinkIconContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 24px;
  margin-top: 16px;
`;

export const LinkIcon = styled.a`
  cursor: pointer;
  border-radius: ${dimensions.px.size8};
  background-color: ${colors.purple2f};
  display: flex;
  padding: ${dimensions.px.size8};

  svg {
    color: ${colors.purpleC8};
    height: ${dimensions.px.size32};
    width: ${dimensions.px.size32};
  }

  :hover {
    color: ${colors.yellow};
  }
`;

export const LinkedinIcon = styled(BsLinkedin)``;
