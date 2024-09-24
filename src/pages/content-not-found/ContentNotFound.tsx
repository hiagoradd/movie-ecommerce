import React from 'react';
import { StyledContentNotFound, ContentNotFoundImage } from './ContentNotFound.styled';
import { Button } from '../../components/styles/Button.styled';
import { useNavigate, useLocation } from 'react-router';
import useMobile from '../../hooks/useMobile';

export function ContentNotFound() {
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useMobile();
  const reloadPage = () => {
    window.location.reload();
  };
  const ReloadButton = () => (
    <Button onClick={() => reloadPage()}>Recarregar página</Button>
  );
  const GoToHomeButton = () => (
    <Button onClick={() => navigate('/home')}>Voltar para a Home</Button>
  );

  return (
    <StyledContentNotFound>
      <h1>Parece que não há nada por aqui :(</h1>
      {isMobile ? <ContentNotFoundImage width='178.63px' src={'/assets/images/content-not-found-icon-mobile.png'} /> :
      <ContentNotFoundImage width='447px' src={'/assets/images/content-not-found-icon.png'} />}
      {location.state.goBackToHome ? <GoToHomeButton /> : <ReloadButton />}
    </StyledContentNotFound>
  );
}
