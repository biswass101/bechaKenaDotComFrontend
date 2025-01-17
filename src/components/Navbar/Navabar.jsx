import React from "react";
import { BsCart4 } from "react-icons/bs";

import { FaCaretDown, FaRegUserCircle,   } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
 
import { GoHeart } from "react-icons/go";
import { ImSearch } from "react-icons/im";

import siteLogo from '../../assets/bechaKenaLogo-removebg-preview.png'
import SemiNavBar from "../SemiNavBar/SemiNavBar";

const Navabar = () => {
  return (
    <>
      <div className="container ">
        <div className="cntnt flex justify-around items-center">
          {/* part 1 */}
          <div className="user-profile-cart-love flex items-center  gap-3  ">
            <div className="user-profile transition-colors duration-200 ease-in-out hover:bg-black border rounded-full border-gray-500  ">
              <FaRegUserCircle className="text-5xl transition-colors duration-200 ease-in-out hover:text-white p-2" />
            </div>

            <div className="money-cart flex justify-center items-center gap-3 py-2  px-5  border  rounded-full border-gray-400">
              <p className="text-xl font-bold">
                $<span>0.00 </span>
              </p>

              <div className="bg-black p-2 rounded-full">
                <BsCart4 className="text-2xl text-white  " />
              </div>
            </div>
            {/* heart */}
            <div className="count-heart-container relative p-2  ">
              <p className="absolute top-[5px] left-[4px] text-xl bg-cyan-400 border-0 rounded-full w-6 h-6 flex items-center justify-center ">
                0
              </p>
              <div className="love-list ">
                <p>
                  <GoHeart className="text-5xl transition-colors duration-200 ease-in-out hover:bg-black hover:text-white p-2 border rounded-full border-gray-500 " />
                </p>
              </div>
            </div>
          </div>
          {/* done  */}

          <div className="search-bar bg-white border p-1 border-gray-300 flex justify-between items-center rounded-full w-[50%]">
            <div className="seatc-icon-container bg-blue-600 transition-colors duration-200 ease-in-out hover:bg-black hover:text-white rounded-full p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="white"
              >
                <path d="M80-140v-320h320v320H80Zm80-80h160v-160H160v160Zm60-340 220-360 220 360H220Zm142-80h156l-78-126-78 126ZM863-42 757-148q-21 14-45.5 21t-51.5 7q-75 0-127.5-52.5T480-300q0-75 52.5-127.5T660-480q75 0 127.5 52.5T840-300q0 26-7 50.5T813-204L919-98l-56 56ZM660-200q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29ZM320-380Zm120-260Z" />
              </svg>
            </div>
            <div className="seaarch-ipt-category flex gap-2 justify-between w-[80%]">
              <form className="flex items-center border border-none gap-3  rounded-lg w-[80%]">
                <input
                  type="text"
                  placeholder="Search for keywords, Products..."
                  className="outline-none bg-transparent text-gray-700 w-full border-none"
                />
              </form>
              <div className="category w-[40%] bg-transparent rounded-r-full">
                <div className="dropdown w-full">
                  <div tabIndex={0} role="button" className="btn w-full rounded-full bg-black text-white hover:bg-black hover:text-white">
                    <FaCaretDown /> Choose Category
                  </div>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                  >
                    <input 
                      type="text"
                      placeholder="Search Category"
                      className="outline-none rounded-full p-2 text-right placeholder:p-2 bg-transparent border border-gray-700 text-gray-700 w-full"
                    />
                    <li>
                      <a>Item 1</a>
                    </li>
                    <li>
                      <a>Item 2</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="search-bar">
            <div className="search-icon">

            </div>
            <div className="search-text">
              
            </div>
            <div className="category-select">

            </div>
          </div> */}
          <div className="logo">
            <img src={siteLogo} alt={'site logo'} className="w-32"/>
          </div>
        </div>
      </div>
      <SemiNavBar/>
    </>
  );
};

export default Navabar;
