import {IoOpen} from "react-icons/io5"

const ApiDocs = ({ setapidocs, pid, data, template }) => {
  return (
    <div>
      <div
        className="py-12 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div
          role="alert"
          className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
        >
          <div className="relative py-8 px-8 md:px-16 bg-white dark:bg-gray-800 dark:border-gray-700 shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-center items-center text-green-400 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-circle-check"
                width={56}
                height={56}
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <circle cx={12} cy={12} r={9} />
                <path d="M9 12l2 2l4 -4" />
              </svg>
            </div>
            <h1 className="text-center text-gray-800 dark:text-gray-100 font-lg font-bold tracking-normal leading-tight mb-4">
              {template}
            </h1>
            <p className="text-center text-gray-800 dark:text-gray-100 ">
              API Key = {pid}
            </p>
            <a href="https://fastdbaccess.vercel.app/APIs/apidocs" target={"_blank"} rel="noreferrer" className="text-center p-5 underline w-full flex items-center justify-center gap-2">View API Documentation <IoOpen/></a>
            <div className="flex items-center justify-center w-full mt-5">
              <button
                className="focus:outline-none ml-3 bg-[#0A2D28] text-white transition duration-150  ease-in-out hover:border-gray-400 hover:bg-gray-800 border rounded px-8 py-2 text-sm"
                onClick={() => setapidocs(false)}
              >
                Cancel
              </button>
            </div>
            <div
              className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-500 transition duration-150 ease-in-out"
              onClick={() => setapidocs(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Close"
                className="icon icon-tabler icon-tabler-x"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1={18} y1={6} x2={6} y2={18} />
                <line x1={6} y1={6} x2={18} y2={18} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ApiDocs;
