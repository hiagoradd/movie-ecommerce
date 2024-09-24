import React from 'react';
import { StyledAddToCartButton } from './AddToCartButton.styled';
import { Flex } from '../styles/Flex.styled';

export interface IAddToCartButtonProps {
  value: number;
  onClick: () => void;
  children: React.ReactNode;
}

export function AddToCartButton(props: IAddToCartButtonProps) {
  const { value, children, onClick } = props;

  return (
    <StyledAddToCartButton onClick={onClick} theme={value > 0 ? 'green' : 'blue'}>
      <Flex>
        <img alt={'cart'} src={'assets/images/add-shopping-cart-icon.svg'} />
        <span>{value}</span>
      </Flex>
      <div>{children}</div>
    </StyledAddToCartButton>
  );
}
