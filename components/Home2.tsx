import React, { useState } from "react";

const QuickStayHomePage: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <div className="font-sans antialiased bg-white text-gray-800">
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            QuickStay
          </h1>
          <p className="text-xl md:text-2xl font-light mb-6 max-w-2xl">
            Discover Your Perfect Getaway Destination
          </p>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10">
            Unparalleled luxury and comfort nestled in the world's most fashionable hotels and resorts. Start your journey today.
          </p>

          {/* Search / Booking Widget */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 max-w-4xl border border-white/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">Destination</label>
                <div className="bg-white/20 rounded-lg px-4 py-3 text-white">
                  Dubai
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">Check in</label>
                <div className="bg-white/20 rounded-lg px-4 py-3 text-white">
                  Mar 12, 2025
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">Check out</label>
                <div className="bg-white/20 rounded-lg px-4 py-3 text-white">
                  Mar 15, 2025
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wider text-gray-300 mb-1">Guests</label>
                <div className="bg-white/20 rounded-lg px-4 py-3 text-white">
                  2
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Featured Hotels */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Featured Hotels</h2>
          <p className="text-gray-500 text-sm hidden md:block">Discover our handpicked selection</p>
        </div>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Discover our handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition">
              <div className="h-48 bg-gradient-to-br from-indigo-200 to-purple-200 flex items-center justify-center text-gray-400">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-semibold">The Grand Resort</h3>
                  <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 text-amber-500 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                    4.9
                  </span>
                </div>
                <p className="text-gray-500 text-sm mt-1">Luxury hotel</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-2xl font-bold text-indigo-700">$450</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-full transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Exclusive Offers</h2>
          <p className="text-gray-600 mb-10 max-w-3xl">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Summer Escape Package</h3>
              <p className="text-gray-500 mt-2">Enjoy a complimentary night and daily breakfast</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center text-pink-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Romantic Getaway</h3>
              <p className="text-gray-500 mt-2">Special couples package including spa treatment</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-700 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold">Early Bird Special</h3>
              <p className="text-gray-500 mt-2">Book 60 days in advance and save on your stay at any of our luxury properties worldwide.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Guests Say</h2>
        <p className="text-gray-600 mb-10 max-w-3xl">
          Discover why discerning travelers choose QuickStay for their luxury accommodations around the world.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-gray-50 p-6 rounded-2xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-indigo-200 flex items-center justify-center text-indigo-700 font-bold mr-4">
                  ER
                </div>
                <div>
                  <p className="font-semibold">Emma Rodriguez</p>
                  <p className="text-sm text-gray-500">Barcelona, Spain</p>
                </div>
              </div>
              <div className="flex text-amber-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <p className="text-gray-700 italic">"An unforgettable experience. The attention to detail and service was impeccable."</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-indigo-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Inspired</h2>
          <p className="text-indigo-200 mb-8">
            Join our newsletter and be the first to discover new destinations, exclusive offers, and travel inspiration.
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white"
              required
            />
            <button
              type="submit"
              className="bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold px-8 py-3 rounded-full transition"
            >
              Subscribe
            </button>
          </form>
          <p className="text-indigo-300 text-sm mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
            <div>
              <h3 className="text-white font-bold text-xl mb-4">QuickStay</h3>
              <p className="text-sm text-gray-400">
                Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">COMPANY</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Partners</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">SUPPORT</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition">Accessibility</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">STAY UPDATED</h4>
              <p className="text-sm text-gray-400 mb-4">
                Subscribe to our newsletter for travel inspiration and special offers.
              </p>
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-full transition">
                Subscribe
              </button>
            </div>
          </div>
          <div className="pt-8 text-center text-sm text-gray-500">
            © 2023 QuickStay. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuickStayHomePage;