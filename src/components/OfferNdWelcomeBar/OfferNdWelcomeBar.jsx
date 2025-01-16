import React from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { LiaGripLinesVerticalSolid } from 'react-icons/lia'
import { LuPhoneCall } from 'react-icons/lu'
import { MdWavingHand } from 'react-icons/md'

const OfferNdWelcomeBar = () => {
  return (
    <div className="offer-welcome-container bg-green-500">
        <div className="contnt flex justify-between text-2xl font-semibold text-white py-3 px-10">
            <div className="location-info flex justify-center items-center gap-5 ">
                <div className="location flex items-center justify-center gap-2 ">
                    <p className='pb-1'>Location</p>
                    <FaLocationCrosshairs/>
                </div>
                <LiaGripLinesVerticalSolid/>
                <div className="info flex gap-2 items-center justify-center">
                   <p className='pb-1'>+3442432</p>
                   <LuPhoneCall/>
                </div>
            </div>
            <div className="running-offer-slider flex gap-5 items-center justify-center">
                <FaRegArrowAltCircleLeft/>
                <div className="offer-heading">
                    <p className='pb-1'>Free Shipping On All Orders Over $150</p>
                </div>
                <FaRegArrowAltCircleRight/>
            </div>
            <div className="welcome-message flex gap-2 items-center justify-center">
                <p className='pb-1'>Welcome To BechaKena</p>
                <MdWavingHand/>
            </div>
        </div>
    </div>
  )
}

export default OfferNdWelcomeBar