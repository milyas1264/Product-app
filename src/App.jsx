import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <Router>
      <nav className="bg-blue-600  p-4 flex justify-between text-amber-50">
        <Link to="/" className="font-bold text-xl">🛒 Product Store</Link>
      </nav>

      <div className="p-6">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
