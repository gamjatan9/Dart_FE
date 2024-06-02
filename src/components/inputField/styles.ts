import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { colors } from '@/styles/colorPalette';
import Text from '../Text';
import { Icon } from '..';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-top: 40px;
  flex: 1;
`;

export const Label = styled.label<{ isFocused: boolean }>`
  position: absolute;
  font-size: 24px;
  top: 0;
  ${({ isFocused }) =>
    isFocused
      ? css`
          font-size: 16px;
          top: -15px;
        `
      : null}
  transition: all 0.5s;
`;

export const Input = styled.input`
  font-size: 24px;
  padding: 10px;
  color: ${colors.white};
  border-bottom: 1px solid ${colors.white};

  // autocomplete css 속성
  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    -webkit-text-fill-color: ${colors.white};
    -webkit-box-shadow: 0 0 0px 1000px inherit inset;
    box-shadow: 0 0 0px 1000px inherit inset;
    transition: background-color 5000s ease-in-out 0s;
  }
`;

export const ErrorMessage = styled(Text)`
  position: absolute;
  bottom: -25px;
`;

export const BlindIcon = styled(Icon)`
  position: absolute;
  right: 0;
`;
