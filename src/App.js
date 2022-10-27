import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Contact, Delevery, Catalog } from './Pages';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/details/:id" element={<Details />} /> */}
      {/* <Route path="/cart" element={<Cart />} /> */}
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/contacts" element={<Contact />} />
      <Route path="/delevery" element={<Delevery />} />
      {/* <Route path="/404" element={<NotFound />} /> */}
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default App;
