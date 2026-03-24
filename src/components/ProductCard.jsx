import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4 flex flex-col">

      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />

      <h3 className="font-semibold text-sm mb-2 line-clamp-2">
        {product.title}
      </h3>

      <p className="text-lg font-bold mb-3">${product.price}</p>

      <Link to={`/products/${product.id}`}>
        <button className="mt-auto bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Ver detalles
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;