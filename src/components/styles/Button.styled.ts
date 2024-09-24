import styled from 'styled-components';

export interface IButtonProps {
  width?: string;
  backgroundColor?: string;
  hoverColor?: string;
  textTransform?: string;
}

export const Button = styled.button<IButtonProps>`
  color: #fff;
  background: ${({ backgroundColor }) => backgroundColor || '#009EDD'};
  text-transform: ${({ textTransform }) => textTransform};
  height: 40px;
  width: ${({ width }) => width || '173px'};
  border-radius: 4px;
  padding-inline: 10px;
  text-align: center;
  outline: none;

  font-size: 12px;
  font-weight: 700;
  line-height: 16.34px;

  appearance: none;
  border: unset;

  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${({ hoverColor }) => hoverColor || '#0080b3'};
  }
`
