import { SiWebmoney } from "react-icons/si";
import { FaCartPlus, FaClinicMedical } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Search from "../Search/Search";
import { BsFilePerson } from "react-icons/bs";

const Header = () => {
  return (
    <>
      <div className="flex  h-20  p-4 items-center  w-full border border-blue-500  bg-slate-950">
        <div className="logo flex items-end gap-2 cursor-pointer w-[calc(100%-5rem)] border-red-500 ">
          <SiWebmoney className="bg-white rounded-full w-8 h-8 " />
          <p className="font-extrabold sm:text-xl text-white mr-4">
            Pharmakart
          </p>
        </div>

        <Search width="80vw" />

        <div className="flex text-lg text-white gap-2">
          <BsFilePerson className="cursor-pointer" />
          <FaCartPlus className="cursor-pointer" />
        </div>
        <div className="text-2xl text-white sm:hidden cursor-pointer pl-2">
          <BiMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
