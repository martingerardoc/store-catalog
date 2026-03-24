function Loading() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="animate-pulse bg-white p-4 rounded-xl shadow"
        >
          <div className="h-32 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 bg-gray-200 rounded"></div>
        </div>
      ))}
    </div>
  );
}

export default Loading;