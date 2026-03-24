function Footer() {
  return (
    <footer className="bg-gray-100 mt-10">

      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        {/* BRAND */}
        <div>
          <h2 className="font-bold text-lg mb-2">🛍️ LUXE.</h2>
          <p className="text-gray-600">
            Your one-stop destination for premium lifestyle products.
          </p>
        </div>

        {/* CATEGORIES */}
        <div>
          <h3 className="font-semibold mb-3">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Electronics</li>
            <li>Jewelry</li>
            <li>Men's Fashion</li>
            <li>Women's Fashion</li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold mb-3">SUPPORT</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Help Center</li>
            <li>Shipping Policy</li>
            <li>Returns & Refunds</li>
            <li>Order Tracking</li>
          </ul>
        </div>

        {/* NEWSLETTER */}
        <div>
          <h3 className="font-semibold mb-3">NEWSLETTER</h3>
          <p className="text-gray-600 mb-3">
            Get updates on new arrivals and sales.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 border rounded-l-lg w-full"
            />
            <button className="bg-black text-white px-4 rounded-r-lg">
              Subscribe
            </button>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t text-center py-4 text-xs text-gray-500">
        © 2026 Luxe Store - FakeStore API
      </div>

    </footer>
  );
}

export default Footer;