import styled from 'styled-components';
import { WhiteBoxBlock } from '../../components/styles/WhiteBoxBlock.styled';
import { MOBILE_BREAKPOINT } from '../../config/contants';

export const StyledPurchaseSuccessfully = styled(WhiteBoxBlock)`
  max-height: calc(100vh - 255px);
  height: 100vh;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: unset;
    max-height: unset;
  }
`

export const PurchaseSuccessfullyImage = styled.img<{ width: string; }>`
  width: ${({ width }) => width};
  margin-block: 24px;
`
