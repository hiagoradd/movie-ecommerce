import React from 'react';
import { StyledPreLoader } from './PreLoader.styled';

export function PreLoader() {
  return (
    <StyledPreLoader>
      <img alt={'loading...'} src={'/assets/images/load-spinner.png'} />
    </StyledPreLoader>
  );
}