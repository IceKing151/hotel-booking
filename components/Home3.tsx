import { 
  Search, MapPin, Calendar, Users, Star, 
  ArrowRight, Briefcase 
} from 'lucide-react';
import room1 from "../src/assets/roomImg1.png"
import room2 from "../src/assets/roomImg2.png"
import room3 from "../src/assets/roomImg3.png"
import room4 from "../src/assets/roomImg4.png"
import offer1 from "../src/assets/exclusiveOfferCardImg1.png";
import offer2 from "../src/assets/exclusiveOfferCardImg2.png";
import offer3 from "../src/assets/exclusiveOfferCardImg3.png";
import { Link } from 'react-router-dom';
import Navbar2 from "./Navbar2";

// --- DATA ---

const featuredHotels = [
  {
    id: 1,
    name: 'The Grand Resort',
    location: 'Maldives',
    price: 450,
    rating: 4.9,
    tag: 'Best Seller',
    image: room1,
  },
  {
    id: 2,
    name: 'The Grand Resort',
    location: 'Maldives',
    price: 450,
    rating: 4.9,
    tag: '',
    image: room2,
  },
  {
    id: 3,
    name: 'The Grand Resort',
    location: 'Maldives',
    price: 450,
    rating: 4.9,
    tag: 'Best Seller',
    image: room3,
  },
  {
    id: 4,
    name: 'The Grand Resort',
    location: 'Maldives',
    price: 450,
    rating: 4.9,
    tag: 'New',
    image: room4,
  },
];

const exclusiveOffers = [
  {
    id: 1,
    title: 'Summer Promo Package',
    subtitle: 'Enjoy up to 20% off on luxury stays for minimum 3 nights.',
    expires: 'Expires in 2 Days',
    tag: 'Up to 20%',
    image: offer1,
  },
  {
    id: 2,
    title: 'Romantic Getaway',
    subtitle: 'A special couples package featuring spa treatments and dinners.',
    expires: 'Expires in 5 Days',
    tag: 'Couples',
    image: offer2,
  },
  {
    id: 3,
    title: 'Early Bird Special',
    subtitle: 'Book 30 days in advance and get a free room upgrade worldwide.',
    expires: 'Expires Aug 31',
    tag: 'Book Early',
    image: offer3,
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jennings',
    role: 'Travel Blogger',
    rating: 5,
    text: 'This accommodation booking platform is fantastic! The properties are beautiful and exactly as described. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 2,
    name: 'Sarah Jennings',
    role: 'Travel Blogger',
    rating: 5,
    text: 'This accommodation booking platform is fantastic! The properties are beautiful and exactly as described. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
  {
    id: 3,
    name: 'Sarah Jennings',
    role: 'Travel Blogger',
    rating: 5,
    text: 'This accommodation booking platform is fantastic! The properties are beautiful and exactly as described. Highly recommended.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
  },
];

// --- COMPONENTS ---

export default function QuickStayHomePage() {
  return (
    <div className="font-sans text-slate-800 bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative w-full h-[600px] md:h-[700px] bg-cover bg-center"
        style={{ backgroundImage: 'url("../src/assets/heroImage.png")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Navbar */}
       <Navbar2/>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-16 max-w-7xl mx-auto pt-16">
          <span className="text-blue-300 bg-white/20 px-3 py-1 rounded-full w-max text-sm font-medium mb-4 backdrop-blur-sm">
            The ultimate travel experience
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-4">
            Discover Your Perfect <br /> Getaway Destination
          </h1>
          <p className="text-gray-200 max-w-lg mb-10 text-sm md:text-base">
            Discover beautiful properties worldwide and book your perfect stay. 
            From luxury resorts to cozy cabins, we have it all.
          </p>

          {/* Search Widget */}
          <div className="bg-white rounded-md flex flex-col md:flex-row items-center p-3 w-full max-w-4xl shadow-xl gap-4 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-200 text-sm">
            <div className="flex items-center gap-3 px-6 flex-1 w-full">
              <MapPin className="text-gray-400 w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Destination</span>
                <span className="text-gray-500">Maldives</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 flex-1 w-full">
              <Calendar className="text-gray-400 w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Check-in</span>
                <span className="text-gray-500">May 12, 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 flex-1 w-full">
              <Calendar className="text-gray-400 w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Check-out</span>
                <span className="text-gray-500">May 17, 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 flex-1 w-full">
              <Users className="text-gray-400 w-5 h-5" />
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900">Guests</span>
                <span className="text-gray-500">2</span>
              </div>
            </div>
            <div className="px-3 w-full md:w-auto">
              <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium flex items-center justify-center gap-2 w-full hover:bg-slate-800 transition">
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Hotels */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Featured Hotels</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Discover our hand-picked selection of top-rated properties worldwide. 
            Enjoy uncompromised luxury, comfort, and memorable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredHotels.map(hotel => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition group border border-gray-100 p-2">
              <div className="relative h-48 rounded-xl overflow-hidden mb-4">
                <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                <span className="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                  {hotel.tag}
                </span>
              </div>
              <div className="px-2 pb-2">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-gray-900">{hotel.name}</h3>
                  <div className="flex items-center gap-1 text-sm font-semibold text-gray-900">
                    <Star className="w-4 h-4 text-orange-400 fill-current" />
                    {hotel.rating}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-4">
                  <MapPin className="w-3 h-3" />
                  {hotel.location}
                </div>
                <div className="flex justify-between items-center mt-4">
                  <p className="font-bold text-lg text-gray-900">${hotel.price} <span className="text-sm font-normal text-gray-500">/ night</span></p>
                  <button className="text-sm font-semibold border border-gray-200 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
        <Link to="/roomInfo">
          <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition text-sm">
            View all Hotels
          </button>
        </Link>
        </div>
      </section>

      {/* Exclusive Offers */}
      <section className="py-20 bg-white">
        <div className="px-6 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-3">Exclusive Offers</h2>
              <p className="text-gray-500 max-w-lg text-sm">
                Take advantage of our limited-time offers and special packages 
                to enhance your stay and make unforgettable memories.
              </p>
            </div>
            <Link to="/rooms">
            <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 mt-4 md:mt-0 hover:underline">
              View all Offers <ArrowRight className="w-4 h-4" />
            </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {exclusiveOffers.map(offer => (
              <div 
                key={offer.id}
                className="relative rounded-2xl overflow-hidden h-72 flex flex-col justify-end p-6 group cursor-pointer"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${offer.image})` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="relative z-10 text-white">
                  <span className="bg-white/20 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full mb-3 inline-block">
                    {offer.tag}
                  </span>
                  <h3 className="text-xl font-bold mb-2">{offer.title}</h3>
                  <p className="text-gray-200 text-sm mb-3 line-clamp-2">{offer.subtitle}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-300 text-xs">{offer.expires}</span>
                    <span className="flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                      View Offers <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">What Our Guests Say</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm">
            Discover why travelers prefer QuickStay for their local accommodations 
            around the world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(t => (
            <div key={t.id} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-4 text-orange-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                "{t.text}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-10 px-6 max-w-6xl mx-auto">
        <div className="bg-slate-900 rounded-3xl p-12 md:p-20 text-center text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Stay Inspired</h2>
            <p className="text-gray-300 text-sm md:text-base mb-8">
              Join our newsletter to receive the latest travel news, exclusive offers, and travel inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded-lg px-4 py-3 focus:outline-none focus:border-white w-full"
              />
              <button className="bg-white text-slate-900 font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              By subscribing you agree to our terms and conditions and privacy policy.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white pt-20 pb-8 border-t border-gray-200 mt-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            
            {/* Brand Col */}
            <div>
              <div className="flex items-center gap-2 font-bold text-2xl text-slate-900 mb-6">
                <Briefcase size={28} />
                <span>QuickStay</span>
              </div>
              <p className="text-gray-500 text-sm mb-6 max-w-xs">
                We simplify the process of booking your stays worldwide with the best collection of 
                accommodations.
              </p>
              <div className="flex gap-4 text-gray-400">
                {/* <Instagram className="w-5 h-5 hover:text-slate-900 cursor-pointer" />
                <Twitter className="w-5 h-5 hover:text-slate-900 cursor-pointer" />
                <Facebook className="w-5 h-5 hover:text-slate-900 cursor-pointer" />
                <Linkedin className="w-5 h-5 hover:text-slate-900 cursor-pointer" /> */}
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">COMPANY</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-slate-900">About</a></li>
                <li><a href="#" className="hover:text-slate-900">Careers</a></li>
                <li><a href="#" className="hover:text-slate-900">Press</a></li>
                <li><a href="#" className="hover:text-slate-900">Blog</a></li>
                <li><a href="#" className="hover:text-slate-900">Partners</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">SUPPORT</h4>
              <ul className="space-y-4 text-sm text-gray-500">
                <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
                <li><a href="#" className="hover:text-slate-900">Safety information</a></li>
                <li><a href="#" className="hover:text-slate-900">Cancellation options</a></li>
                <li><a href="#" className="hover:text-slate-900">Contact Us</a></li>
                <li><a href="#" className="hover:text-slate-900">Accessibility</a></li>
              </ul>
            </div>

            {/* Small Newsletter */}
            <div>
              <h4 className="font-bold text-gray-900 mb-6">STAY UP-TO-DATE</h4>
              <p className="text-gray-500 text-sm mb-4">
                Subscribe to our newsletter for exclusive offers and updates.
              </p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="border border-gray-300 rounded-l-lg px-4 py-2 w-full text-sm focus:outline-none focus:border-slate-900"
                />
                <button className="bg-slate-900 text-white px-4 py-2 rounded-r-lg hover:bg-slate-800">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} QuickStay. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-slate-900">Privacy</a>
              <a href="#" className="hover:text-slate-900">Terms</a>
              <a href="#" className="hover:text-slate-900">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}