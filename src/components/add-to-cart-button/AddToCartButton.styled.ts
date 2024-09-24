import styled from 'styled-components';
import { Button } from '../styles/Button.styled';

interface StyledAddToCartButtonProps {
  theme: 'blue' | 'green';
}

export const StyledAddToCartButton = styled(Button)<StyledAddToCartButtonProps>`
  width: 100%;
  text-transform: uppercase;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${({ theme }) => (theme === 'blue' ? '#009EDD' : '#039B00')};

  &:hover {
    background: ${({ theme }) => (theme === 'blue' ? '#0080b3' : '#028000')};
  }
  
  img {
    /* display: block; */
    width: 13.5px;
    padding-right: 3.4px;
    /* position: relative; */
    /* margin-top: 1px; */
  }
  span {
    margin-right: 12px;
    font-weight: 400;
  }
`
