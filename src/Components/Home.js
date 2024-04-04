import React, { useEffect, useState, } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Carousel, initTE } from "tw-elements";
import workex from "./workex.png";
import office from "./office.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
import Slide from "react-reveal/Slide";
import slidee from "../Images/slider1.png";
import slideee from "../Images/slider2.jpg";
import slideeee from "../Images/slider3.jpg";
import { useLocation } from "react-router-dom";
function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    initTE({ Carousel });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1500,
  };
  const initialClients = [
    // Initial set of clients
    "https://www.newdesigngroup.ca/ndgcnt/uploads/2014/11/1280px-Intel-logo.svg_.png",
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Screen-Shot-2022-05-23-at-12.45.30-PM-e1659040331310.png?auto=format&q=60&fit=max&w=930",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmaWDMvXHZTChh6Q4DJYk_vjVHTtvUM7rS34qSCtvPx1xRudUTzj3A0KSuK-jWV-VCQ8&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGkl59C6HzwEwWbbvLpYbCyY6-d0bx5GLpg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5oIG3A1xD7mJZiFQY5j0xLBOs9vH-q9ytw&usqp=CAU",
    "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Screen-Shot-2022-05-23-at-12.45.30-PM-e1659040331310.png?auto=format&q=60&fit=max&w=930",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmaWDMvXHZTChh6Q4DJYk_vjVHTtvUM7rS34qSCtvPx1xRudUTzj3A0KSuK-jWV-VCQ8&usqp=CAU",
    "https://www.newdesigngroup.ca/ndgcnt/uploads/2014/11/1280px-Intel-logo.svg_.png",
    "https://cdn.dribbble.com/users/3662891/screenshots/18611950/media/601b28954847a9a3a9fd49d4d952da36.jpg?resize=400x0",
    "https://media.designrush.com/inspiration_images/134925/conversions/_1511456150_191_merck-preview_mobile.jpg",
  ];

  const [clients, setClients] = useState(initialClients);
  const [showMore, setShowMore] = useState(false);

  const handleViewMore = () => {
    // Load and display 10 more clients
    const additionalClients = [
      "https://www.newdesigngroup.ca/ndgcnt/uploads/2014/11/1280px-Intel-logo.svg_.png",
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Screen-Shot-2022-05-23-at-12.45.30-PM-e1659040331310.png?auto=format&q=60&fit=max&w=930",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmaWDMvXHZTChh6Q4DJYk_vjVHTtvUM7rS34qSCtvPx1xRudUTzj3A0KSuK-jWV-VCQ8&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYGkl59C6HzwEwWbbvLpYbCyY6-d0bx5GLpg&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV5oIG3A1xD7mJZiFQY5j0xLBOs9vH-q9ytw&usqp=CAU",
      "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/05/Screen-Shot-2022-05-23-at-12.45.30-PM-e1659040331310.png?auto=format&q=60&fit=max&w=930",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCmaWDMvXHZTChh6Q4DJYk_vjVHTtvUM7rS34qSCtvPx1xRudUTzj3A0KSuK-jWV-VCQ8&usqp=CAU",
      "https://www.newdesigngroup.ca/ndgcnt/uploads/2014/11/1280px-Intel-logo.svg_.png",
      "https://cdn.dribbble.com/users/3662891/screenshots/18611950/media/601b28954847a9a3a9fd49d4d952da36.jpg?resize=400x0",
      "https://media.designrush.com/inspiration_images/134925/conversions/_1511456150_191_merck-preview_mobile.jpg",
    ];

    setClients([...clients, ...additionalClients]);
    setShowMore(true);
  };

  return (
    <div>
      <Header></Header>
      {/* <div className="fixed top-0 z-20">{scrollTop}</div> */}



      <div
        id="carouselExampleControls"
        class="relative "
        data-te-carousel-init
        data-te-ride="carousel"
      >
        {/* <!--Carousel items--> */}
        <div class="  relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {/* <!--First item--> */}
          <div
            class=" relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
            data-te-carousel-active
          >
            <img
            onClick={()=>navigate("/injectionmould")}
              src={slidee}
              // src="https://www.gogreenoverseas.com/img/slider1.jpg"
              class="block w-full cursor-pointer"
              alt="Wild Landscape"
            />
          </div>
          {/* <!--Second item--> */}
          <div
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
             onClick={()=>navigate("/injectionmould")}
              // src="https://www.gogreenoverseas.com/img/slider3.jpg"
              src={slideee}
              class="block w-full cursor-pointer"
              alt="Camera"
            />
          </div>
          {/* <!--Third item--> */}
          <div
          
            class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            data-te-carousel-item
          >
            <img
             onClick={()=>navigate("/injectionmould")}
              // src="https://www.gogreenoverseas.com/img/slider2.jpg"
              src={slideeee}
              class="block w-full cursor-pointer"
              alt="Exotic Fruits"
            />
          </div>
        </div>

        {/* <!--Carousel controls - prev item--> */}
        <button
          class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="prev"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Previous
          </span>
        </button>
        {/* <!--Carousel controls - next item--> */}
        <button
          class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-[black] opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-black hover:no-underline hover:opacity-90 hover:outline-none focus:text-black focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleControls"
          data-te-slide="next"
        >
          <span class="inline-block h-8 w-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </span>
          <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Next
          </span>
        </button>
      </div>
      {/* ----------------_Whatsapp Icon------------------ */}
      <div className="fixed bottom-10 right-10 z-10">
        <a
          href="whatsapp://send?phone=%2B918962662009"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i
            class="fa fa-whatsapp text-[green] text-[50px] text-highlight"
            aria-hidden="true"
          ></i>
        </a>
      </div>

      <Slide bottom>
        <div className="w-full flex flex-wrap   justify-evenly  lg:flex-row flex-col items-center  ">
          <div className="lg:w-[40%] w-[100%] flex items-center justify-center">
            <img className="w-[70%]" src={workex} alt="" />
          </div>
          <div className=" lg:w-[30%] w-[80%] flex items-center justify-center flex-col ">
            <b className="h text-[20px]">ISO 9001:2021 Certified Company</b>{" "}
            <br />
            <p className="t text-justify ">
              We are one of the leading manufacturersof moulds in Agri,
              Plumbing, SWR, Electrical, Automobile and house hold categoriesin
              different polymers like PVC, CPVC, PP-R, ABS, PP, HDPE etc. Our
              team of experienced engineers with the latest software
              capabilities are delivering best products to the customers.
              
            </p>
          </div>
        </div>
      </Slide>
      {/* ------------------------BG Image------------------------------- */}
      <Slide bottom>
        <div
          style={{
            height:
              (scrollTop > 384) & ((scrollTop - 384) / 10 < 100)
                ? `${(scrollTop - 384) / 10}vh`
                : scrollTop > 2036
                ? "0vh"
                : "100vh",
            position: scrollTop > 384 ? "fixed" : null,
            bottom: 0,
          }}
          className=" bg-cover lg:flex hidden bg-bottom bg-no-repeat w-full bg-[url('https://images.pexels.com/photos/757318/pexels-photo-757318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"
        >
          
        </div>
      </Slide>
      <Slide bottom>
        <div className="bg-cover lg:hidden block bg-bottom bg-no-repeat w-full bg-[url('https://images.pexels.com/photos/757318/pexels-photo-757318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')]"></div>
      </Slide>

      <div className="h-[100vh] lg:block hidden"></div>
      <Slide bottom>
        <div className="w-full bg-white  flex justify-center items-center flex-col lg:flex-row lg:mt-40 lg:pt-20 pt-0 mt-10 lg:gap-32 gap-10">
          {/* <img className="lg:w-[35%] w-[90%] mission-img" src={office} /> */}
          <div class="container lg:mt-0  mt-24">
            <div class="featured-img ">
              <img src={office} />
            </div>
          </div>

          <div className="flex lg:flex-col flex-col relative w-full gap-5 lg:w-[30%] lg:items-start items-center justify-center">
            <i
              class="fa fa-quote-left text-[50px] lg:left-0 left-4 absolute text-[#23abd4] top-[-10px]"
              aria-hidden="true"
            ></i>

            <label
              className="h lg:text-[40px] text-[30px] ml-1 z-10 text-highlight"
              htmlFor=""
            >
              {" "}
              Our Mission & Vision
            </label>
            <div className="flex flex-col w-[90%] lg:w-[100%] items-center">
              <p className="t text-justify">
                Our goal is to maximize efficiency and reduce costs for our
                clients through our experience, our sense of innovation and our
                cutting-edge equipment.
              </p>
            </div>
          </div>
        </div>
      </Slide>
     <div className="anit">
     <div className=" w-full bg-white  relative flex flex-row items-center gap-2 lg:gap-2 justify-center mt-20 lg:mt-0 lg:pt-32 pt-0 mb-4 lg:mb-0 lg:pb-10">
        <div className="h-[2px] bg-[#52a8dd] w-[22%]"></div>

        <div className="h lg:text-[40px] text-[28px] capitalize">
          Our Products
        </div>
        <div className="h-[2px] bg-[#52a8dd] w-[22%]"></div>
      </div>
     <div className="lg:w-[99%] overflow-hidden">
        <Slider {...settings}>
          <div className="">
            {/* Your content for the first item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img1.jpg"
              alt=""
            />
          </div>
          <div>
            {/* Your content for the second item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
              alt=""
            />
          </div>
          <div>
            {/* Your content for the third item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img3.jpg"
              alt=""
            />
          </div>
          <div>
            {/* Your content for the first item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img8.jpg"
              alt=""
            />
          </div>
          <div>
            {/* Your content for the second item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img7.jpg"
              alt=""
            />
          </div>
          <div>
            {/* Your content for the first item */}
            <img
              src="https://www.gogreenoverseas.com/img/gallery/img8.jpg"
              alt=""
            />
          </div>
          {/* Add more items as needed */}
        </Slider>{" "}
      </div>
     </div>
     
      

      <br />
      <Slide bottom>
        <div className="w-full flex justify-center mt-0 lg:mt-5">
          <button
            type="button"
            class=" mt-5 focus:outline-none text-white bg-[#976aa8] hover:bg-[#976aa8]-800 focus:ring-4 focus:ring-[#976aa8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#976aa8] dark:hover:bg-[#976aa8] dark:focus:ring-[#976aa8]"
          >
            View More
          </button>
        </div>
      </Slide>

      <Slide bottom>
        <div className=" w-full flex flex-row items-center gap-2 justify-center mt-20 lg:mt-32 ">
          <div className="h-[2px] bg-[#52a8dd] w-[22%] "></div>
          <div className="h  lg:text-[40px] [28px]">Our Satisfied Clients</div>
          <div className="h-[2px] bg-[#52a8dd] w-[22%] "></div>
        </div>
      </Slide>
      <Slide bottom>
        <div className="flex flex-col gap-8 mb-0 lg:mb-32">
          <div className="ml-[5%] flex flex-wrap w-[90%] mt-10 ">
            {clients.map((client, index) => (
              <div
                className="lg:w-[20%] w-[50%] h-[150px] border flex justify-center items-center lg:opacity-40 lg:hover:opacity-100   "
                key={index}
                style={{}}
              >
                <img className=" h-[50%] " src={client} />
              </div>
            ))}
          </div>
          {!showMore && (
            <div className="w-full flex justify-center">
              <button
                onClick={handleViewMore}
                style={{ marginTop: "10px" }}
                type="button"
                class="  mt-5 focus:outline-none text-white bg-[#976aa8] hover:bg-[#976aa8] focus:ring-4 focus:ring-[#976aa8] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#976aa8] dark:hover:bg-[#976aa8] dark:focus:ring-[#976aa8]"
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </Slide>
      <Slide bottom>
        <div>
          <ReactPlayer
            volume={0}
            url=" https://youtu.be/eoaTl8Q0PQc?si=cUHzRf3h4zJVP4Bn"
            controls={true}
            width="100%"
            height="100vh"
            playing
          />
        </div>
      </Slide>
      <Slide bottom>
        <div
          style={{ backgroundColor: "#52a8dd" }}
          className="w-full lg:h-[100vh] h-[60vh] flex lg:flex-row flex-col lg:justify-center justify-around items-center my-10 lg:my-0"
        >
          <div className="lg:w-[50%] w-[90%] lg:h-[100%] flex justify-center items-center">
            <img src="https://www.gogreenoverseas.com/img/map.png" alt="" />
          </div>
          <div className="lg:w-[30%] w-[90%] lg:h-[100%] flex flex-col  justify-center lg:items-center items-start">
            <h1 className="h  lg:text-[50px] text-[30px]"> Global Presence</h1>
            <label htmlFor=""> We have exports all around the world</label>
            <label className="t text-justify" htmlFor="">
              We have vast experience in the field of Die Moulding Field, with
              the experience of time we know what customer need from us. We have
              Equipment and necessary infrastructure to become market leader.
            </label>
          </div>
        </div>
      </Slide>
      <Slide bottom>
        <div className="w-full bg-red-300">{/* <Maps></Maps> */}</div>
      </Slide>
      <iframe
        className="w-full lg:my-0  my-10"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.0593383527184!2d75.85060339566634!3d22.76317905545713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396302622cdc54fb%3A0x13d359b4d60c72ca!2sVISHAL%20ENGINEERING%20WORKS!5e0!3m2!1sen!2sin!4v1701855325780!5m2!1sen!2sin"
        width="800"
        height="600"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <Footer></Footer>
    </div>
  );
}

export default Home;
