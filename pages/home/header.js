import Logo from "../LandingPage/IntroSection/logo";
import { RiAddCircleLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import instance from "../../utils/axios";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const [data, setdata] = useState([]);
  const query = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      instance
        .post("/userinfo", {
          getuser: true,
          create_user: false,
          email: session.user.email,
        })
        .then((res) => {
          if(res.data.status){
            setdata(res.data.result)
          }
        });
    }
  }, [status, session]);

  return (
    <div className="w-full p-5 flex flex-wrap gap-5 poppins">
      <div className="bg-[#0A2D28] w-full sm:w-[80%] rounded p-3 pl-1 sm:pl-5 flex flex-wrap text-center items-center justify-center sm:justify-start gap-2 text-white">
        Welcome to <Logo /> @{data.Name || "Undefined"}
      </div>
      <Link href="#newproject" className={`bg-[#0A2D28] p-3 flex gap-2 items-center justify-center text-white w-40 rounded cursor-pointer ${query.asPath.split("#")[1]==="newproject"?"hidden":""}`}>
        <span className="text-xl">
          <RiAddCircleLine />
        </span>
        <p>New Project</p>
      </Link>
    </div>
  );
};

export default Header;
