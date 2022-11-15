import Header from "./header";
import SideMenu from "./sidemenu";
import { useRouter } from "next/router";
import NewProject from "../NewProject";

const Home = () => {
  const query = useRouter();
  const path = query.asPath.split("#")[1];

  return (
    <div className="flex w-full h-[100vh] text-black bg-white">
      <SideMenu />
      <div className="w-full">
        <Header />
        {path === "newproject" ? <NewProject/> : "sdf"}
      </div>
    </div>
  );
};

export default Home;
