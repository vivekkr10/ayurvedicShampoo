import "./App.css";
import 'swiper/css';
import ProductDetail from "./productDetail/ProductDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Routes>
      <Route path="/product-detail" element={<ProductDetail />} />
    </Routes>
    </>
  );
}

export default App;
