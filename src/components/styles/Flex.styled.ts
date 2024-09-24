import styled from 'styled-components';

export interface IFlexProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  textAlign?: string;
  width?: string;
  margin?: string;
}

export const Flex = styled.div<IFlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'initial'};
  align-items: ${({ alignItems }) => alignItems || 'initial'};
  text-align: ${({ textAlign }) => textAlign};
  width: ${({ width }) => width};
  margin: ${({ margin }) => margin};
`
