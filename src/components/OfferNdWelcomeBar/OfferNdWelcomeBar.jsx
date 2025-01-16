import React from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa'
import { FaLocationCrosshairs } from 'react-icons/fa6'
import { LiaGripLinesVerticalSolid } from 'react-icons/lia'
import { LuPhoneCall } from 'react-icons/lu'
import { MdWavingHand } from 'react-icons/md'

const OfferNdWelcomeBar = () => {
  return (
    <div className="offer-welcome-container  bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  ">
        <div className="contnt flex justify-between   font-semibold py-2 px-10 text-white">
            <div className="location-info flex justify-center items-center gap-5 ">
                <div className="location flex items-center justify-center gap-2 ">
                    <p >Location</p>
                    <FaLocationCrosshairs/>
                </div>
                <LiaGripLinesVerticalSolid/>
                <div className="info flex gap-2 items-center justify-center">
                   <p >+3442432</p>
                   <LuPhoneCall/>
                </div>
            </div>
            <div className="running-offer-slider flex gap-5 items-center justify-center">
                <FaRegArrowAltCircleLeft className='text-2xl'/>
                <div className="offer-heading">
                    <p >Free Shipping On All Orders Over $150</p>
                </div>
                <FaRegArrowAltCircleRight className='text-2xl'/>
            </div>
            <div className="welcome-message flex gap-2 items-center justify-center">
                <p >Welcome To BechaKena</p>
                <MdWavingHand/>
            </div>
        </div>
    </div>
  )
}

export default OfferNdWelcomeBar