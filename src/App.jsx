import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">

        <Header search={search} setSearch={setSearch} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home search={search} />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/products/category/:category" element={<Home search={search} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
