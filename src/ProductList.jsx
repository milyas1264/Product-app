import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className=" text-center">
      <h1 className="text-3xl font-bold mb-4 text-center">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto ">
        {products.map((product) => (
          <div
            key={product.id}
            className="border p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-48 object-cover rounded mb-2"
              />
            </Link>
            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2 hover:bg-blue-700"
              onClick={() => alert(`${product.title} added to cart!`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
