import styled from 'styled-components';
import dimensions from '@/styles/dimensions';

export const Root = styled.div`
  align-items: center;
  display: flex;
  gap: ${dimensions.px.size24};
  justify-content: center;
  overflow: hidden;
  width: ${dimensions.per.fullSize};
`;

export const Title = styled.h1`
  font-family: 'LXGWWenKaiTC-Bold';
  font-size: ${dimensions.px.size42};
`;
