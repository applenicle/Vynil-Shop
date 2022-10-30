import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Contact, Trade, Delevery, Catalog, NotFound, Details } from './Pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/delevery" element={<Delevery />} />
      <Route path="/trade" element={<Trade />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
