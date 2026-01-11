import React from "react";

const TorusCard = ({ title, duration, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border hover:shadow-xl transition">
  <img
    src={`/images/${image}`}
    alt={title}
    className="w-full h-52 object-cover"
  />

  <div className="p-5">
    <h3 className="text-lg font-semibold text-gray-800 mb-2">
      {title}
    </h3>

    <p className="text-gray-600 text-sm mb-1">
      ระยะเวลา: <span className="font-medium">{duration}</span> วัน
    </p>

    <p className="text-sky-600 font-semibold">
      ราคา {price.toLocaleString()} บาท
    </p>
  </div>
</div>

  );
};

export default TorusCard;
