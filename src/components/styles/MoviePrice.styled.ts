import styled from 'styled-components';

export interface IMoviePriceProps {
  fontSize?: string;
  margin?: string;
}

export const MoviePrice = styled.span<IMoviePriceProps>`
  font-size: ${({ fontSize }) => fontSize || '16px'};
  margin: ${({ margin }) => margin};
  font-weight: 700;
  line-height: 21.79px;
  color: #2F2E41;

  &::before {
    content: 'R$ ';
  }
`