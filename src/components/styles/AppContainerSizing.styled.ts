import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../config/contants';

export const AppContainerSizing = styled.div`
  max-width: 1080px;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  flex-direction: column;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    max-width: 100%;
    padding-inline: 16px;
  }
`