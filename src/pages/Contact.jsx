import React from "react";
import MainLayout from "../template/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ติดต่อเรา
        </h1>

        <hr className="border-t-2 border-gray-300 mb-6" />

        {/* Company */}
        <h2 className="text-xl font-semibold text-sky-600 mb-4">
          Blue Horizon Travel
        </h2>

        {/* Info */}
        <div className="space-y-3 text-gray-700">
          <p>
            <span className="font-semibold">ที่อยู่:</span>{" "}
            123 ถนนท่องเที่ยว กรุงเทพฯ 10110
          </p>

          <p>
            <span className="font-semibold">เบอร์โทรศัพท์:</span>{" "}
            02-123-4567
          </p>

          <p>
            <span className="font-semibold">อีเมล:</span>{" "}
            info@bluehorizontravel.com
          </p>
        </div>

      </div>
    </MainLayout>
  );
};

export default Contact;
