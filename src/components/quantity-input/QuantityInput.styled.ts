import styled from 'styled-components';
import { Flex } from '../styles/Flex.styled';
import { MOBILE_BREAKPOINT } from '../../config/contants';

export const StyledQuantityInput = styled(Flex)`
  align-items: center;
  justify-content: center;
`

export const ControlIcon = styled.img`
  cursor: pointer;
  width: 18px;
  height: 18px;
  display: block;
`

export const NumberInput = styled.input`
  width: 62px;
  height: 26px;
  margin-inline: 11px;
  border: 1px solid #D9D9D9;
  border-radius: 4px;

  @media (max-width: ${MOBILE_BREAKPOINT}) {
    width: 59px;
  }

  color: #2F2E41;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 19.07px;
  text-align: center;

  &::-webkit-inner-spin-button, 
  input[type='number']::-webkit-outer-spin-button { 
    -webkit-appearance: none;
  }

  &:focus-visible {
    border-color: #009EDD;
    outline: none;
  }
`
