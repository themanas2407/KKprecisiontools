import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import capMould from "../webphotos/pet moulds/pet bpttel moulds.png";
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
                onClick={() => navigate("/PetBottleDetail")}
                class="group cursor-pointer"
              >
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://5.imimg.com/data5/SELLER/Default/2023/8/338230747/DM/GK/RZ/130624909/bottle-blowing-machine-500x500.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">PET Mould</h3>
                <p class="navt mt-1  text-gray-700">
                Plastic bottle blow molding allows for customization of bottle shape, size, and color to suit the specific needs of the customer.
                </p>
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
