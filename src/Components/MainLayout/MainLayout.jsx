import SideBar from "../SideBar/SideBar";
import Home from "../../../router/Home";

const MainLayout = ({ width }) => {
  return (
    <div>
      <div className="flex w-[100%]">
        <SideBar width="30%" />
        <Home />
      </div>
    </div>
  );
};

export default MainLayout;
