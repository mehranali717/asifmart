import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="contentWrapper" >
      <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
