import React, { useState } from "react";
import {
  Search,
  User,
  MapPin,
  Star,
  Wifi,
  Coffee,
  Home as HomeIcon,
  CheckCircle2,
  Heart,
  Plus,
  Minus,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
  ArrowRight,
} from "lucide-react";

import room1 from "../src/assets/rooms1.jpeg";
import room2 from "../src/assets/rooms2.jpeg";
import room3 from "../src/assets/rooms3.jpeg";
import room4 from "../src/assets/rooms4.jpeg";
import room5 from "../src/assets/roomImg1.png";
import emma from "../src/assets/emma rodriguez.jpeg"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RoomImage {
  src: string;
  alt: string;
}

interface Amenity {
  icon: React.ReactNode;
  label: string;
}

interface HighlightItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

// ---------------------------------------------------------------------------
// Static content (would come from an API in a real app)
// ---------------------------------------------------------------------------

const NAV_LINKS = ["Home", "Destination", "Experiences", "About"];

const ROOM_IMAGES: RoomImage[] = [
  {
    src: room1,
    alt: "Main bedroom view of The Grand Resort",
  },
  {
    src: room2,
    alt: "Living area with sofa and TV",
  },
  {
    src: room3,
    alt: "Bedroom with orange accent pillows",
  },
  {
    src: room5,
    alt: "Bedroom with window and reading chair",
  },
  {
    src: room4,
    alt: "Bedroom with couch and yellow pillows",
  },
];

const AMENITIES: Amenity[] = [
  { icon: <Wifi className="h-4 w-4" />, label: "free wifi" },
  { icon: <Coffee className="h-4 w-4" />, label: "free breakfast" },
  { icon: <HomeIcon className="h-4 w-4" />, label: "room service" },
];

const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: <HomeIcon className="h-5 w-5" />,
    title: "Clean Room",
    description: "You will have the clean room for you.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Enhanced Clean",
    description: "This host has committed to Staybnb's cleaning process.",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Great location",
    description: "90% of recent guests gave the location a 5-star rating.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Great check-in experience",
    description:
      "100% of recent guests gave the check-in process a 5-star rating.",
  },
];

const FOOTER_LINKS: Record<string, string[]> = {
  COMPANY: ["About", "Careers", "Press", "Blog", "Partners"],
  SUPPORT: [
    "Help Center",
    "Safety Information",
    "Cancellation Options",
    "Contact Us",
    "Accessibility",
  ],
};

// ---------------------------------------------------------------------------
// Small presentational helpers
// ---------------------------------------------------------------------------

const StarRating: React.FC<{ rating: number; reviews: string }> = ({
  rating,
  reviews,
}) => (
  <div className="flex items-center gap-1.5 text-sm">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ))}
    <span className="ml-1 text-gray-500">{reviews}</span>
  </div>
);

// ---------------------------------------------------------------------------
// Header
// ---------------------------------------------------------------------------

const Header: React.FC = () => (
  <header className="w-full border-b border-gray-100 bg-white">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
      <div className="flex items-center gap-2">
        <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900 text-white">
          <HomeIcon className="h-4 w-4" />
        </span>
        <span className="text-lg font-semibold tracking-tight text-gray-900">
          QuickStay
        </span>
      </div>

    {/* navbar */}
      <nav className="hidden gap-10 text-sm text-gray-700 md:flex">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href="#"
            className="transition-colors hover:text-gray-900"
          >
            {link}
          </a>
        ))}
      </nav>

      <div className="flex items-center gap-5">
        <button
          aria-label="Search"
          className="text-gray-500 transition-colors hover:text-gray-900"
        >
          <Search className="h-[18px] w-[18px]" />
        </button>
        <button
          aria-label="Account"
          className="text-gray-500 transition-colors hover:text-gray-900"
        >
          <User className="h-[18px] w-[18px]" />
        </button>
        <button className="rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800">
          Login
        </button>
      </div>
    </div>
  </header>
);

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

const Gallery: React.FC<{ images: RoomImage[] }> = ({ images }) => (
  <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
    <div className="md:col-span-1">
      <img
        src={images[0].src}
        alt={images[0].alt}
        className="h-64 w-full rounded-xl object-cover md:h-[21.5rem]"
      />
    </div>
    <div className="grid grid-cols-2 gap-3 md:col-span-2">
      {images.slice(1).map((img) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="h-32 w-full rounded-xl object-cover md:h-[10.25rem]"
        />
      ))}
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Booking bar
// ---------------------------------------------------------------------------

const BookingBar: React.FC = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(2);

  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm md:flex-row md:items-center md:justify-between">
      <div className="grid flex-1 grid-cols-1 divide-y divide-gray-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
        <label className="flex flex-col px-0 py-2 sm:px-6 sm:py-0">
          <span className="text-xs font-semibold text-gray-800">
            Check-In
          </span>
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            placeholder="Add date"
            className="mt-1 w-full bg-transparent text-sm text-gray-400 outline-none placeholder:text-gray-400"
          />
        </label>

        <label className="flex flex-col px-0 py-2 sm:px-6 sm:py-0">
          <span className="text-xs font-semibold text-gray-800">
            Check-Out
          </span>
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            placeholder="Add date"
            className="mt-1 w-full bg-transparent text-sm text-gray-400 outline-none placeholder:text-gray-400"
          />
        </label>

        <div className="flex flex-col px-0 py-2 sm:px-6 sm:py-0">
          <span className="text-xs font-semibold text-gray-800">Guests</span>
          <div className="mt-1 flex items-center justify-between">
            <span className="text-sm text-gray-400">{guests} guests</span>
            <div className="flex items-center gap-2">
              <button
                aria-label="Decrease guests"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="rounded-full border border-gray-200 p-1 text-gray-500 hover:bg-gray-50"
              >
                <Minus className="h-3 w-3" />
              </button>
              <button
                aria-label="Increase guests"
                onClick={() => setGuests((g) => g + 1)}
                className="rounded-full border border-gray-200 p-1 text-gray-500 hover:bg-gray-50"
              >
                <Plus className="h-3 w-3" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 md:w-auto">
        Check Availability
      </button>
    </div>
  );
};

// ---------------------------------------------------------------------------
// Highlights
// ---------------------------------------------------------------------------

const Highlights: React.FC<{ items: HighlightItem[] }> = ({ items }) => (
  <div className="flex flex-col gap-6">
    {items.map((item) => (
      <div key={item.title} className="flex gap-4">
        <div className="mt-0.5 text-gray-800">{item.icon}</div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{item.title}</p>
          <p className="mt-0.5 text-sm text-gray-500">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
);

// ---------------------------------------------------------------------------
// Map section (static illustrative map, no external API required)
// ---------------------------------------------------------------------------

const MapSection: React.FC = () => (
  <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-[#e8ecef]">
    {/* Decorative road / block pattern to imply a map without external tiles */}
    <svg
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 1000 500"
      preserveAspectRatio="none"
    >
      <rect width="1000" height="500" fill="#eef1f3" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line
          key={`v-${i}`}
          x1={i * 100}
          y1={0}
          x2={i * 100 - 40}
          y2={500}
          stroke="#d3d9dd"
          strokeWidth={i % 3 === 0 ? 6 : 2}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <line
          key={`h-${i}`}
          x1={0}
          y1={i * 90}
          x2={1000}
          y2={i * 90 + 30}
          stroke="#d3d9dd"
          strokeWidth={i % 2 === 0 ? 6 : 2}
        />
      ))}
      <rect x="700" y="0" width="300" height="180" fill="#d7ecdd" />
    </svg>

    {/* Zoom controls */}
    <div className="absolute right-4 top-4 flex flex-col overflow-hidden rounded-md bg-white shadow-md">
      <button className="flex h-9 w-9 items-center justify-center border-b border-gray-100 text-gray-600 hover:bg-gray-50">
        <Plus className="h-4 w-4" />
      </button>
      <button className="flex h-9 w-9 items-center justify-center text-gray-600 hover:bg-gray-50">
        <Minus className="h-4 w-4" />
      </button>
    </div>

    {/* Central marker + callout */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <div className="mb-2 whitespace-nowrap rounded-md bg-blue-600 px-4 py-2 text-xs font-medium text-white shadow-md">
        Exact location provided after booking
      </div>
      <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full border-4 border-white bg-blue-600 shadow-md">
        <HomeIcon className="h-4 w-4 text-white" />
      </div>
    </div>

    {/* Sample nearby labels for flavor */}
    <span className="absolute left-[15%] top-[20%] text-[11px] font-medium text-gray-600">
      Walt Disney Concert Hall
    </span>
    <span className="absolute left-[55%] top-[68%] text-[11px] font-medium text-pink-500">
      Kawada Hotel
    </span>
    <span className="absolute left-[10%] top-[75%] text-[11px] font-medium text-gray-600">
      Citigroup Center
    </span>
  </div>
);

// ---------------------------------------------------------------------------
// Host card
// ---------------------------------------------------------------------------

const HostCard: React.FC = () => (
  <div className="border-t border-gray-100 pt-8">
    <div className="flex items-center gap-4">
      <img
        src={emma}
        alt="Host Emma Rodriguez"
        className="h-14 w-14 rounded-full object-cover"
      />
      <div>
        <p className="text-base font-semibold text-gray-900">
          Hosted by Emma Rodriguez
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-x-6 gap-y-1 text-sm text-gray-500">
          <StarRating rating={4} reviews="200+ reviews" />
          <span>Response rate: 100%</span>
          <span>Response time: 30 min</span>
        </div>
      </div>
    </div>
    <button className="mt-5 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
      Contact Now
    </button>
  </div>
);

// ---------------------------------------------------------------------------
// Footer
// ---------------------------------------------------------------------------

const Footer: React.FC = () => (
  <footer className="border-t border-gray-100 bg-white">
    <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-gray-900 text-white">
              <HomeIcon className="h-4 w-4" />
            </span>
            <span className="text-lg font-semibold tracking-tight text-gray-900">
              QuickStay
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-gray-500">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="mt-5 flex gap-4 text-gray-400">
            {/* <Instagram className="h-4 w-4" />
            <Twitter className="h-4 w-4" />
            <Facebook className="h-4 w-4" />
            <Linkedin className="h-4 w-4" /> */}
          </div>
        </div>

        {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
          <div key={heading}>
            <p className="text-xs font-semibold tracking-wide text-gray-900">
              {heading}
            </p>
            <ul className="mt-4 space-y-3">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-500 hover:text-gray-900"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-xs font-semibold tracking-wide text-gray-900">
            STAY UPDATED
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Subscribe to our newsletter for travel inspiration and special
            offers.
          </p>
          <div className="mt-4 flex items-center rounded-lg border border-gray-200 pr-1.5">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-lg bg-transparent px-3 py-2.5 text-sm outline-none placeholder:text-gray-400"
            />
            <button
              aria-label="Subscribe"
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-900 text-white"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 sm:flex-row">
        <span>© 2025 QuickStay. All rights reserved.</span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-600">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-600">
            Terms
          </a>
          <a href="#" className="hover:text-gray-600">
            Sitemap
          </a>
        </div>
      </div>
    </div>
  </footer>
);

// ---------------------------------------------------------------------------
// Main page
// ---------------------------------------------------------------------------

const Rooms: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Title block */}
        <div className="mb-6">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-serif font-semibold text-gray-900">
              The Grand Resort{" "}
              <span className="text-base font-normal text-gray-500">
                (Single Bed)
              </span>
            </h1>
            <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
              20% OFF
            </span>
          </div>
          <div className="mt-2">
            <StarRating rating={4} reviews="200+ reviews" />
          </div>
          <div className="mt-1 flex items-center gap-1.5 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            Los Angeles, California, USA
          </div>
        </div>

        {/* Gallery */}
        <Gallery images={ROOM_IMAGES} />

        {/* Description + price */}
        <div className="mt-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <h2 className="text-xl font-serif font-semibold text-gray-900">
              Experience Luxury Like Never Before
            </h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {AMENITIES.map((a) => (
                <span
                  key={a.label}
                  className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-700"
                >
                  {a.icon}
                  {a.label}
                </span>
              ))}
            </div>
          </div>
          <p className="whitespace-nowrap text-2xl font-semibold text-gray-900">
            $299<span className="text-base font-normal text-gray-500">/ day</span>
          </p>
        </div>

        <hr className="my-8 border-gray-100" />

        {/* Booking bar */}
        <BookingBar />

        <div className="my-10">
          <Highlights items={HIGHLIGHTS} />
        </div>

        <p className="text-sm leading-relaxed text-gray-500">
          Guests will be allocated on the ground floor according to
          availability. You get a comfortable Two bedroom apartment has a true
          city feeling. The price quoted is for two guest, at the guest slot
          please mark the number of guests to get the exact price for groups.
          The Guests will be allocated ground floor according to availability.
          You get the comfortable two bedroom apartment that has a true city
          feeling.
        </p>

        <hr className="my-8 border-gray-100" />

        {/* Map */}
        <div>
          <h3 className="mb-4 text-lg font-serif font-semibold text-gray-900">
            Location on map
          </h3>
          <MapSection />
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-900">
              Los Angeles, California, USA
            </p>
            <p className="mt-1 text-sm text-gray-500">
              It's like a home away from home.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <HostCard />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rooms;