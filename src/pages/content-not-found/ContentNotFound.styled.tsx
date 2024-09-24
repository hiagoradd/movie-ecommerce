import styled from 'styled-components';
import { WhiteBoxBlock } from '../../components/styles/WhiteBoxBlock.styled';
import { MOBILE_BREAKPOINT } from '../../config/contants';

export const StyledContentNotFound = styled(WhiteBoxBlock)`
  max-height: calc(100vh - 255px);
  height: 100vh;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    height: unset;
    max-height: unset;
    h1 {
      max-width: 200px;
    }
  }
`

export interface IContentNotFoundImageProps {
  width: string;
}

export const ContentNotFoundImage = styled.img<IContentNotFoundImageProps>`
  width: ${({ width }) => width};
  margin-block: 24px;
`
