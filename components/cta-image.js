import Image from "next/image";
import { openPopupWidget } from "react-calendly";

const CtaImage = () => {
  const url = "https://calendly.com/nathaniel-at-sun-collectors/15min";
  const openCalendar = (event) => {
    event.preventDefault();
    openPopupWidget({ url });
  };

  return (
    <>
      <div className="relative bg-blue-600">
        <div className="h-56 bg-gray-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <Image
            priority
            src="/images/single-house-solar.jpg"
            className="w-full h-full object-cover"
            layout="fill"
            alt="Beautiful house with solar panels"
          />
          <div
            className="absolute inset-0 md:bg-gray-300 bg-gray-500"
            style={{ mixBlendMode: "multiply" }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="md:ml-auto md:w-1/2 md:pl-10">
            <h2 className="text-base font-semibold uppercase tracking-wider text-gray-300">
              Talk is cheap
            </h2>
            <p className="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              Get a custom design for free
            </p>
            <p className="mt-3 text-lg text-gray-300">
              Schedule a free consultation at a time that works for you, get a
              look at the design proposal and run the numbers. If it doesn't
              make sense, no harm done. <br /> Don't leave money on the table -
              lower your bills and save the planet at the same time.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <a
                  href="#"
                  onClick={openCalendar}
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium font-extrabold rounded-md text-gray-600 bg-yellow-200 hover:bg-gray-50"
                >
                  Schedule a Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaImage;
