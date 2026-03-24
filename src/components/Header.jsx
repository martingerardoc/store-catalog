import { Link } from "react-router-dom";
import { ShoppingCart, Heart, User, Menu, X } from "lucide-react";
import { useState } from "react";

function Header({ search, setSearch }) {
  const [open, setOpen] = useState(false);

  const categories = [
    { name: "Electronics", path: "electronics" },
    { name: "Jewelry", path: "jewelery" },
    { name: "Men's", path: "men's clothing" },
    { name: "Women's", path: "women's clothing" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
  <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">

    <div className="flex items-center justify-between w-full">
      {/* LOGO */}
      <Link to="/" className="font-bold text-lg">
        🛍️ LUXE.
      </Link>
      <div className="flex items-center gap-4 text-gray-600">
        <Heart size={20} />
        <ShoppingCart size={20} />
        <User size={20} />
      </div>
    </div>
    <div className="md:hidden flex justify-end mt-2">
      <button onClick={() => setOpen(!open)}>
        {open ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    <nav className="hidden md:flex gap-6 text-sm text-gray-600 mt-2 md:mt-0">
      {categories.map((cat) => (
        <Link
          key={cat.name}
          to={`/products/category/${encodeURIComponent(cat.path)}`}
        >
          {cat.name}
        </Link>
      ))}
    </nav>
    <div className="hidden md:block mt-2 md:mt-0">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="px-3 py-1 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
      />
    </div>
  </div>
  {open && (
    <div className="md:hidden bg-white border-t px-4 py-4 space-y-4">

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search products..."
        className="w-full px-3 py-2 border rounded-lg"
      />
      <div className="flex flex-col gap-3 text-gray-700">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/products/category/${encodeURIComponent(cat.path)}`}
            onClick={() => setOpen(false)}
            className="hover:text-black"
          >
            {cat.name}
          </Link>
        ))}
      </div>
    </div>
  )}
</header>
  );
}

export default Header;