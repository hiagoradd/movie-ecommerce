import styled from 'styled-components';
import { MOBILE_BREAKPOINT } from '../../config/contants';

export const StyledPreLoader = styled.div`
  width: 83px;
  height: 83px;
  transform: translateX(-50%);
  margin: 0 auto;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    transform: unset;
  }

  img {
    width: 83px;
    animation: spin 1s linear infinite;
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
`
