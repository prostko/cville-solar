import Image from "next/image";
import { useState } from "react";
import { openPopupWidget } from "react-calendly";

function setActive(isActive) {
  return `text-base font-medium ${
    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
  }`;
}

const url = "https://calendly.com/ericprostko9";
const openCalendar = (event) => {
  event.preventDefault();
  openPopupWidget({ url });
};

const Navbar = (props) => {
  const [isOn, setIsOn] = useState(false);

  return (
    <>
      <div className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              <a href="/">
                <span className="sr-only">Sun Collectors</span>
                <Image
                  priority
                  src="/images/sun-collectors-logo.png"
                  className="h-8"
                  height={129}
                  width={174}
                  layout="intrinsic"
                  alt="Sun Collectors Logo"
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                aria-expanded="false"
                onClick={(event) => {
                  props.handleOpen(true);
                  event.preventDefault();
                  setIsOn(true);
                }}
              >
                <span className="sr-only">Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            <nav className="hidden md:flex space-x-10">
              <a href="/" className={setActive("home" === props.active)}>
                Home
              </a>
              <a
                href="/about-us"
                className={setActive("about-us" === props.active)}
              >
                About Us
              </a>
              <a
                href="/partners"
                style={{ display: "none" }}
                className={setActive("partners" === props.active)}
              >
                Partners
              </a>
              <a
                href=""
                onClick={() =>
                  window.open("https://suncollectors.solar/", "_blank")
                }
                className={setActive("company" === props.active)}
              >
                Company
              </a>
            </nav>
            <div className="hidden mobile opacity-100 md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href="#"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium font-bold text-white bg-yellow-400 hover:bg-yellow-500"
              >
                Get Your Free Custom Design
              </a>
            </div>
          </div>
        </div>
        {/*
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
From: "opacity-0 scale-95"
To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
From: "opacity-100 scale-100"
To: "opacity-0 scale-95"
  */}
        <div
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          style={{ display: isOn ? "" : "none" }}
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Image
                    priority
                    src="/images/sun-collectors-logo.png"
                    className="h-8 w-auto"
                    height={129}
                    width={174}
                    layout="intrinsic"
                    alt="Sun Collectors Logo"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={(event) => {
                      props.handleOpen(false);
                      event.preventDefault();
                      setIsOn(false);
                    }}
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Close menu</span>
                    {/* Heroicon name: outline/x */}
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <a
                    href="/"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: solid/home */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0 text-blue-600"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Home
                    </span>
                  </a>
                  <a
                    href="/about-us"
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/sun */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      About Us
                    </span>
                  </a>

                  <a
                    href=""
                    onClick={(e) => {
                      e.preventDefault();
                      window.open("https://suncollectors.solar/", "_blank");
                    }}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                  >
                    {/* Heroicon name: outline/home */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="ml-3 text-base font-medium text-gray-900">
                      Company
                    </span>
                  </a>

                  <div className="space-y-6">
                    <div>
                      <p className="mt-6 text-base font-medium text-gray-500">
                        Run the Numbers
                      </p>

                      <a
                        href="#"
                        onClick={openCalendar}
                        className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium font-bold text-white bg-yellow-400 hover:bg-yellow-500"
                      >
                        Get a Free Custom Design
                      </a>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
