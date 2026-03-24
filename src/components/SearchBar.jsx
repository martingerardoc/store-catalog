import { useState } from "react";

function SearchBar({ products, setFiltered }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    );

    setFiltered(filtered);
  };

  return (
    <input
      type="text"
      placeholder="Buscar productos..."
      value={search}
      onChange={handleChange}
      className="w-full md:w-80 px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
    />
  );
}

export default SearchBar;