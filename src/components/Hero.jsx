import bannerDesktop from "../assets/images/banner-desktop.avif";
import bannerMobile from "../assets/images/mobile-banner.jpg";

function Hero() {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden">

      <img
        src={bannerMobile}
        className="w-full h-full object-cover md:hidden"
      />
      <img
        src={bannerDesktop}
        className="w-full h-full object-cover hidden md:block"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="text-white px-6 md:px-12 max-w-lg">

          <p className="text-sm text-blue-400 mb-2">
            NEW COLLECTION 2026
          </p>

          <h2 className="text-2xl md:text-4xl font-bold mb-3">
            Redefine Your <br /> Everyday Style
          </h2>

          <p className="text-sm md:text-base mb-4 text-gray-200">
            Discover premium products for modern lifestyle.
          </p>

          <div className="flex flex-col md:flex-row gap-3">
            <button className="bg-blue-600 px-5 py-2 rounded-lg">
              Shop Collection
            </button>

            <button className="bg-white text-black px-5 py-2 rounded-lg">
              View Deals
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;