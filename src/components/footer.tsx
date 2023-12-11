import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
                COMPANY
              </h2>
              <nav className="list-none mb-10 mt-4">
                <li>
                  <Link
                    href={"/"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Contact us
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
                Services
              </h2>
              <nav className="list-none mb-10 mt-4">
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Branding
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Advertisement
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="scroll-m-20 text-lg font-semibold tracking-tight text-myBlackHead">
                Legal
              </h2>
              <nav className="list-none mb-10 mt-4">
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Terms of use
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
                  >
                    Cookie policy
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">
                SUBSCRIBE
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  <label
                    htmlFor="footer-field"
                    className="text-xs font-semibold tracking-tight text-myBlackpara
                    hover:text-myBlackpara/70"
                  >
                    Your Email here:
                  </label>
                  <input
                    type="text"
                    id="footer-field"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border
                     border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200
                      focus:border-black hover:border-black text-base outline-none text-gray-700 py-1 px-3 
                      leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-myWhite bg-myBlackpara border-0 py-2 px-6 focus:outline-none hover:bg-myBlackHead rounded">
                  Get Notified
                </button>
              </div>
              <p
                className="mt-2 md:text-left text-center text-base font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70"
              >
                Please provide us your email
                <br className="lg:block hidden" />
                to get notified me exciting promos
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image
                src={require("../../public/Logo.webp")}
                alt={"NavbarPics"}
                height={100}
                width={100}
                className="w-40 pl-5"
              />
            </a>
            <p
              className="text-xs cursor-pointer font-semibold tracking-tight text-myBlackpara
                   hover:text-myBlackpara/70 sm:ml-6 sm:mt-0 mt-4"
            >
              © 2024 Dinemart-shopping
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </div>
        <h1>Video Page</h1>
      </footer>
    </div>
  );
};

export default Footer;
