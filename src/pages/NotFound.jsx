import React from "react";
import MainLayout from "../template/MainLayout";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">

        {/* 404 */}
        <h1 className="text-6xl font-extrabold text-slate-700 mb-2">
          404
        </h1>

        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          ไม่พบหน้าที่คุณต้องการ
        </h2>

        <p className="text-gray-600 mb-6">
          หน้าที่คุณกำลังค้นหาอาจถูกลบ เปลี่ยนชื่อ หรือไม่มีอยู่
        </p>

        {/* Button */}
        <NavLink
          to="/"
          className="px-6 py-2 bg-sky-600 text-white rounded-lg shadow hover:bg-sky-700 transition"
        >
          กลับหน้าหลัก
        </NavLink>

      </div>
    </MainLayout>
  );
};

export default NotFound;
