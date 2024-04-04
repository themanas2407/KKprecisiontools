import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Slide from 'react-reveal/Slide';


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
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img8.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Gravity Die Casting
                </h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam, dolorum nesciunt.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">Foam Mould</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>{" "}
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class=" h mt-4 text-lg text-[#52a8dd]">VMC Work</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img1.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Machined Mechanical Pencil
                </h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img8.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Gravity Die Casting
                </h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam, dolorum nesciunt.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">Foam Mould</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>{" "}
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class=" h mt-4 text-lg text-[#52a8dd]">VMC Work</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img1.jpg"
                    alt="Hand holding black machined steel mechanical pencil with brass tip and top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">
                  Machined Mechanical Pencil
                </h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Olive drab green insulated bottle with flared screw lid and flat top."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class="h mt-4 text-lg text-[#52a8dd]">Foam Mould</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
                </p>{" "}
              </a>
              <a href="#" class="group">
                <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 class=" h mt-4 text-lg text-[#52a8dd]">VMC Work</h3>
                <p class="t mt-1  text-gray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  est magnam.
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
