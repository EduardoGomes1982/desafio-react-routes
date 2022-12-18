import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import HomeIndex from "./components/HomeIndex";
import MainBody from "./components/MainBody";
import ProductCatalog from "./components/MainBody";
import Home from "./routes/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<MainBody content={<HomeIndex />} />} />
          <Route path="/products" element={<MainBody content={<HomeIndex />} />}>
            {/* <Route index element={<ProductList />} /> */}
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
