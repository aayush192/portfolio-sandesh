import React from "react";
export default function ProfileImage() {
    return (
      <div className="md:w-1/2 flex justify-center">
        <img
          src="./san.jpeg"
          alt="Aayush Khadka"
          className="w-64 h-64 rounded-2xl shadow-xl object-cover"
        />
      </div>
    );
  }