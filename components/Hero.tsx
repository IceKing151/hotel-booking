import Navbar from "./Navbar";
import location from "../src/assets/locationIcon.svg";
import calendar from "../src/assets/calenderIcon.svg";
import search from "../src/assets/searchIcon.svg";

const Hero = () => {
  return (
    <main className="bg-hero h-screen">
      <Navbar />

      <div className="text-white bg-[#4d87ae] rounded-full w-[16vw] text-center p-0.5 ml-[8vw] mt-[25vh]">
        The Ultimate Hotel Experience
      </div>

      <p className="text-5xl font-medium text-white my-5 ml-[8vw]">Discover Your Pefect <br /> Getaway Destination</p>

      <p className="text-white ml-[8vw]">Unparalled luxury and comfort await at the world's most exclusive <br /> hotels and resorts. Start your journey today.</p>

      <section className="bg-[#ffffff] w-[60vw] p-3 rounded-sm flex gap-20 items-center ml-[8vw] my-[6vh] max-md:w-[20vw]]">
        <div>
          <div className="flex items-center gap-1">
            <img src={location} alt="location-icon" className="w-[4vw] h-[2vh]"/>
            <p className="ml-[-1.5vw] text-gray-500">Destination</p>
          </div>
          <p className="text-center">Dubai</p>
        </div>

        <span>
          <div className="flex items-center gap-1">
            <img src={calendar} alt="" className="w-[4vw] h-[2vh]"/>
           <p className="ml-[-1.5vw] text-gray-500">Checkout</p>
          </div>
          <p className="text-center ml-[2vw]">Mar 15,2025</p>
        </span>

        <span>
          <div className="flex items-center gap-1">
            <img src={calendar} alt="" className="w-[4vw] h-[2vh]"/>
            <p className="ml-[-1.5vw] text-gray-500">Checkout</p>
          </div>
          <p className="text-center ml-[1.5vw]">Mar 15,2025</p>
        </span>

        <span>
          <div className="text-gray-500">Guests</div>
          <p className="text-center">2</p>
        </span>

        <div className="w-[8vw] h-[5vh] bg-black flex items-center rounded-md text-white justify-center">
        
          <img src={search} alt="search-icon" className="w-[6vw] h-[4vh] ml-[-2.5vw] "/>
            <p className="ml-[-2vw]">Search</p>
          
        </div>
      </section>
    </main>
  );
};

export default Hero;
