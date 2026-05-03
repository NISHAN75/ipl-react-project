import bannerVideo from '../../assets/video/banner-video.mp4';

const Banner = () => {
  return (
    <div className="min-h-[80vh] bg-[#FFF8F1] flex items-center py-10 lg:py-20">
      <div className="container mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side: Content */}
          <div className="order-2 lg:order-1">
            <span className="bg-[var(--secondary-color)] text-white px-4 py-1 rounded-md text-xs font-bold uppercase tracking-widest font-roboto">
              Our Legacy
            </span>
            
            <h1 className="text-[var(--primary-color)] mt-6 leading-tight">
              The Soul of Communal <br /> Devotion
            </h1>
            
            <p className="text-gray-600 text-lg mt-6 max-w-lg font-montserrat">
              Founded on the pillars of unity and spiritual fervor, Mayer Shakti Ekata Sangha has been the heartbeat of Jagaddhatri Puja celebrations for over four decades, bringing together diverse souls under the divine gaze of the Mother.
            </p>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-6 mt-10">
              <div className="flex items-center gap-4 bg-white/50 border border-orange-100 p-4 rounded-xl shadow-sm w-full sm:w-auto">
                <div className="text-[var(--tertiary-color)] text-3xl">
                  <i className="fa-solid fa-clock-rotate-left"></i> {/* FontAwesome Icon */}
                </div>
                <div>
                  <h3 className="text-[var(--primary-color)] mb-0 text-2xl font-bold">42+</h3>
                  <p className="text-gray-500 text-sm">Years of Heritage</p>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/50 border border-orange-100 p-4 rounded-xl shadow-sm w-full sm:w-auto">
                <div className="text-[var(--tertiary-color)] text-3xl">
                  <i className="fa-solid fa-users"></i>
                </div>
                <div>
                  <h3 className="text-[var(--primary-color)] mb-0 text-2xl font-bold">10k+</h3>
                  <p className="text-gray-500 text-sm">Community Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image with Decorative Border */}
          <div className="order-1 lg:order-2 relative">
            {/* Decorative background shape */}
            <div className="absolute -top-4 -right-4 w-full h-full border-2 border-[var(--secondary-color)] rounded-[2rem] opacity-30"></div>
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
                <video src={bannerVideo} loop muted autoPlay></video>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;