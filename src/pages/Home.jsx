import { useParams } from "react-router-dom";
import { useFetchProducts } from "../hooks/useFetchProducts";
import ProductCard from "../components/ProductCard";
import Loading from "../components/Loading";
import Hero from "../components/Hero";

function Home({ search }) {
  const { category } = useParams();

  const url = category
    ? `/products/category/${encodeURIComponent(category)}`
    : "/products";

  const { data, loading, error } = useFetchProducts(url);

  const filteredProducts = data.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">

      <Hero />

      {loading && <Loading />}
      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}

export default Home;