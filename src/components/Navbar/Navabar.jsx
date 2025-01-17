import React from "react";
import { BsCart4 } from "react-icons/bs";

import { FaCaretDown, FaRegUserCircle,   } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
 
import { GoHeart } from "react-icons/go";

const Navabar = () => {
  return (
    <>
      <div className="container ">
        <div className="cntnt flex justify-around border">
          {/* part 1 */}
          <div className="user-profile-cart-love flex items-center  gap-3  ">


            <div className="user-profile transition-colors duration-200 ease-in-out hover:bg-black border rounded-full border-gray-500  ">
              <FaRegUserCircle className="text-5xl transition-colors duration-200 ease-in-out hover:text-white p-2"/>
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
            <p className="absolute top-[5px] left-[4px] text-xl bg-cyan-400 border-0 rounded-full w-6 h-6 flex items-center justify-center ">0</p>
           <div className="love-list ">
              <p >
                <GoHeart className="text-5xl transition-colors duration-200 ease-in-out hover:bg-black hover:text-white p-2 border rounded-full border-gray-500 "/>
              </p>
            </div>
           </div>
          </div>
          {/* done  */}

          <div className="search-bar flex">
            <form className="flex items-center border gap-3 border-gray-300 rounded-lg p-2">
              <FaMagnifyingGlass />

              <input
                type="text"
                placeholder="Search for products..."
                className="outline-none bg-transparent text-gray-700 w-full"
              />
            </form>
            <div className="category">
              <div className="dropdown">
                <div tabIndex={0} role="button" className="btn m-1">
                  <FaCaretDown /> Click
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
                >
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
          <div className="logo">
            <p>Bechakena.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navabar;
