import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slide from 'react-reveal/Slide';
import edm from "../webphotos/machinery photos/edm machine.webp";
import lath from "../webphotos/machinery photos/lath machine.jpg";


function Products() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div>
      <Header></Header>
      <div>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://static.wixstatic.com/media/c89941_0a1e42c179134a6ea11c024d438d4a81~mv2_d_3555_2000_s_2.jpg/v1/fill/w_2500,h_1406,al_c/c89941_0a1e42c179134a6ea11c024d438d4a81~mv2_d_3555_2000_s_2.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Cast Iron VMC 800 Machine
                </h3>
              </a>
              
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg bg-gray-200">
                  <img
                    src={edm}
                    alt="EDM Machine"
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                  H4030S | HCM CNC EDM machine
                </h3>
              </a>

             
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://www.newdilip.com/images/lathe_machines/machine7_lg.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Dilip All Geared Precision Lathe Machine DGH-1 1 hp 1440 rpm
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://www.lokeshmachines.com/documents/TL20.jpg_073615.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                CNC Lathes TL 20 Machine
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://sahiltechnocrats.co.in/images/products/cnc-vertical-centre-machine5.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Vertical Machining Centres (VMC)
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://ravimachines.com/wp-content/uploads/2016/07/milling-machine-5-scaled.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Vertical and Horizontal Milling Machine
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2020/11/DJ/ZD/YS/1206237/surface-grinder-machine-size-12-x-24.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Surface Grinder
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://www.arvisengineers.com/files/pictures/turnmax35.jpg"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Turnmax Lathe Machine
                </h3>
              </a>
              <a href="#" class="group">
                <div class="border h-[300px] overflow-hidden rounded-lg  bg-white">
                  <img
                    src="https://image.made-in-china.com/2f0j00EtiYKfzrRSou/Heavy-Duty-Universal-Milling-Machine-X6140-China-Horizontal-Milling-Machine.webp"
                    alt="Lathe Machine"
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd]">
                Heavy Duty Universal Milling Machine X6140 China Horizontal Milling Machine
                </h3>
              </a>
        

            </div>
          </div>
        </div>
      </div>
      {/* <div>
      
      

        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>
          
            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              
              <a href="#" class="group ">
                <div class=" border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={edm}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-contain object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd] ">
                H4030S | HCM
CNC EDM machine
                </h3>
              
              </a>
              
              <a href="#" class="group ">
                <div class=" border aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.newdilip.com/images/lathe_machines/machine7_lg.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h flex items-center h-[15%] mt-4 text-lg text-[#52a8dd] ">
                H4030S | HCM
CNC EDM machine
                </h3>
              
              </a>
              
            </div>
          
          </div>
        </div>
      </div> */}
      <Footer></Footer>
    </div>
  );
}

export default Products;
