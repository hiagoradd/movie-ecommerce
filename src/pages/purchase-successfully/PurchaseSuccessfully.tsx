import React from 'react';
import { Button } from '../../components/styles/Button.styled';
import { PurchaseSuccessfullyImage, StyledPurchaseSuccessfully } from './PurchaseSuccessfully.styled';
import { useNavigate } from 'react-router';
import useMobile from '../../hooks/useMobile';


export function PurchaseSuccessfully() {
  const navigate = useNavigate();
  const isMobile = useMobile();

  return (
    <StyledPurchaseSuccessfully>
      <h1>Compra realizada com sucesso!</h1>
      <PurchaseSuccessfullyImage
        width={isMobile ? '238px' : '294px'}
        src={'/assets/images/purchase-successfully-icon.png'}
      />
      <Button onClick={() => navigate('/home')} textTransform={'uppercase'}>Voltar</Button>
    </StyledPurchaseSuccessfully>
  );
}
