import Logo from "../IntroSection/logo";
import Link from "next/link";
import { CgMenuGridO, CgClose } from "react-icons/cg";
import { useState } from "react";
import { signIn } from "next-auth/react";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <div className="w-full flex flex-wrap items-center justify-between p-5 sm:pl-10 sm:pt-5 sm:pr-10 poppins bg-transparent text-black">
        <Logo font="large" />
        <div className="hidden sm:flex items-center justify-between gap-10">
          <div>
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
          </div>
          <div>
            <Link href="/Pricing">
              <p className="cursor-pointer">Pricing</p>
            </Link>
          </div>
          <div>
            <Link href="/ContactUs">
              <p className="cursor-pointer">Contact Us</p>
            </Link>
          </div>
          <div className="flex gap-2">
            <p
              onClick={() => signIn()}
              className="p-1 pl-5 pr-5 bg-[#0A2D28] rounded text-white cursor-pointer"
            >
              Get Started
            </p>
          </div>
        </div>

        <div
          className={`${menu ? "hidden" : "flex"} cursor-pointer sm:hidden`}
          onClick={() => setMenu(true)}
        >
          <p className="text-2xl">
            <CgMenuGridO />
          </p>
        </div>
        <div
          className={`${menu ? "flex" : "hidden"} cursor-pointer sm:hidden`}
          onClick={() => setMenu(false)}
        >
          <p className="text-2xl">
            <CgClose />
          </p>
        </div>
      </div>
      {menu ? (
        <div className="p-5 gap-5 items-start poppins flex flex-col sm:hidden">
          <div>
            <Link href="/">
              <p className="cursor-pointer">Home</p>
            </Link>
          </div>
          <div>
            <Link href="/Pricing">
              <p className="cursor-pointer">Pricing</p>
            </Link>
          </div>
          <div>
            <Link href="/ContactUs">
              <p className="cursor-pointer">Contact Us</p>
            </Link>
          </div>
          <div className="flex">
            <Link href="/Auth/create-account">
              <p className="p-1 pl-5 pr-5 bg-[#0A2D28] rounded text-white">
                Get Started
              </p>
            </Link>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
