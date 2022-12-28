import React from "react";
import Logo from "../assets/Logo.svg";

const Navbar = () => {
  return (
    <>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-blue-500 fixed w-full z-20 top-0 left-0 border-b border-blue-500 dark:border-blue-500">
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="https://flowbite.com/" class="flex items-center">
            <img
              src={Logo}
              className="h-6 w-60 mr-3 sm:h-9"
              alt="Arkademi Logo"
            />
          </a>
          <div class="flex gap-2 md:order-2">
            <button
              type="button"
              class="text-blue-600 bg-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-white dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Masuk
            </button>
            <button
              type="button"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-700 dark:hover:bg-blue-600 dark:focus:ring-blue-800"
            >
              Daftar
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
              <input
                className="w-full h-20 bg-transparent focus:outline-none"
                placeholder="Cari di sini ..."
                // onChange={props.onSearchChange}
              />
              {/* <FiSearch className="text-2xl" /> */}
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="bg-white border-blue-500 dark:bg-blue-500">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={Logo} className="h-6 mr-3 sm:h-9" alt="Arkademi Logo" />
          </a>
          <div className="h-12 bg-white rounded-2xl py-3 px-6 text-neutral-3 flex lg:bg-[#EEEEEE]">
            <input
              className="w-full h-full bg-transparent focus:outline-none"
              placeholder="Cari di sini ..."
            />
            <FiSearch className="text-2xl" />
          </div>

          <div className="flex items-center">
            <a
              href="tel:5541251234"
              className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline"
            >
              (555) 412-1234
            </a>
            <a
              href="#"
              className="text-sm font-medium text-gray-600 dark:text-white hover:underline"
            >
              Login
            </a>
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
      </nav> */}
    </>
  );
};

export default Navbar;
