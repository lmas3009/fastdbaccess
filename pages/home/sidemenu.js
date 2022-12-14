import Logo from "../LandingPage/IntroSection/logo";
import Logosm from "../LandingPage/IntroSection/logo_sm";
import {
  RiDashboardLine,
  RiProjectorLine,
  RiSecurePaymentLine,
  RiSettings6Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { signOut } from "next-auth/react";

const SideMenu = () => {
  const query = useRouter();

  return (
    <div className="w-20 md:w-40 lg:w-56 h-full bg-[#0A2D28] rounded-r text-white p-5 flex flex-col items-center sm:items-start justify-between poppins">
      <div className="flex flex-col items-center sm:items-start gap-12">
        <div className="hidden sm:flex">
          <Logo />
        </div>
        <div className="flex sm:hidden">
          <Logosm font="large" />
        </div>
        <div className="flex flex-col gap-5 text-sm lg:text-base">
          <Link
            href="#dashboard"
            className={`flex items-center gap-2 ${
              query.asPath.split("#")[1] === "dashboard"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <span className="text-2xl sm:text-lg">
              <RiDashboardLine />
            </span>
            <p className="hidden sm:flex">Dashboard</p>
          </Link>
          <Link
            href="#projects"
            className={`flex items-center gap-2 ${
              query.asPath.split("#")[1] === "projects"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <span className="text-2xl sm:text-lg">
              <RiProjectorLine />
            </span>
            <p className="hidden sm:flex">Projects</p>
          </Link>
          <Link
            href="#subscription"
            className={`flex items-center gap-2 ${
              query.asPath.split("#")[1] === "subscription"
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            <span className="text-2xl sm:text-lg">
              <RiSecurePaymentLine />
            </span>
            <p className="hidden sm:flex">Subscriptions</p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-5 text-sm lg:text-base">
        <Link
          href="#settings"
          className={`flex items-center gap-2 ${
            query.asPath.split("#")[1] === "settings"
              ? "underline underline-offset-4"
              : ""
          }`}
        >
          <span className="text-2xl sm:text-lg">
            <RiSettings6Line />
          </span>
          <p className="hidden sm:flex">Settings</p>
        </Link>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            window.localStorage.removeItem("fastdbaccess_token");
            window.localStorage.removeItem("fastdbaccess_analytics");
            signOut({ callbackUrl: "https://fastdbaccess.vercel.app" });
          }}
        >
          <span className="text-2xl sm:text-lg">
            <RiLogoutCircleRLine />
          </span>
          <p className="hidden sm:flex">Logout</p>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
