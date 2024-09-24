import styled from 'styled-components';

export interface IMovieImageProps {
  width: string;
}

export const MovieImage = styled.img`
  width: ${({ width }) => width}
`
