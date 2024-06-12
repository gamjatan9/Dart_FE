import { LayoutMap } from '@/styles/layout';
import styled from '@emotion/styled';

export const Container = styled.div`
  ${LayoutMap.displayFlex}
  width: 1440px;
  height: fit-content;
  flex-direction: column;
  padding: 0 80px;
  margin: auto;
`;
