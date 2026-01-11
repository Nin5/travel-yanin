import React from "react";
import MainLayout from "../template/MainLayout";

const Tips = () => {
  return (
    <MainLayout>
      <div className="max-w-5xl mx-auto px-6 py-10">

       
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          เคล็ดลับการท่องเที่ยว
        </h1>

        <hr className="border-t-2 border-gray-300 mb-6" />

        
        <p className="text-gray-600 mb-6">
          ไอเดียและคำแนะนำดี ๆ สำหรับการเดินทางให้สนุก ปลอดภัย และคุ้มค่า
        </p>

        
        <div className="flex justify-center mb-8">
          <img
            src="/images/5.jpg"
            alt="ภาพท่องเที่ยว"
            className="w-full max-w-4xl rounded-xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="bg-white p-6 rounded-xl shadow-md text-gray-700 leading-relaxed space-y-4">
          <p>
            การวางแผนการเดินทางล่วงหน้าเป็นสิ่งสำคัญ ควรศึกษาข้อมูลสถานที่
            ตรวจสอบสภาพอากาศ และเตรียมอุปกรณ์ให้พร้อมก่อนออกเดินทาง
          </p>

          <p>
            ควรจองที่พักและตั๋วเดินทางล่วงหน้าเพื่อประหยัดค่าใช้จ่าย
            และเลือกช่วงเวลาที่เหมาะสมในการท่องเที่ยวเพื่อหลีกเลี่ยงความแออัด
          </p>

          <p>
            อย่าลืมเตรียมเอกสารสำคัญ เช่น บัตรประชาชน พาสปอร์ต
            และยาประจำตัว เพื่อความปลอดภัยตลอดการเดินทาง
          </p>
        </div>

      </div>
    </MainLayout>
  );
};

export default Tips;
