import React from "react";
import MainLayout from "../template/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-6 py-10">

       
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          Welcome to <span className="text-sky-600">Blue Horizon Travel</span>
        </h1>

        <hr className="border-t border-gray-300 mb-8" />

        {/* Image */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <img
            src="/images/blue-horizon.png"
            alt="ภาพทัวร์"
            className="w-full max-h-[420px] object-cover rounded-lg"
          />
        </div>

      </div>
    </MainLayout>
  );
};

export default Home;
