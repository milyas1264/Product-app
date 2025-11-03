import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import Cart from "./Cart";

function App() {
  return (
    <Router>
      <nav className="bg-blue-600 p-4 flex justify-between items-center text-white">
        <Link to="/" className="font-bold text-xl">
          🛒 Product Store
        </Link>

        <div className="flex gap-4">
          <Link
            to="/cart"
            className="bg-amber-400 hover:bg-amber-500 text-black font-semibold px-4 py-2 rounded"
          >
            View Cart
          </Link>
        </div>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
