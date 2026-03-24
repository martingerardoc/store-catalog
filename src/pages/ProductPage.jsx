import { useParams, useNavigate } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import Loading from "../components/Loading";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, error } = useFetchProducts(`/products/${id}`);

  if (loading) return <Loading />;
  if (error) return <p>Error</p>;

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">

      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-sm text-gray-600 hover:underline"
      >
        ← Volver
      </button>

      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow">

        <img
          src={data.image}
          className="w-full h-80 object-contain"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">{data.title}</h2>

          <p className="text-xl font-semibold mb-2">${data.price}</p>

          <p className="text-gray-600 mb-4">{data.description}</p>

          <p className="text-sm text-gray-500 mb-4">
            Categoría: {data.category}
          </p>

          <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
            Añadir al carrito
          </button>
        </div>

      </div>
    </div>
  );
}

export default ProductPage;