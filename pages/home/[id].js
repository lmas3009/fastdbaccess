import Header from "./header";
import SideMenu from "./sidemenu";
import { useRouter } from "next/router";
import NewProject from "../NewProject";
import Projects from "../Projects";
import Analytics from "../Analytics";
import Subscription from "../Subscriptions";
import { useEffect, useState } from "react";
import instance from "../../utils/axios";

const Home = () => {
  const query = useRouter();
  const {id,menu} = query.query
  const path = query.asPath.split("#")[1];

  return (
    <div className="flex w-full h-[100vh] text-black bg-white">
      <SideMenu />
      <div className="w-full h-[100vh] overflow-scroll overflow-x-hidden">
        <Header />
        {path === "projects" ? (
          <Projects />
        ) : path === "analytics" ? (
          <Analytics />
        ) : path === "subscription" ? (
          <Subscription />
        ) : path === "newproject" ? (
          <NewProject />
        ) : path === "dashboard" || path === undefined ? (
          "Dashboard"
        ) : (
          "404 Page Not Found"
        )}
      </div>
    </div>
  );
};

export default Home;
