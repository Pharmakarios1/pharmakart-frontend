import { useState, useEffect } from "react";
import {
  BiBody,
  BiCog,
  BiFoodMenu,
  BiGrid,
  BiHome,
  BiListCheck,
  BiLocationPlus,
  BiLogOut,
  BiMenu,
  BiShoppingBag,
} from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SideBar = ({ style, width }) => {
  const [isActive, SetActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    }
  }, []);

  const handleOpen = () => {
    SetActive((prev) => !prev);
  };
  return (
    <div width={width}>
      {isActive ? (
        <div
          className={
            isMobile
              ? `flex flex-col bg-slate-950 w-[100%] z-10 text-white items-start gap-10 p-2  relative transition-all duration-1000 ease-in-out`
              : `flex flex-col bg-slate-950 w-[23vw] text-white items-start gap-10 p-2  relative transition-all duration-1000 ease-in-out`
          }
        >
          <div>
            {isActive ? (
              <BiMenu
                onClick={handleOpen}
                className="text-xl text-red-600 absolute left-[70%] cursor-pointer"
              />
            ) : (
              <FaAngleRight
                onClick={handleOpen}
                className="text-xl text-red-600 "
              />
            )}
          </div>
          <ul className="flex flex-col gap-[23px]  top-[6rem]">
            <li className="flex gap-2 ">
              <NavLink className="flex items-center gap-2 hover:text-slate-950 hover:bg-white rounded-md p-1 ">
                <BiHome />
                <span>Home</span>
              </NavLink>
              <span className="opacity-0">Dashboard</span>
            </li>
            <li className="flex gap-2 ">
              <NavLink className="flex items-center gap-2 hover:text-slate-950 hover:bg-white rounded-md p-1 ">
                <BiGrid />
                <span>Dashboard</span>
              </NavLink>
              <span className="opacity-0">Dashboard</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiShoppingBag />
                <span>Products</span>
              </NavLink>
              <span className="opacity-0">Products</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiListCheck />
                <span>Categories</span>
              </NavLink>
              <span className="opacity-0">Categories</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiBody />
                <span>Customers</span>
              </NavLink>
              <span className="opacity-0">Customers</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiFoodMenu />
                <span>Orders</span>
              </NavLink>
              <span className="opacity-0">Orders</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiLocationPlus />
                <span>Shipping</span>
              </NavLink>
              <span className="opacity-0">Shipping</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiCog />
                <span>Settings</span>
              </NavLink>
              <span className="opacity-0">Settings</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiLogOut />
                <span>Logout</span>
              </NavLink>
              <span className="opacity-0">Logout</span>
            </li>
          </ul>
        </div>
      ) : (
        <div className="flex flex-col bg-slate-950 w-[7.4vw] sm:w-[2.6vw] text-white items-start gap-10 pl-2 transition-all duration-1000 ease-in-out  ">
          <div>
            {isActive && isMobile ? (
              <BiMenu onClick={handleOpen} className="text-xl text-red-600 " />
            ) : (
              <FaAngleRight
                onClick={handleOpen}
                className="text-xl text-red-600 cursor-pointer mt-3"
              />
            )}
          </div>

          <ul className="flex flex-col gap-[28px] top-[6rem]">
            <li className="flex gap-2 ">
              <NavLink className="flex items-center gap-2 hover:text-slate-950 hover:bg-white rounded-md p-1 ">
                <BiHome />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Home
                </span>
              </NavLink>
              <span className="opacity-0">Dashboard</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiGrid />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Dashboard
                </span>
              </NavLink>
              <span>Dashboard</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiShoppingBag />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Products
                </span>
              </NavLink>
              <span>Products</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiListCheck />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Categories
                </span>
              </NavLink>
              <span>Categories</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiBody />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Customers
                </span>
              </NavLink>
              <span>Customers</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiFoodMenu />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Orders
                </span>
              </NavLink>
              <span className="opacity-0">Orders</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiLocationPlus />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Shipping
                </span>
              </NavLink>
              <span>Shipping</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiCog />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Settings
                </span>
              </NavLink>
              <span>Settings</span>
            </li>
            <li className="flex gap-2">
              <NavLink className="flex items-center gap-2  hover:text-slate-950 hover:bg-white rounded-md p-1">
                <BiLogOut />
                <span className="absolute left-[2.5rem] hover:bg-slate-950 px-2 rounded-lg opacity-0  z-1">
                  Logout
                </span>
              </NavLink>
              <span>Logout</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;
