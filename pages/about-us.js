import Navbar from "../components/navbar.js";

const AboutUs = () => {
  return (
    <>
      <Navbar active="about-us" />

      <>
        {/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/typography'),
    ]
  }
  ```
*/}
        <div className="py-16 bg-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 space-y-8 sm:px-6 lg:px-8">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                Cville Native
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Welcome to Sun Collectors @ Cville Solar
              </p>
            </div>
            <div className="relative z-10 text-base max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
              <p className="text-lg text-gray-500">
                We are essentially project managers for your solar system, using
                our experience in thousands of builds to get you not only the
                best panels, fittings, inverters and couplings at the best
                price, but also to take care of building permits, installation
                coordination, local engineering code and ordinance, licensing
                and insurance.
              </p>
            </div>
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start">
              <div className="relative z-10">
                <div className="prose prose-indigo text-gray-500 mx-auto lg:max-w-none">
                  <p>
                    We focus on making going solar as easy and painless for you
                    as possible. We make sure your system design will not only
                    last decades, but makes sense financially, too.
                  </p>
                  <ul>
                    <li>
                      We work with you to design and build the right solar
                      system for your needs.
                    </li>
                    <li>
                      We can work with you to find the best financing plan to
                      ensure your solar system is not only beautiful, but
                      profitable as well.
                    </li>
                    <li>
                      We take care of you even after installation. We constantly
                      monitor your system for any issues, and reach out to
                      schedule a time for our engineers to repair your system.
                      Oh yeah, and all components are under warranty for 25
                      years and the labor is free.
                    </li>
                  </ul>
                  <h3>Save money. Save our planet.</h3>
                </div>
                <div className="mt-10 flex text-base max-w-prose mx-auto lg:max-w-none">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Get your free custom design
                    </a>
                  </div>
                  <div className="rounded-md shadow ml-4">
                    <a
                      href="/#find-out-more"
                      className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
                <svg
                  className="absolute top-0 right-0 -mt-20 -mr-20 lg:top-auto lg:right-auto lg:bottom-1/2 lg:left-1/2 lg:mt-0 lg:mr-0 xl:top-0 xl:right-0 xl:-mt-20 xl:-mr-20"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="bedc54bc-7371-44a2-a2bc-dc68d819ae60"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-gray-200"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#bedc54bc-7371-44a2-a2bc-dc68d819ae60)"
                  />
                </svg>
                <blockquote className="relative bg-white rounded-lg shadow-lg">
                  <div className="rounded-t-lg px-6 py-8 sm:px-10 sm:pt-10 sm:pb-8">
                    <div className="relative text-lg text-gray-700 font-medium mt-8">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        aria-hidden="true"
                      >
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="relative">
                        I have dealt with a lot of customer service in my life
                        but the customer service at Sun collectors is top notch!
                        Kate was awesome and handled everything I ever asked for
                        or needed with such a great attitude. It felt like
                        family.
                      </p>
                    </div>
                  </div>
                  <cite className="relative flex items-center sm:items-start bg-indigo-600 rounded-b-lg not-italic py-5 px-6 sm:py-5 sm:pl-12 sm:pr-10 sm:mt-10">
                    <div className="relative rounded-full border-2 border-white sm:absolute sm:top-0 sm:transform sm:-translate-y-1/2">
                      <img
                        className="w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-indigo-300"
                        src="/images/chris-testimonial.jpg"
                        alt
                      />
                    </div>
                    <span className="relative ml-4 text-indigo-300 font-semibold leading-6 sm:ml-24 sm:pl-1">
                      <p className="text-white font-semibold sm:inline">
                        Chris A{" "}
                      </p>
                      <p className="sm:inline">Generating free solar power</p>
                    </span>
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AboutUs;
