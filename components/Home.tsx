import Hero from "../components/Hero";
import star from "../src/assets/starIconFilled.svg";
import location from "../src/assets/locationIcon.svg";

const Home = () => {
  return (
    <main>
      <Hero />

      {/* featured hotels  */}
      <section className="bg-[#f5f8fb]">
        <p className="text-3xl text-center py-3 pt-27">Featured Hotels</p>

        <p className="text-center py-2">
          Discover our handpicked selection of exceptional properties around the
          world, offering <br /> unparalled luxury and unforgettable experiences
        </p>

        <div className="flex justify-center my-[10vh]z">
          {hotelRooms.map((room) => (
            <div className="flex flex-col ml-5 ">
              <section className="relative">
                <img
                  src={room.image}
                  alt=""
                  className="w-[21vw] h-[29vh] rounded-t-xl "
                />
                {room.category && (
                  <div className="rounded-full bg-white text-center w-[6vw] p-1 absolute top-4 left-3 font-medium">
                    {room.category}
                  </div>
                )}
              </section>

              <section className="rounded-md shadow-2xl py-5">
                <div className="flex pt-[1vh] px-3    ">
                  <p className="font-medium text-xl inline mr-[4.5vw]">
                    The Great Resort
                  </p>
                  <img src={star} alt="" className="inline w-[5vw] h-[3vh]" />
                  <span className="ml-[-1.5vw]">{room.rating}</span>
                </div>

                <div className="flex items-center py-2 ml-[-1.3vw]">
                  <img src={location} alt="" className="w-[5vw] h-[2.5vh] " />
                  <p className="ml-[-2vw]">Maldives</p>
                </div>

                <div className="flex items-center gap-20 px-3">
                  <p className="font-medium">
                    {room.price} <span className="font-normal">/ night</span>
                  </p>

                  <button
                    type="button"
                    className="border border-neutral-400 w-[7vw] p-1 font-medium rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </section>
            </div>
          ))}
        </div>

        <center>
          <button
            type="button"
            className="text-gray-500 border border-gray-400 w-[10vw] p-1 my-[10vh]"
          >
            View All Hotels
          </button>
        </center>
      </section>
    </main>
  );
};

export default Home;

const hotelRooms = [
  {
    resort: "The Grand Resort",
    location: "Maldives",
    rating: 4.9,
    price: "$450",
    category: "Best Seller",
    image: "../src/assets/roomImg1.png",
  },
  {
    resort: "The Grand Resort",
    location: "Maldives",
    rating: 4.9,
    price: "$450",
    category: "",
    image: "../src/assets/roomImg2.png",
  },
  {
    resort: "The Grand Resort",
    location: "Maldives",
    rating: 4.9,
    price: "$450",
    category: "Best Seller",
    image: "../src/assets/roomImg3.png",
  },
  {
    resort: "The Grand Resort",
    location: "Maldives",
    rating: 4.9,
    price: "$450",
    category: "New",
    image: "../src/assets/roomImg4.png",
  },
];
