import React, { useState } from "react";
import dummy from "./kkk.png";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuBar, setMenuBar] = useState(false);
  const [productBar, setProductBar] = useState(false)
  
  
  return (
    <>
      <div className=  " shadow-lg w-[100%] lg:w-[100%] h-[10vh] flex flex-row items-center justify-between sticky top-0 z-10 bg-white">
        <div className="lg:w-[15%] w-[30%]  lg:ml-0 ml-3 h-[100%] flex items-center justify-center ">
          <img
            onClick={() => navigate("/")}
            className="lg:h-[10vh]  h-[8vh]  cursor-pointer "
            src={dummy}
          />
        </div>
        <div className=" navt z-10 relative  w-[50%] h-[100%] lg:flex hidden items-center flex-row justify-evenly font-bold">
          <ul id="primary">
            <li>
              <label
                style={{ colo: "black", zIndex: 100 }}
                onClick={() => navigate("/")}
              >
                Home
              </label>
            </li>
            <li className="product-bar-open">
              <label  onClick={() => navigate("/InjectionMould")}>Products</label>
              <div className="bar hidden lg:flex shadow-lg bg-white gap-4 w-[200px] justify-center flex-col absolute top-[30px] left-[-55px] rounded ">
              <label onClick={()=>navigate("/injectionmould")}>Injection Mould</label>
              <label onClick={()=>navigate("/blowmould")}>Blow Mould</label>
              <label onClick={()=>navigate("/petmould")}>Pet Mould</label>
            </div>
            </li>
            
            <li>
              <label onClick={()=>navigate("/Infrastructure")}>Infrasture</label>
            </li>
            <li>
              <label onClick={() => navigate("/contact")}>Contact us</label>
            </li>
          </ul>
        </div>
        <div className="  w-[15%] h-[100%] lg:flex hidden items-center justify-evenly text-[18px]">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>
        <div className="lg:hidden mr-3 text-[20px] flex bg-white text-black h-[40px] w-[50px] items-center justify-center">
          {menuBar == false ? (
            <i
              onClick={() => setMenuBar(true)}
              class="fa fa-bars"
              aria-hidden="true"
            ></i>
          ) : (
            <b onClick={() => setMenuBar(false)} className="  ">
              x
            </b>
          )}
        </div>
      </div>

      <div
        className={`fixed z-[2] ${
          menuBar ? "menu" : "menu-div-close"
        } top-[10vh] absolute w-full h-[40vh] bg-white lg:hidden items-center flex flex-col`}
      >
        <div className=" navt  w-[90%] text-black h-[100%] flex items-center flex-col justify-evenly font-bold">
          <b className="  cursor-pointer  " onClick={() => navigate("/")}>
            Home
          </b>
          {/* <b className=" cursor-pointer " >Corporate</b> */}
          <b className=" cursor-pointer " onClick={() => {navigate("/injectionmould"); setProductBar(!productBar)}}>
            {" "}
            Injection Mould
          </b>
          <b className=" cursor-pointer " onClick={() => {navigate("/blowmould"); setProductBar(!productBar)}}>
            {" "}
            Blow Mould
          </b>
          <b className=" cursor-pointer " onClick={() => {navigate("/petmould"); setProductBar(!productBar)}}>
            {" "}
           Pet Mould
          </b>
          
          {/* <div style={{ height: productBar ? 100 : 0}} className=" justify-evenly flex overflow-hidden relative top-0 transition-all duration-[1000] flex-col items-center">
          <label onClick={()=>navigate("/injectionmould")}>Injection Mould</label>
              <label onClick={()=>navigate("/blowmould")}>Blow Mould</label>
              <label onClick={()=>navigate("/petmould")}>Pet Mould</label>
          </div> */}
          <b className="  cursor-pointer " onClick={() => navigate("/infrastructure")}>Infrastructure</b>
          <b className=" cursor-pointer " onClick={() => navigate("/contact")}>
            Contact Us
          </b>
        </div>
        <div className=" w-[90%] h-[20%] flex lg:flex items-center justify-evenly ">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
        </div>
      </div>
    </>
  );
}

export default Header;
