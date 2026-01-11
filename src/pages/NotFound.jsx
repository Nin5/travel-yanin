import React from 'react'
import MainLayout from '../template/MainLayout'
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <MainLayout>
        <h1>NotFound</h1>
        <hr />
        <p>
            ไม่พบหน้าที่ต้องการ
        </p>
         <NavLink
              to="/"
            >
              คลิกเพื่อกลับหน้าหลัก
            </NavLink>
    </MainLayout>
  )
}

export default NotFound