import TopBar from "../components/TopBar";
import { Outlet } from 'react-router';

const AppLayout = () => {
  return (
    <>
      <TopBar/>
      <Outlet/>
    </>
  );
};

export default AppLayout;
