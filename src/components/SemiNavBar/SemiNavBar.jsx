import React from "react";
import { BiSolidDownArrow, BiSolidUpArrow } from "react-icons/bi";
import { IoChevronDownOutline } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";

const SemiNavBar = () => {
  return (
    <div className="semin-navbar-container">
      <div className="seminav-contents flex gap-2 justify-between px-16 py-5">
        <ul className="navlist flex gap-16 font-bold">
          <li className="flex gap-1 justify-center items-center">Home<IoChevronDownOutline/></li>
          <li className="flex gap-1 justify-center items-center">Pages<IoChevronDownOutline/></li>
          <li className="flex gap-1 justify-center items-center">Categories<IoChevronDownOutline /></li>
          <li className="flex gap-1 justify-center items-center">Shop<IoChevronDownOutline/></li>
          <li className="flex gap-1 justify-center items-center">Blog<IoChevronDownOutline/></li>
          <li className="flex gap-1 justify-center items-center">Help Center<IoChevronDownOutline/></li>
        </ul>
        <div className="countery-money-change flex gap-2">
          <div className="country-name-arrow flex gap-2 justify-center items-center">
            <div className="country-name flex gap-1 justify-center items-center">
              <LiaFlagUsaSolid className="text-xl"/>
              <p>EN</p>
            </div>
            <BiSolidUpArrow />
          </div>
          <div className="money-change flex gap-2">
            <div className="currency-name-sign flex gap-2">
                <p>INR,<spna>$</spna></p>
                <BiSolidDownArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SemiNavBar;
