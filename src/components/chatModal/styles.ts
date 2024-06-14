import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '@/styles/colorPalette';
import { LayoutMap } from '@/styles/layout';
import { typographyMap } from '@/styles/typography';
import Icon from '../icon';

export const Container = styled.div`
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: var(--dimmed-zindex);
  display: inline-block;
  height: 96vh;
  width: 25vw;
  padding: 10px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
`;

export const Outline = styled.div`
  position: relative;
  height: 100%;
  border-radius: 10px;
  border: 2px solid ${colors.black};
`;

export const HeaderBox = styled.div`
  ${LayoutMap.displayFlex}
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid ${colors.black};

  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const rotateIcon = keyframes`
  0% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(-1);
  }
`;

export const Select = styled(Icon)<{ isActive: boolean }>`
  display: inline-block;
  margin-top: 2px;
  animation: ${(props) => props.isActive && rotateIcon} 0.5s forwards;
`;

export const Menu = styled.div`
  position: absolute;
  ${typographyMap.t5}
  width: 100%;
  padding: 20px;
  border-bottom: 1px solid ${colors.black};
  border-radius: 0px 0px 10px 10px;
  background: #f3f3f3;
  z-index: 1;
  cursor: pointer;
  &:hover {
    background: ${colors.gray200};
  }
`;

export const Content = styled.div`
  height: 100%;
`;
