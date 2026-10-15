import React, { useState } from "react";
import {
  Search,
  User,
  MapPin,
  Star,
  Wifi,
  Coffee,
  Home as HomeIcon,
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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface RoomListing {
  id: string;
  image: string;
  imageAlt: string;
  location: string;
  name: string;
  rating: number;
  reviews: string;
  address: string;
  pricePerDay: number;
}

interface FilterGroup {
  heading: string;
  options: string[];
}

// ---------------------------------------------------------------------------
// Static content (would come from an API in a real app)
// ---------------------------------------------------------------------------

const NAV_LINKS = ["Home", "Destination", "Experiences", "About"];

const ROOM_LISTINGS: RoomListing[] = [
  {
    id: "grand-resort",
    image:
      room1,
    imageAlt: "Bedroom at The Grand Resort",
    location: "San Diego, CA, USA",
    name: "The Grand Resort",
    rating: 4,
    reviews: "200+ reviews",
    address: "Los Angeles, California, USA",
    pricePerDay: 100,
  },
  {
    id: "regal-palace",
    image:
      room2,
    imageAlt: "Bedroom at The Regal Palace",
    location: "Skyline Boulevard, NY, USA",
    name: "The Regal Palace",
    rating: 4,
    reviews: "200+ reviews",
    address: "Los Angeles, California, USA",
    pricePerDay: 150,
  },
  {
    id: "velvet-nights-inn",
    image:
      room3,
    imageAlt: "Bedroom at Velvet Nights Inn",
    location: "Beachfront Drive, CA, USA",
    name: "Velvet Nights Inn",
    rating: 4,
    reviews: "200+ reviews",
    address: "Los Angeles, California, USA",
    pricePerDay: 120,
  },
  {
    id: "crystal-waters-resort",
    image:
      room5,
    imageAlt: "Room at Crystal Waters Resort",
    location: "Night Sky Parkway, AZ, USA",
    name: "Crystal Waters Resort",
    rating: 4,
    reviews: "200+ reviews",
    address: "Los Angeles, California, USA",
    pricePerDay: 200,
  },
  {
    id: "skyline-luxe-hotel",
    image:
      room4,
    imageAlt: "Room at Skyline Luxe Hotel",
    location: "Metro Avenue, Chicago, USA",
    name: "Skyline Luxe Hotel",
    rating: 4,
    reviews: "200+ reviews",
    address: "Los Angeles, California, USA",
    pricePerDay: 250,
  },
];

const POPULAR_FILTERS: FilterGroup = {
  heading: "Popular filters",
  options: ["Single Bed", "Family Suite", "Double Bed", "Luxury Room"],
};

const PRICE_FILTERS: FilterGroup = {
  heading: "Price",
  options: ["₹2500 to ₹5000", "₹5000 to ₹8000", "₹8000 to ₹15000"],
};

const SORT_FILTERS: FilterGroup = {
  heading: "Sort By",
  options: ["Price Low to High", "Price High to Low", "Newest First"],
};

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
        className={`h-3.5 w-3.5 ${
          i < rating ? "fill-amber-400 text-amber-400" : "text-gray-300"
        }`}
      />
    ))}
    <span className="ml-1 text-gray-500">{reviews}</span>
  </div>
);

const AmenityPill: React.FC<{
  icon: React.ReactNode;
  label: string;
}> = ({ icon, label }) => (
  <span className="flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs text-gray-700">
    {icon}
    {label}
  </span>
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

      {/* navbar   */}
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
// Room card
// ---------------------------------------------------------------------------

const RoomCard: React.FC<{ room: RoomListing }> = ({ room }) => (
  <div className="flex flex-col gap-5 py-6 sm:flex-row">
    <img
      src={room.image}
      alt={room.imageAlt}
      className="h-56 w-full rounded-xl object-cover sm:h-44 sm:w-64"
    />
    <div className="flex-1">
      <p className="text-xs text-gray-500">{room.location}</p>
      <h3 className="mt-1 text-lg font-serif font-semibold text-gray-900">
        {room.name}
      </h3>
      <div className="mt-1.5">
        <StarRating rating={room.rating} reviews={room.reviews} />
      </div>
      <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
        <MapPin className="h-3.5 w-3.5" />
        {room.address}
      </div>
      <div className="mt-3 flex flex-wrap gap-2.5">
        <AmenityPill icon={<Wifi className="h-3.5 w-3.5" />} label="free wifi" />
        <AmenityPill
          icon={<Coffee className="h-3.5 w-3.5" />}
          label="free breakfast"
        />
        <AmenityPill
          icon={<HomeIcon className="h-3.5 w-3.5" />}
          label="room service"
        />
      </div>
      <p className="mt-4 text-base font-semibold text-gray-900">
        $ {room.pricePerDay}{" "}
        <span className="font-normal text-gray-500">/day</span>
      </p>
    </div>
  </div>
);

// ---------------------------------------------------------------------------
// Filters sidebar
// ---------------------------------------------------------------------------

const FilterCheckbox: React.FC<{
  label: string;
  checked: boolean;
  onChange: () => void;
}> = ({ label, checked, onChange }) => (
  <label className="flex items-center gap-2.5 text-sm text-gray-600">
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-3.5 w-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
    />
    {label}
  </label>
);

const FiltersSidebar: React.FC = () => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));

  const clearAll = () => setChecked({});

  const groups = [POPULAR_FILTERS, PRICE_FILTERS, SORT_FILTERS];

  return (
    <aside className="h-fit rounded-xl border border-gray-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold tracking-wide text-gray-900">
          FILTERS
        </h2>
        <button
          onClick={clearAll}
          className="text-xs font-medium text-gray-400 hover:text-gray-600"
        >
          CLEAR
        </button>
      </div>

      <div className="mt-5 flex flex-col gap-6 border-t border-gray-100 pt-5">
        {groups.map((group) => (
          <div key={group.heading}>
            <p className="text-sm font-semibold text-gray-900">
              {group.heading}
            </p>
            <div className="mt-3 flex flex-col gap-3">
              {group.options.map((option) => (
                <FilterCheckbox
                  key={option}
                  label={option}
                  checked={!!checked[option]}
                  onChange={() => toggle(option)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

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

const RoomInfo: React.FC = () => {
  const [visibleCount, setVisibleCount] = useState(ROOM_LISTINGS.length);

  const visibleRooms = ROOM_LISTINGS.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-gray-900">
            Hotel Rooms
          </h1>
          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          {/* Room listings */}
          <div className="divide-y divide-gray-100">
            {visibleRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          {/* Filters sidebar */}
          <FiltersSidebar />
        </div>

        {/* Show more */}
        {visibleCount < ROOM_LISTINGS.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={() => setVisibleCount(ROOM_LISTINGS.length)}
              className="rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Show More
            </button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default RoomInfo;