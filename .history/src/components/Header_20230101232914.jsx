import React from "react";
import Banner from "../assets/jvfkbv.png";
import Caroussel1 from "../assets/caroussel1.png";
import Caroussel2 from "../assets/caroussel2.png";
import Caroussel3 from "../assets/caroussel3.png";

const Header = () => {
  return (
    <>
      <div className="banner my-2 mx-4 md:mx-0">
        <div className="flex gap-4 w-full items-center justify-center">
          <div className="md:w-1/6 md:h-[224px] bg-white rounded-l rounded-[20px]"></div>
          <img
            src={Banner}
            className="flex-initial w-full max-h-[288px] object-fill"
            alt=""
          />
          <div className="md:w-1/6 md:h-[224px] bg-white rounded-r rounded-[20px]"></div>
        </div>
      </div>

      <div className="container my-2 mx-4 md:mx-10 items-center justify-center">
        <div className="flex gap-4 w-200 items-center justify-center">
          <img
            src={Caroussel1}
            className="flex-initial w-[391px] h-[100px] object-fill"
            alt=""
          />
          <img
            src={Caroussel2}
            className="flex-initial w-[391px] h-[100px] object-fill"
            alt=""
          />
          <img
            src={Caroussel3}
            className="flex-initial w-[391px] h-[100px] object-fill"
            alt=""
          />
        </div>
        <button
          type="button"
          class="text-blue-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Masuk
        </button>
      </div>
    </>
  );
};

export default Header;
