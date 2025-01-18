import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div style={{paddingTop:"136px"}}>
      <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default MainLayout;
