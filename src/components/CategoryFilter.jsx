import { Link } from "react-router-dom";

const categories = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

function CategoryFilter() {
  return (
    <div className="flex flex-wrap gap-2 mt-4">
      {categories.map((cat) => (
        <Link key={cat} to={`/products/category/${cat}`}>
          <button className="px-4 py-1 bg-white border rounded-full hover:bg-black hover:text-white transition text-sm">
            {cat}
          </button>
        </Link>
      ))}
    </div>
  );
}

export default CategoryFilter;