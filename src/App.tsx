import React from 'react';
import HeaderNav from './components/header-nav/HeaderNav';
import { GlobalStyles } from './themes/GlobalStyles';
import { AppContainerSizing } from './components/styles/AppContainerSizing.styled';
import { ContentNotFound } from './pages/content-not-found/ContentNotFound';
import { PurchaseSuccessfully } from './pages/purchase-successfully/PurchaseSuccessfully';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProductList } from './pages/movies-list/MoviesList';
import MoviesCart from './pages/movies-cart/MoviesCart';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <BrowserRouter>
        <AppContainerSizing>
        <HeaderNav />
          <Routes>
            <Route path="/home" element={<ProductList />} />
            <Route path="/cart" element={<MoviesCart />} />
            <Route path="/purchase-success" element={<PurchaseSuccessfully />} />
            <Route path="/not-found" element={<ContentNotFound />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </Routes>
        </AppContainerSizing>
      </BrowserRouter>
    </div>
  );
}

export default App;
