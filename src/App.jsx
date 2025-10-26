import './App.css';
import CartPage from './components/CartPage';
import Header from './components/Header/Header';
import Hero from './components/HeroSec/Hero';
import ProductsPage from './components/ProductPage/ProductsPage';
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  return (
    <>
      {/* Show Header only when NOT on home (/) */}
      {location.pathname !== "/" && <Header />}

      <Routes>
        {/* Home route */}
        <Route path="/" element={<Hero />} />

        {/* Products route */}
        <Route path="/products" element={<ProductsPage />} />

        {/* Cart page route */}
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
