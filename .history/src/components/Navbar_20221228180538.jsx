import React from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <nav className="bg-white border-blue-500 dark:bg-blue-500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Arkademi Logo" />
            {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Flowbite
            </span> */}
          </a>
          <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
            <input
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="Cari di sini ..."
              // onChange={props.onSearchChange}
            />
            {/* <FiSearch className="text-2xl" /> */}
          </div>

          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <button>Masuk</button>
            {/* <a
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-white hover:underline"
            >
              Login
            </a> */}
          </div>
        </div>
      </nav>
      <nav className="bg-white dark:bg-white">
        <div className="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
          <div className="flex items-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                  aria-current="page"
                >
                  Bisnis
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Keuangan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Pengembangan Karier
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Sertifikasi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Teknologi
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Bahasa
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Korporat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-900 dark:text-dark hover:underline"
                >
                  Hobi
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
