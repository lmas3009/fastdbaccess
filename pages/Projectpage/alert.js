import React, { useState } from "react";
const Index = () => {
  const [flag, setFlag] = useState(true);
  return (
    <div className="poppins ">
      {/* Code block starts */}
      <div className="flex items-center justify-center px-4 lg:px-0 py-12">
        <div
          id="alert"
          className={
            flag
              ? "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between shadow rounded"
              : "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-white md:flex items-center justify-between  rounded translate-hide shadow-2xl shadow-black"
          }
        >
          <div className="sm:flex sm:gap-3 sm:items-center lg:items-center">
            <div className="flex items-end bg-green-800 p-2 rounded text-white">
              <div className="mr-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width={20}
                  height={20}
                  fill="currentColor"
                >
                  <path
                    className="heroicon-ui"
                    d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 9a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1zm0 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
                  />
                </svg>
              </div>
              <p className="mr-2 text-base font-bold ">Success</p>
            </div>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">
              Project Deleted Succuessfully
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Index;
