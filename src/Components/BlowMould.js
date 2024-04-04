import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { HashLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

function Products() {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const handleImageLoad = () => {
    // Set imagesLoaded to true when all images are loaded
    setImagesLoaded(true);
  };

  return (
    <div>
      <Header />
      {!imagesLoaded && (
        <div
          style={{ backgroundColor: "rgb(0,0,0,.5)" }}
          className="w-full h-full fixed flex justify-center items-center "
        >
          <HashLoader color="#36d7b7" />
        </div>
      )}
      <div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <h2 className="sr-only">Products</h2>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
              <a
                onClick={() => navigate("/BlowBottleDetail")}
                className="group cursor-pointer"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    onLoad={handleImageLoad}
                    src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/4396d040dda5e2be60d05e6cfae3d70a/large.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="h mt-4 text-lg text-[#52a8dd]">
                  {" "}
                  Bottles Blow Mould
                </h3>
                <p className="navt mt-1  text-gray-700">
                  Plastic bottle blow molding allows for customization of
                  bottle shape, size, and color to suit the specific needs of
                  the customer.
                </p>
              </a>
              <a
                onClick={() => navigate("/BlowCatDetail")}
                className="group cursor-pointer"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    onLoad={handleImageLoad}
                    src="https://5.imimg.com/data5/SELLER/Default/2023/4/299325791/XL/EY/WZ/13847221/whatsapp-image-2023-04-10-at-14-49-08-500x500.jpg"
                    alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="h mt-4 text-lg text-[#52a8dd]"> Cat Blow Mould</h3>
                <p className="navt mt-1  text-gray-700">
                  We are among the reputed organizations, deeply engaged in
                  offering an optimum quality range of Kids Toys Blow Mould.
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Products;






// import React, { useEffect } from "react";
// import Header from "./Header";
// import Footer from "./Footer";
// import {HashLoader} from "react-spinners"
// import { useNavigate } from "react-router-dom";


// function Products() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const navigate = useNavigate();
//   return (
//     <div>
     
//       <Header></Header>
//       <div style={{backgroundColor:"rgb(0,0,0,.5)"}} className="w-full h-full fixed flex justify-center items-center ">
//       <HashLoader  color="#36d7b7" />
//       </div>
//       <div>
//         <div class="bg-white">
//           <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//             <h2 class="sr-only">Products</h2>

//             <div class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//               <a
//                 onClick={() => navigate("/BlowBottleDetail")}
//                 class="group cursor-pointer"
//               >
//                 <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                   <img
//                     src="https://d2t1xqejof9utc.cloudfront.net/screenshots/pics/4396d040dda5e2be60d05e6cfae3d70a/large.jpg"
//                     alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//                     class="h-full w-full object-cover object-center group-hover:opacity-75"
//                   />
//                 </div>
//                 <h3 class="h mt-4 text-lg text-[#52a8dd]"> Bottles Blow Mould</h3>
//                 <p class="navt mt-1  text-gray-700">
//                   Plastic bottle blow molding allows for customization of bottle
//                   shape, size, and color to suit the specific needs of the
//                   customer.
//                 </p>
//               </a>
//               <a
//                 onClick={() => navigate("/BlowCatDetail")}
//                 class="group cursor-pointer"
//               >
//                 <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                   <img
//                     src="https://5.imimg.com/data5/SELLER/Default/2023/4/299325791/XL/EY/WZ/13847221/whatsapp-image-2023-04-10-at-14-49-08-500x500.jpg"
//                     alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
//                     class="h-full w-full object-cover object-center group-hover:opacity-75"
//                   />
//                 </div>
//                 <h3 class="h mt-4 text-lg text-[#52a8dd]"> Cat Blow Mould</h3>
//                 <p class="navt mt-1  text-gray-700">
//                 We are among the reputed organizations, deeply engaged in offering an optimum quality range of Kids Toys Blow Mould.
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer></Footer>
//     </div>
//   );
// }

// export default Products;
