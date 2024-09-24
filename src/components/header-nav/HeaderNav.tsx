import React from 'react';
import { StyledHeaderCartMenu, StyledHeaderNav, CartItemCount, CartIcon } from './HeaderNav.styled';
import { useSelector } from 'react-redux';
import { IRootState } from '../../config/reducers';
import { useNavigate } from 'react-router-dom';
import useMobile from '../../hooks/useMobile';

export default function HeaderNav() {
  const isMobile = useMobile();
  const { count } = useSelector((store: IRootState) => ({
    count: store.totalCart
  }));
  const navigate = useNavigate();
  const handleGoToCart = () => {
    navigate('/cart');
  };
  const handleGoToHome = () => {
    navigate('/home');
  };
  return (
    <StyledHeaderNav>
      <h1 onClick={() => handleGoToHome()}>WeMovies</h1>
      <StyledHeaderCartMenu>
        <div>
          {!isMobile && 'Meu carrinho'}
          <CartItemCount>{count === 1 ? '1 item' : `${count} itens`}</CartItemCount>
        </div>
        <CartIcon isMobile={isMobile} onClick={() => handleGoToCart()} src={'/assets/images/cart-icon.svg'} />
      </StyledHeaderCartMenu>
    </StyledHeaderNav>
  );
}
