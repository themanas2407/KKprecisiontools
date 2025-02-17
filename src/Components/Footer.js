import React from "react";
import dummy from "./logo.png";

function Footer() {
  return (
    <div>
      <footer class="bg-[#52a8dd] shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div class="sm:flex sm:items-center sm:justify-between">
            <a
              href="https://flowbite.com/"
              class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              {/* <img
                src={dummy}
                class="h-8"
                alt="KK Logo"
              /> */}
              <span class="h self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KK Precision Tools
              </span>
            </a>
            <div className="text-[black]">
            <label className="t"><i class="fa fa-phone" aria-hidden="true"></i> +91 8962662009</label> <br />
            <label className="t"><i class="fa fa-envelope-o" aria-hidden="true"></i>kkprecisiontools23@gmail.com</label> 
            </div>
            <label className="h tracking-wide text-black">
            Sanwer Industrial Area Road Ganesh Dham Colony,
            <br /> Sanver Road Industrial Area Indore, 452015 <br />
            Madhya Pradesh India
            </label>
            {/* <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul> */}
          </div>
          <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a href="" class="hover:underline">
              KK precision tools
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
