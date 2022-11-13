import { Fade } from "react-reveal";
import Logo from "./logo";

const Intro = () => {
  return (
    <div className="w-full h-full  flex flex-col gap-5 items-center justify-center mt-10 mb-20 poppins ">
      <Fade top>
        <Logo font="large" />
      </Fade>
      <Fade top>
        <p className="abel text-4xl sm:text-5xl md:text-7xl w-full sm:w-[500px] md:w-[700px] text-center p-3">
          Organize and Manage your Database
        </p>
      </Fade>
      <Fade left>
        <p className="poppins w-full p-5 md:w-[700px] text-center">
          Easy and simple way to create your database and use the api url
          perform CRUD operations on your application.
        </p>
      </Fade>
      <Fade right>
        <div className="flex flex-wrap gap-5 items-center justify-center">
          <p className="p-2 pl-5 pr-5 bg-[#0A2D28] text-white rounded text-center">
            Get Started
          </p>
          <p className="p-2 pl-5 pr-5 border-2 border-[#0A2D28] text-black rounded text-center">
            Try fastdbaccess For Free
          </p>
        </div>
      </Fade>
    </div>
  );
};

export default Intro;
