import Fade from "react-reveal/Fade";

const DatabaseProcess = () => {
  return (
    <div className="w-full h-full flex flex-col flex-wrap items-center justify-center poppins ">
      <p className="text-4x text-4xl sm:text-5xl abel text-center">
        Database creation process
      </p>
      <div className="flex flex-col gap-5 mt-16">
        <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-10">
          <Fade top>
            <div className="flex gap-2 text-xl">
              <div className="relative">
                <div className="h-9 w-9 rounded-2xl animate-spin bg-[#0A2D28] text-white text-center"></div>
                <p className="absolute top-1 left-[15px] text-white">1</p>
              </div>
              Create a project
            </div>
          </Fade>
          <div className="flex gap-2 text-xl">
            <Fade bottom>
              <div className="relative">
                <div className="h-9 w-9 rounded-2xl animate-spin bg-[#0A2D28] text-white text-center"></div>
                <p className="absolute top-1 left-[13px] text-white">2</p>
              </div>
              Select a Temaplate
            </Fade>
          </div>
        </div>
        <div className="w-full flex flex-col sm:flex-row gap-5 sm:gap-10">
          <div className="flex gap-2 text-xl">
            <Fade top>
              <div className="relative">
                <div className="h-9 w-9 rounded-2xl animate-spin bg-[#0A2D28] text-white text-center"></div>
                <p className="absolute top-1 left-[13px] text-white">3</p>
              </div>
              Deploy a project
            </Fade>
          </div>
          <div className="flex gap-2 text-xl">
            <Fade bottom>
              <div className="relative">
                <div className="h-9 w-9 rounded-2xl animate-spin bg-[#0A2D28] text-white text-center"></div>
                <p className="absolute top-1 left-[11px] text-white">4</p>
              </div>
              Use the API
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DatabaseProcess;
