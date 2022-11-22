import Header from "./header";
import SideMenu from "./sidemenu";
import Router, { useRouter } from "next/router";
import NewProject from "../NewProject";
import Projects from "../Projects";
import Subscription from "../Subscriptions";
import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import Settings from "../Settings";
import ProjectPage from "../Projectpage";
import Dashboard from "./Dashboard";
import { useSession } from "next-auth/react";

const Home = () => {
  const query = useRouter();
  const path = query.asPath.split("#")[1];
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
    } else if (status === "unauthenticated") {
      Router.push("/");
    }
    
  }, [status, session]);

  return (
    <div className="flex w-full h-[100vh] text-black bg-white">
      <SideMenu />
      <div className="w-full h-[100vh] overflow-scroll overflow-x-hidden">
        <Header />
        {path === "projects" ? (
          <Projects />
        ) : path === "subscription" ? (
          <Subscription />
        ) : path === "newproject" ? (
          <NewProject />
        ) : path === "dashboard" || path === undefined ? (
          <Dashboard />
        ) : path === "settings" ? (
          <Settings />
        ) : path === "project" ? (
          <ProjectPage />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Home;
