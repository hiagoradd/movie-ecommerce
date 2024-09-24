import styled from 'styled-components';

export const StyledMoviesList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 910px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
