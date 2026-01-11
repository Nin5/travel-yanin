import React from 'react'
import TorusCard from '../template/TorusCard'
import MainLayout from '../template/MainLayout'

const Torus = () => {
  const torus = [
    {
      title: "ทะเลกระบี่-หมู่เกาะพีพี",
      duration: 3,
      price: 4900,
      image: "1.png",
    },
    {
      title: "ดอยอินทนนท์-เชียงใหม่",
      duration: 4,
      price: 6500,
      image: "2.png",
    },
    {
      title: "โตเกียว-ฟูจิ",
      duration: 5,
      price: 32900,
      image: "3.png",
    },
    {
      title: "เที่ยวซีรีส์ตามรอบซีรีส์ดัง",
      duration: 4,
      price: 21500,
      image: "4.png",
    },
  ]

  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto px-6 py-10">

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          แพคเกจทัวร์
        </h1>

        <hr className="border-t-2 border-gray-300 mb-8" />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {torus.map((item, index) => (
            <TorusCard
              key={index}
              {...item}
            />
          ))}
        </div>

      </div>
    </MainLayout>
  )
}

export default Torus
