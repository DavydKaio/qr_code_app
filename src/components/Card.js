import React from "react";
import image from "../assets/images/image-qr-code.png";

function Card() {
  return (
    <div className="bg-white drop-shadow-xl p-3 rounded-2xl w-72">
      <div>
        <img className="rounded-lg" src={image} alt="QR Code" />

        <div className="px-4 my-4">
          <h1 className="text-[#1f3251] font-outfit font-bold text-lg text-center mb-3">
            Improve your front-end skills by building projects
          </h1>
          <p className="text-[#7b879d] text-[15px] font-outfit font-normal text-center">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
