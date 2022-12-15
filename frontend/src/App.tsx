import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProductCatalog from "./components/MainBody";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/products" element={<ProductCatalog />}>
            <Route index element={<ProductList />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
