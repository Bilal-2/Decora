import Header from "../Components/Header/Header.jsx";
import { Footer, Hero } from "../Components/index";

import {
 
  img7,
  img8,
  img9,
} from "../assets/Stock Images/index.js";
import Service from "../Components/Services/Service.jsx";
import About from "../Components/About/About.jsx";
import Discover from "../Components/Discover/Discover.jsx";
import Testimonial from "../Components/Testimonial/Testimonial.jsx";
import Newsletter from "../Components/Newsletter/Newsletter.jsx";
import Shop from "../Components/Shop/Shop.jsx";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="realitive z-0 bg-primary">
        {/* <Navbar /> */}
        <Hero />
      </div>
      <Service />
      <About/>
      <Discover/>
      <Shop/>
      
      {/* <div className="p-4 lg:p-8 gap-4 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto">
        <div className="mt-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
          <img src={img1} alt="" className="rounded-2xl w-full h-full" />
        </div>
        <div className="mt-4 col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-2">
          <img src={img2} alt="" className="rounded-2xl w-full h-full" />
        </div>
      </div>
      <NewArivals />
      <div className="p-4 lg:p-8 gap-4 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 h-[28rem]">
        <div className="mt-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="relative">
            <img src={img3} alt="" className="rounded-2xl w-full h-full" />

            <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
              <p className="bg-transparent text-center  mt-6">New Arrivals</p>
              <h2 className="bg-transparent text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  my-7">
                SOFA STYLE <br /> 2020
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <button
                  className={
                    "   px-7 py-3 bg-btncolor1  text-[1.12rem] transform hover:bg-btncolor2   rounded-xl "
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="relative">
            <img src={img4} alt="" className="rounded-2xl w-full h-full" />

            <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
              <p className="bg-transparent text-center  mt-6">New Arrivals</p>
              <h2 className="bg-transparent text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  my-7">
                SOFA STYLE <br /> 2020
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <button
                  className={
                    "   px-7 py-3 bg-btncolor1  text-[1.12rem] transform hover:bg-btncolor2   rounded-xl "
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TrendingItems />
      <div className="p-4 lg:p-8 gap-4 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-auto relative">
        <div className="relative mt-4 col-span-1 sm:col-span-2 md:col-span-2 lg:col-span-3">
          <img src={img5} alt="" className="rounded-2xl w-full h-full" />
          <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-4">
            Image 5 Text
          </div>
        </div>
        <div className="mt-4 col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2 flex items-center justify-center relative">
          <div className="h-[23.7rem] w-full rounded-2xl overflow-hidden bg-orange-500">
            <img
              src={img6}
              alt=""
              className="-translate-y-[50%] w-full object-cover object-bottom bg-orange-500 "
            />
          </div>
          <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
            <div className="relative bg-transparent border-4 rounded-xl h-full w-full p-8">
              <p className="bg-transparent text-center ">New Arrivals</p>
              <h2 className="bg-transparent text-center text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-3 mb-3">
                HOME <br /> OFFICE
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <button
                  className={
                    "   px-7 py-3 bg-btncolor3 text-black text-[1.12rem] transform hover:bg-btncolor2 hover:text-white  rounded-xl "
                  }
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="p-4 lg:p-8 gap-4 lg:gap-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 h-auto">
        <div className="mt-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="relative">
            <img src={img7} alt="" className="rounded-2xl w-full h-full" />

            <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
              <p className="bg-transparent text-center  mt-6">New Arrivals</p>
              <h2 className="bg-transparent text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  my-7">
                SOFA STYLE <br /> 2020
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <Link to="/products"
                  className={
                    "   px-7 py-3 bg-btncolor1  text-[1.12rem] transform hover:bg-btncolor2 text-white  rounded-xl "
                  }>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-2">
          <div className="relative">
            <img src={img8} alt="" className="rounded-2xl w-full h-full" />

            <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
              <p className="bg-transparent text-center text-black  mt-6">
                New Arrivals
              </p>
              <h2 className="bg-transparent text-center text-black text-2xl sm:text-2xl md:text-3xl lg:text-4xl  my-7">
                PERFECT FIT FOR <br /> YOUR HOME
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <Link to="/products"
                  className={
                    "   px-7 py-3 bg-btncolor1  text-[1.12rem] transform hover:bg-btncolor2 text-white   rounded-xl "
                  }
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 col-span-1 sm:col-span-1 md:col-span-1 lg:col-span-1">
          <div className="relative">
            <img src={img9} alt="" className="rounded-2xl w-full h-full" />

            <div className="absolute bottom-0 left-0 text-white font-bold text-xl bg-transparent p-9  w-full h-full place-content-center ">
              <p className="bg-transparent text-center  mt-6">New Arrivals</p>
              <h2 className="bg-transparent text-center text-2xl sm:text-2xl md:text-3xl lg:text-4xl  my-7">
                SALE UPTO 30%  OFF
              </h2>

              <div className="w-full bg-transparent flex justify-center">
                <Link to="/products"
                  className={
                    "   px-7 py-3 bg-btncolor1  text-[1.12rem] transform hover:bg-btncolor2 text-white   rounded-xl "
                  }
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial/>
      <Newsletter/>
      <Footer />
    </div>
  );
}
