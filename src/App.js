import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Contact, Trade, Catalog, NotFound, Details, Cart } from './Pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
