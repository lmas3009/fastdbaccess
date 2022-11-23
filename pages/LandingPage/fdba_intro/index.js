import { Fade } from "react-reveal";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";

const FDBA = () => {
  return (
    <div className="h-[100%] fdba mt-10 mb-20 p-10 w-full flex flex-col items-center justify-evenly poppins">
      <Fade cascade>
        <p className="abel text-[26px] sm:text-4xl w-full sm:w-[520px] text-center">
          fastdbaccess uses mongoDB to store the data
        </p>
      </Fade>
      <div className="flex flex-col sm:flex-row mt-10 items-center justify-center gap-5 sm:gap-10">
        <Fade top>
          <Image
            alt="table"
            src={"/assets/mongodb.png"}
            width={200}
            height={200}
            className="w-40 sm:w-40"
          />
        </Fade>
        <Fade top>
          <div className="text-5xl">
            <BsPlusLg />
          </div>
        </Fade>
        <Fade top>
          <Image
            alt="table"
            src={"/assets/database.png"}
            width={200}
            height={200}
            className="w-48"
          />
        </Fade>
      </div>
      <Fade top>
        <p className="poppins mt-10">Available Template</p>
      </Fade>
      <div>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-5">
            <Fade cascade>
              <div className="bg-[#0A2D28] text-white p-2 pl-5 pr-5 rounded-2xl">
                <p>UserInfo Table</p>
              </div>
              <div className="bg-[#0A2D28] text-white p-2 pl-5 pr-5 rounded-2xl">
                <p>Feedback Table</p>
              </div>
            </Fade>
          </div>
          <div className="flex flex-col sm:flex-row gap-5 items-center justify-center mt-5">
            <Fade cascade>
              <div className="bg-[#0A2D28] text-white p-2 pl-5 pr-5 rounded-2xl">
                <p>NewsLetter Table</p>
              </div>
              <div className="bg-[#0A2D28] text-white p-2 pl-5 pr-5 rounded-2xl">
                <p>Contact Us Table</p>
              </div>
              <div className="bg-[#0A2D28] text-white p-2 pl-5 pr-5 rounded-2xl">
                <p>Contact Us 2 Table</p>
              </div>
            </Fade>
          </div>
      </div>
    </div>
  );
};

export default FDBA;
