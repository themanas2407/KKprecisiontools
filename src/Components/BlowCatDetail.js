import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import blow from "../webphotos/blow moulds/plastic can blow moulds.webp"

function ElectricFittingDetail() {
  const [mainImage, setMainImage] = useState(
    "https://5.imimg.com/data5/SELLER/Default/2023/4/299325791/XL/EY/WZ/13847221/whatsapp-image-2023-04-10-at-14-49-08-500x500.jpg"
  );
  const [slider, setSlider] = useState(0);
  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };
  return (
    <div>
      <Header></Header>
      <section class="py-10 font-poppins dark:bg-gray-800">
        <div class="max-w-6xl px-4 mx-auto">
          <div class="flex flex-wrap mb-24 -mx-4">
            <div class="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div class="sticky top-0 overflow-hidden ">
                <div class="relative mb-6 lg:mb-10 lg:h-96 flex items-center">
                 
                  <div className="w-[90%] overflow-hidden lg:h-full">
                    <div
                      
                      className="w-[300%] lg:h-full flex duration-300"
                    >
                      <img
                        class="object-contain w-[33.33%] lg:h-full rounded-xl"
                        src={mainImage}
                        alt=""
                      />
                  
                    </div>
                  </div>

                  
                </div>
                
              </div>
            </div>
            <div class="w-full px-4 md:w-1/2">
              <div class="lg:pl-20">
                <div class="mb-6 ">
                  <span class="px-2.5 py-0.5 text-xs text-blue-600 bg-blue-100 dark:bg-gray-700 rounded-xl dark:text-gray-200">
                    Pet Mould
                  </span>
                  <h2 class="h max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                    Cat Blow Mould
                    {/* {slider} */}
                  </h2>

                  <p class="navt inline-block  font-semibold text-gray-700 dark:text-gray-400 ">
                    <span>
                   Cat blow molding is a
                      cost-effective manufacturing process compared to other
                      methods such as injection molding or thermoforming. <br />
                      
                    </span>
                  </p>
                </div>
                <div class="mb-6">
                  <h2 class="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">
                    Features :
                  </h2>
                  <div class="bg-gray-100 dark:bg-gray-700 rounded-xl">
                    <div class="p-3 lg:p-5 ">
                      <div class="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                        <div class="flex flex-wrap justify-center gap-x-10 gap-y-4">
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-diagram-3 w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path
                                    fill-rule="evenodd"
                                    d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H14a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 2 7h5.5V6A1.5 1.5 0 0 1 6 4.5v-1zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1zM0 11.5A1.5 1.5 0 0 1 1.5 10h1A1.5 1.5 0 0 1 4 11.5v1A1.5 1.5 0 0 1 2.5 14h-1A1.5 1.5 0 0 1 0 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5A1.5 1.5 0 0 1 7.5 10h1a1.5 1.5 0 0 1 1.5 1.5v1A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-1zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
                                  ></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Crack resistance
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-gpu-card w-7 h-7"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M4 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm7.5-1.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"></path>
                                  <path d="M0 1.5A.5.5 0 0 1 .5 1h1a.5.5 0 0 1 .5.5V4h13.5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H2v2.5a.5.5 0 0 1-1 0V2H.5a.5.5 0 0 1-.5-.5Zm5.5 4a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM9 8a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"></path>
                                  <path d="M3 12.5h3.5v1a.5.5 0 0 1-.5.5H3.5a.5.5 0 0 1-.5-.5v-1Zm4 1v-1h4v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Excellent finishing
                                </p>
                              </div>
                            </div>
                          </div>
                          <div class="w-full mb-4 lg:mb-0 md:w-2/5">
                            <div class="flex ">
                              <span class="mr-3 text-gray-500 dark:text-gray-400">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="w-7 h-7 bi bi-cpu"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3zM6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"></path>
                                </svg>
                              </span>
                              <div>
                                <p class="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                  Enhanced durability
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>{" "}
    </div>
  );
}

export default ElectricFittingDetail;
