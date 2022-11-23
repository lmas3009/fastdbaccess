import React from "react";
const PreviewTables = ({ showTable, showtables, type }) => {
  const userinfo = {
    title: "UserInfo Database",
    columns: ["Name", "Surname", "Email", "Age", "Created_on"],
  };

  const feedback = {
    title: "Feedback Database",
    columns: ["Name", "Email", "Feedback", "Created_on"],
  };

  const newsletter = {
    title: "NewsLetter Database",
    columns: ["Name", "Email", "Created_on"],
  };

  const contactus = {
    title: "Contact Us Database",
    columns: [
      "Name",
      "Email",
      "Country",
      "PhoneNumber",
      "Message",
      "Created_on",
    ],
  };

  const contactus2 = {
    title: "Contact Us 2 Database",
    columns: ["Name", "Email", "Country", "Message", "Created_on"],
  };

  const data =
    type === "UserInfo Database"
      ? userinfo
      : type === "Feedback Database"
      ? feedback
      : type === "NewsLetter Database"
      ? newsletter
      : type === "Contact Us Database"
      ? contactus
      : type === "Contact Us 2 Database"
      ? contactus2
      : {};

  return (
    <div>
      {showtables ? (
        <div
          className="py-12 overflow-scroll overflow-x-hidden bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <div className="w-full flex justify-start text-gray-600 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-wallet"
                  width={52}
                  height={52}
                  viewBox="0 0 24 24"
                  strokeWidth={1}
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                  <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                </svg>
              </div>
              <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                {data.title}
              </h1>
              {data?.columns.map((item, index) => {
                return (
                  <div key={index}>
                    <label
                      htmlFor="name"
                      className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                    >
                      Column {index + 1}
                    </label>
                    <input
                      id="name"
                      className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border bg-white"
                      value={item}
                    />
                  </div>
                );
              })}

              <div className="flex items-center justify-start w-full">
                <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                  Submit
                </button>
                <button
                  className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                  onClick={() => showTable(false)}
                >
                  Cancel
                </button>
              </div>
              <div
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                onClick={() => showTable(false)}
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
      ) : (
        <></>
      )}
    </div>
  );
};
export default PreviewTables;
