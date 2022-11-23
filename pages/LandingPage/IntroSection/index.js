import { Fade } from "react-reveal";
import Logo from "./logo";
import { signIn } from "next-auth/react";

const Intro = () => {
  return (
    <div className="w-full h-full  flex flex-col gap-5 items-center justify-center mt-10 mb-20 poppins ">
      <Fade top>
        <Logo font="large" />
      </Fade>
      <Fade top cascade>
        <p className="abel text-4xl sm:text-5xl md:text-7xl w-full sm:w-[500px] md:w-[750px] text-center p-3">
          Organize and Manage your Database
        </p>
      </Fade>
      <Fade top cascade>
        <p className="poppins w-full p-5 md:w-[700px] text-center">
          Easy and simple way to create your database and use the api url
          perform CRUD operations on your application.
        </p>
      </Fade>
      <Fade >
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <p onClick={() => signIn()} className="p-2 pl-5 pr-5 bg-[#0A2D28] text-white rounded text-center  cursor-pointer">
            Get Started
          </p>
          <p onClick={() => signIn()} className="p-2 pl-5 pr-5 border-2 border-[#0A2D28] text-black rounded text-center cursor-pointer">
            Try fastdbaccess For Free
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
