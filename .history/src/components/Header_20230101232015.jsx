import React from "react";
import Banner from "../assets/jvfkbv.png";

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

      <div className="container my-2 mx-4 md:mx-0">
        <div className="flex gap-4 w-full items-center justify-center">
        <img
            src={Banner}
            className="flex-initial w-full max-h-[288px] object-fill"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
