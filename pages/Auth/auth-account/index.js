import Logo from "../../LandingPage/IntroSection/logo";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import instance from "../../../utils/axios";
import Router from "next/router";

const CreactAccount = () => {
  const { data: session, status } = useSession();
  useEffect(() => {
    if (status === "authenticated") {
      instance
        .post("/userinfo", {
          create_user: "true",
          email: session.user.email,
          name: session.user.name,
          profile: session.user.image,
        })
        .then((res) => {
          if (res.data.status) {
            window.localStorage.setItem(
              "fastdbaccess_token",
              res.data.result.id
            );
            Router.push("/home/" + res.data.result.id);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [status, session]);
  return (
    <div className="w-full h-[100vh] flex items-center justify-between poppins">
      <div className="flex w-full items-center justify-center">
        <div className="flex flex-col items-center sm:items-start">
          <Logo font="large" />
          <p className="text-3xl abel mt-10 text-center">
            Get Started with your account
          </p>
          <p className="text-sm text-[#0A2D28] text-center">
            Choose your plan in subscription section
          </p>
          <p
            onClick={() => signIn("google")}
            className="cursor-pointer p-2 w-max border-2 border-[#0A2D28] rounded sm:pl-10 sm:pr-10 flex gap-2 items-center justify-center mt-10"
          >
            <span className="text-xl">
              <FcGoogle />
            </span>
            Continue with Google
          </p>
        </div>
      </div>
      <div>
        <Image
          alt="auth"
          src="https://images.pexels.com/photos/1493226/pexels-photo-1493226.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={300}
          height={300}
          className="h-[100vh] w-full sm:w-[100%] md:w-[200vh] hidden sm:flex"
        />
      </div>
    </div>
  );
};

export default CreactAccount;
