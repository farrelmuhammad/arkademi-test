import React from "react";

const Header = () => {
  return (
    <>
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

export default Header;
