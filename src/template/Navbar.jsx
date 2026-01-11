import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <div className="flex gap-y-10 justify-start">
        <img
          src="/images/travel.png"
          alt="Blue Horizon Logo"
          className="w-8 h-8"
        />
        <h1 className="text-xl font-semibold ms-5">Blue Horizon traval</h1>
        </div>

        {/* Menu */}
        <ul className="flex space-x-6">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              หน้าหลัก
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/torus"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              แพคเกจทัวร์
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/tips"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              เคล็ดลับการท่องเที่ยว
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-yellow-300 ${
                  isActive ? "text-yellow-400 font-semibold" : ""
                }`
              }
            >
              ติดต่อ
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
