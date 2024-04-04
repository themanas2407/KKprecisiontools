import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slide from "react-reveal/Slide";
import capMould from "../webphotos/injection moulds/cap mould.webp";
import fan from "../webphotos/injection moulds/fan blade moulds.jpg";

import { useNavigate } from "react-router-dom";

function Products() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <div>
        <div class="bg-white">
          <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a
                onClick={() => navigate("/CapMouldDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={capMould}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">Cap Mould</h3>
                <p class="navt mt-1  text-gray-700">
                  Discover precision-crafted plastic cap molds designed for
                  seamless manufacturing and consistent.
                </p>
              </a>
              <a
                onClick={() => navigate("/electricfittingdetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    // src="https://go4mould.com/wp-content/uploads/2021/12/pvc-pipe-fitting-mould-detail-1.jpg"
                    src="https://go4mould.com/wp-content/uploads/2022/02/pipe-fitting-mould-detail-2.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Electrical Fitting Moulds
                </h3>
                <p class="navt mt-1  text-gray-700">
                  Moulds are used in moulding machine produce the electrical
                  fitting, Which used in electrical wiring and application.{" "}
                </p>
              </a>
              <a
                onClick={() => navigate("/fanblademoulddetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={fan}
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">Fan Blade Mould</h3>
                <p class="navt mt-1  text-gray-700">
                  Plastic Injection Mold 3 Leaf Fan Blade Mould 3 Leaf Fan
                  Impeller Mould Heromould
                </p>
              </a>
              <a
                onClick={() => navigate("/FlipTopDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://cdn.adsalecdn.com/onlineExhibitorDatabase/EMP/285445/285445_1_230106163915.jpg?x-oss-process=image/resize,h_1500,limit_1/format,webp"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Flip Top Cap Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                  We are offering an outstanding assortment of Flip Top Plastic
                  Bottle Cap Mould.
                </p>
              </a>
              <a
                onClick={() => navigate("/JunctionBoxDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2022/3/FB/LY/GI/57034/junction-box-mould-500x500.jpeg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Deep Junction Box Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                  We are manufacturer and exporter of Vertical plastic injection
                  moulding machine and plastic injection moulds.
                </p>
              </a>
              <a
                onClick={() => navigate("/plasticspoutdetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://cpimg.tistatic.com/08239027/b/4/Plastic-Spout-Mould.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                Plastic Spout Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                The main aim of this article is the mould design for production of plastic spout cap with inner thread by injection moulding technology
                </p>
              </a>
              <a
                onClick={() => navigate("/PesticidesCapDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://4.imimg.com/data4/RL/IW/MY-23090903/plastic-cap-molded-500x500.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                Pesticides Plastic Cap Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                Relying on our expertise in this domain, we are into offering Plastic Cap Molded .                </p>
              </a>
              <a
                onClick={() => navigate("/Torchbodydetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://5.imimg.com/data5/EX/WJ/MY-53043775/torch-body-plastic-mould-die.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                Torch Body Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                We are successfully meeting the varied needs of our patrons by offering a wide gamut of Torch Body Plastic Moulding  as per their precise needs.                </p>
              </a>
              <a
                onClick={() => navigate("/ToysMouldDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2021/3/DD/NG/EP/4604382/plastic-toy-mould-500x500.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-[25vh] w-full object-cover group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                 Toys Mould
                </h3>
                <p class="navt mt-1  text-gray-700">
                In order to meet the various requirements of the customers, we are engaged in offering a wide assortment of Custom Plastic Toy Mould.                           </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Products;
