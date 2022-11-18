import React, { useState } from "react";
import { color, Select } from "@chakra-ui/react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";

const ApiDocs = ({ setapidocs, pid, data, template }) => {
  const [selectvalue, setselectvalue] = useState("");

  //   "Name":"welcome",
  //  "Surname":"root",
  //  "Email":"eolcome@root.com",
  //  "Age":"14",
  //  "apikey":"6376e2687b1f5cb5c1f4a14d"
  var py_data = "{";
  data?.map((item, index) => {
    if (item !== "Created_on") {
      py_data += "\n";
      py_data += `"${item}": "",`;
    }
  });
  py_data += `\n"APIkey": "${pid}"`;
  py_data += "\n}";

  var js_data = "{";
  data?.map((item, index) => {
    if (item !== "Created_on") {
      js_data += "\n";
      js_data += `${item}: "",`;
    }
  });
  js_data += `\nAPIkey: "${pid}"`;
  js_data += "\n}";

  var pycode = `import requests\n url = 'http://localhost:3000/api/template_userinfo'\n myobj = ${py_data}\nx = requests.post(url, json = myobj)\nprint(x.text)`;
  var jscode = `axios\n.post("http://localhost:3000/api/template_userinfo", ${js_data})\n .then(function (response) {\n console.log(response);\n })\n .catch(function (error) {\n console.log(error);\n });`;

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
            <p className="text-center">API Key = {pid}</p>
            <div className="w-full flex flex-col items-center justify-center">
              <Select
                placeholder="Select Language"
                className="border-2 border-black rounded p-2 w-full flex items-center justify-center mt-5 mb-5"
                onChange={(e) => {
                  setselectvalue(e.target.value);
                }}
              >
                <option value="python">Python</option>
                <option value="nodejs">NodeJs</option>
              </Select>
              {selectvalue === "python" ? (
                <Editor
                  value={pycode}
                  onValueChange={(code) => {}}
                  highlight={(code) => highlight(code, languages.py)}
                  className="border-2 border-[#0A2D28] rounded mb-5"
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    width: "400px",
                  }}
                />
              ) : selectvalue === "nodejs" ? (
                <Editor
                  value={jscode}
                  onValueChange={(code) => {}}
                  highlight={(code) => highlight(code, languages.js)}
                  className="border-2 border-[#0A2D28] rounded mb-5"
                  padding={10}
                  style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 12,
                    width: "400px",
                  }}
                />
              ) : (
                <></>
              )}
              {/* */}
            </div>
            <div className="flex items-center justify-center w-full">
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
