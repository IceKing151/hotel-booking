import React from "react";
import {
  Search,
  User,
  MapPin,
  Users,
  Home as HomeIcon,
//   Instagram,
//   Twitter,
//   Facebook,
//   Linkedin,
  ArrowRight,
} from "lucide-react";

import room1 from "../src/assets/rooms1.jpeg";
import room4 from "../src/assets/rooms4.jpeg";
import room5 from "../src/assets/roomImg1.png";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type PaymentStatus = "Paid" | "Unpaid";

interface Booking {
  id: string;
  image: string;
  imageAlt: string;
  hotelName: string;
  roomType: string;
  location: string;
  guests: number;
  total: number;
  checkIn: string;
  checkOut: string;
  paymentStatus: PaymentStatus;
}

// ---------------------------------------------------------------------------
// Static content (would come from an API in a real app)
// ---------------------------------------------------------------------------

const NAV_LINKS = ["Home", "Destination", "Experiences", "Offers", "About"];

const BOOKINGS: Booking[] = [
  {
    id: "booking-1",
    image:
      room1,
    imageAlt: "Crystal Waters Resort room",
    hotelName: "Crystal Waters Resort",
    roomType: "Single Bed",
    location: "Night Sky Parkway, AZ, USA",
    guests: 2,
    total: 200,
    checkIn: "September 20, 2025",
    checkOut: "September 26, 2025",
    paymentStatus: "Paid",
  },
  {
    id: "booking-2",
    image:
      room4,
    imageAlt: "The Grand Resort room",
    hotelName: "The Grand Resort",
    roomType: "Single Bed",
    location: "Los Angeles, California, USA",
    guests: 2,
    total: 299,
    checkIn: "September 20, 2025",
    checkOut: "September 26, 2025",
    paymentStatus: "Unpaid",
  },
  {
    id: "booking-3",
    image:
      room5,
    imageAlt: "The Grand Resort room",
    hotelName: "The Grand Resort",
    roomType: "Single Bed",
    location: "Los Angeles, California, USA",
    guests: 2,
    total: 299,
    checkIn: "September 20, 2025",
    checkOut: "September 26, 2025",
    paymentStatus: "Paid",
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
// Booking row
// ---------------------------------------------------------------------------

const PaymentBadge: React.FC<{ status: PaymentStatus; onPayNow: () => void }> = ({
  status,
  onPayNow,
}) => {
  const isPaid = status === "Paid";
  return (
    <div className="flex flex-col items-start gap-2">
      <span
        className={`flex items-center gap-2 text-sm font-medium ${
          isPaid ? "text-green-600" : "text-red-500"
        }`}
      >
        <span
          className={`h-2 w-2 rounded-full ${
            isPaid ? "bg-green-500" : "bg-red-500"
          }`}
        />
        {status}
      </span>
      {!isPaid && (
        <button
          onClick={onPayNow}
          className="rounded-full border border-gray-300 px-4 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50"
        >
          Pay now
        </button>
      )}
    </div>
  );
};

const BookingRow: React.FC<{
  booking: Booking;
  onPayNow: (id: string) => void;
}> = ({ booking, onPayNow }) => (
  <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-[2fr_1.2fr_0.8fr]">
    {/* Hotel */}
    <div className="flex gap-4">
      <img
        src={booking.image}
        alt={booking.imageAlt}
        className="h-24 w-32 shrink-0 rounded-lg object-cover"
      />
      <div>
        <h3 className="text-base font-serif font-semibold text-gray-900">
          {booking.hotelName}{" "}
          <span className="text-sm font-normal text-gray-500">
            ({booking.roomType})
          </span>
        </h3>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
          <MapPin className="h-3.5 w-3.5" />
          {booking.location}
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-sm text-gray-500">
          <Users className="h-3.5 w-3.5" />
          Guests: {booking.guests}
        </div>
        <p className="mt-1.5 text-sm font-semibold text-gray-900">
          Total: ${booking.total}
        </p>
      </div>
    </div>

    {/* Date & timings */}
    <div className="flex gap-10">
      <div>
        <p className="text-sm font-semibold text-gray-900">Check-In:</p>
        <p className="mt-1 text-sm text-gray-500">{booking.checkIn}</p>
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900">Check-Out:</p>
        <p className="mt-1 text-sm text-gray-500">{booking.checkOut}</p>
      </div>
    </div>

    {/* Payment */}
    <div>
      <PaymentBadge
        status={booking.paymentStatus}
        onPayNow={() => onPayNow(booking.id)}
      />
    </div>
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

const QuickStayMyBookings: React.FC = () => {
  const [bookings, setBookings] = React.useState<Booking[]>(BOOKINGS);

  const handlePayNow = (id: string) => {
    setBookings((prev) =>
      prev.map((b) =>
        b.id === id ? { ...b, paymentStatus: "Paid" as PaymentStatus } : b
      )
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Header />

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* Page title */}
        <div className="mb-8">
          <h1 className="text-2xl font-serif font-semibold text-gray-900">
            My Bookings
          </h1>
          <p className="mt-2 max-w-xl text-sm text-gray-500">
            Easily manage your past, current, and upcoming hotel reservations
            in one place. Plan your trips seamlessly with just a few clicks
          </p>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-1 gap-6 border-b border-gray-200 pb-3 md:grid-cols-[2fr_1.2fr_0.8fr]">
          <p className="text-sm font-semibold text-gray-900">Hotels</p>
          <p className="text-sm font-semibold text-gray-900">
            Date &amp; Timings
          </p>
          <p className="text-sm font-semibold text-gray-900">Payment</p>
        </div>

        {/* Booking rows */}
        <div className="divide-y divide-gray-100">
          {bookings.map((booking) => (
            <BookingRow
              key={booking.id}
              booking={booking}
              onPayNow={handlePayNow}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default QuickStayMyBookings;