import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';
import ManufacturingPage from './pages/ManufacturingPage';
import FranchisePage from './pages/FranchisePage';
import Navbar from './components/common/Navbar/Navbar';

function App() {
  return (
    <>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/blogs" element={<BlogsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/manufacturing" element={<ManufacturingPage />} />
        <Route path="/franchise" element={<FranchisePage />} />
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </Layout>
    </>
  );
}

export default App;
