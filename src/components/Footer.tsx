import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className=" text-white py-20 font-sans cursor-default">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p className="text-lg font-medium animate-fadeIn opacity-0">
            &copy; 2024 - {new Date().getFullYear()} Muhammad Sarim. All rights
            reserved.
          </p>
        </div>

        <div className="flex space-x-6 justify-center md:justify-start">
          <Link href="https://github.com/SarimArain99" target="_blank">
            <div className="hover:bg-white rounded-xl duration-500 p-2 animate-fadeIn opacity-0">
              <svg
                className="h-14 w-14 text-white hover:text-black transition duration-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </div>
          </Link>
          <Link href="https://www.linkedin.com/in/muhammad-sarim-arain-b3795a2ba/" target="_blank">
            <div className="hover:bg-blue-700 rounded-xl duration-500 p-2 animate-fadeIn opacity-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                className="h-14 w-14 hover:fill-white transition duration-500"
              >
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
