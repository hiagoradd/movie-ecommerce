import styled from 'styled-components';
import { WhiteBoxBlock } from '../../components/styles/WhiteBoxBlock.styled';
import { MOBILE_BREAKPOINT } from '../../config/contants';
import { Flex } from '../../components/styles/Flex.styled';
import { Button } from '../../components/styles/Button.styled';
import { MoviePrice } from '../../components/styles/MoviePrice.styled';

export const StyledMoviesCart = styled(WhiteBoxBlock)`
  width: unset;
  padding: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    padding: 16px;
    ${MoviePrice} {
      width: max-content;
    }
  }
`

export const CartTableRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  > div {
    &:nth-child(1) {
      width: 28%;
    }
    &:nth-child(2) {
      width: 34.8%;
    }
    &:nth-child(3) {
      width: 37.2%;
    }
  }

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    > div {
      &:nth-child(1) {
        width: unset;
      }
      &:nth-child(2) {
        width: unset;
      }
      &:nth-child(3) {
        width: unset;
      }
    }
  }
`

export const StyledCartTableHeader = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  div {
    font-size: 14px;
    font-weight: 700;
    line-height: 19.07px;
    text-align: left;
    color: #999999;
    text-transform: uppercase;
  }
`

export const StyledCartTableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-top: 24px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-top: 0;
  }

  ${CartTableRow} {
    margin-bottom: 24px;
    > div {
      &:nth-child(1) {
        display: flex;
        flex-direction: row;
      }
    }
    text-align: left;
  }
`

export const CartMovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 16px;
`

export const StyledCartFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 24px;
  border-top: 1px solid #999999;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 100%;
    flex-direction: column-reverse;
    padding-top: 21px;
    align-items: center;
    
    ${Flex} {
      width: 100%;
      justify-content: space-between;
      margin-bottom: 16px;      
    }

    ${Button} {
      max-width: 400px;
      width: 100%;
      font-size: 14px;
    }
  }
`

export const SubTotalText = styled.span`
  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;
  color: #999999;
  text-transform: uppercase;
`

export const TotalText = styled.span`
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  text-align: center;
  color: #999999;
`

export const DeleteCartButton = styled.img`
  cursor: pointer;
  width: 24px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-left: 16px;
  }
`

export const CartMovieImage = styled.img`
  width: 91px;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-right: 16px;
    width: 64px;
  }
`

export const CartMovieTitle = styled.div`
  font-size: 14px;
  font-weight: 700;
  line-height: 19.07px;
  color: #2F2E41;
  @media (max-width: ${MOBILE_BREAKPOINT}) {
    margin-right: 16px;
  }
`