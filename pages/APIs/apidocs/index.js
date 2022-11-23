import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/themes/prism.css";
import Header from "../../LandingPage/Header";
import { data } from "autoprefixer";

const ApiDocs = () => {
  const baseURL = "https://fastdbaccess.vercel.app/api";
  const Template_Userinfo = ["Name", "Surname", "Email", "Age", "Created_on"];
  const Template_Feedback = ["Name", "Email", "Feedback", "Created_on"];
  const Template_NewsLetter = ["Name", "Email", "Created_on"];
  const Template_ContactUs = [
    "Name",
    "Email",
    "Country",
    "PhoneNumber",
    "Message",
    "Created_on",
  ];
  const Template_ContactUs2 = [
    "Name",
    "Email",
    "Country",
    "Message",
    "Created_on",
  ];

  const pycode = (api_endpoint) => {
    const database =
      api_endpoint === "template_userinfo"
        ? Template_Userinfo
        : api_endpoint === "template_feedback"
        ? Template_Feedback
        : api_endpoint === "template_newsletter"
        ? Template_NewsLetter
        : api_endpoint === "template_contactus"
        ? Template_ContactUs
        : api_endpoint === "template_contactus2"
        ? Template_ContactUs2
        : [];

    var py_data = "{";
    database?.map((item, index) => {
      if (item !== "Created_on") {
        py_data += "\n";
        py_data += `"${item}": "",`;
      }
    });
    py_data += `\n"APIkey": "APIkey"`;
    py_data += "\n}";
    return `import requests\n url = '${baseURL}/${api_endpoint}'\n myobj = ${py_data}\nx = requests.post(url, json = myobj)\nprint(x.text)`;
  };

  const jscode = (api_endpoint) => {
    const database =
      api_endpoint === "template_userinfo"
        ? Template_Userinfo
        : api_endpoint === "template_feedback"
        ? Template_Feedback
        : api_endpoint === "template_newsletter"
        ? Template_NewsLetter
        : api_endpoint === "template_contactus"
        ? Template_ContactUs
        : api_endpoint === "template_contactus2"
        ? Template_ContactUs2
        : [];

    var js_data = "{";
    database?.map((item, index) => {
      if (item !== "Created_on") {
        js_data += "\n";
        js_data += `${item}: "",`;
      }
    });
    js_data += `\nAPIkey: "APIkey"`;
    js_data += "\n}";

    return `axios\n.post("${baseURL}/${api_endpoint}", ${js_data})\n .then(function (response) {\n console.log(response);\n })\n .catch(function (error) {\n console.log(error);\n });`;
  };
  return (
    <div className="poppins w-full">
      <Header />
      <div className="p-10 w-full">
        <p className="mb-10">API Documentation</p>
        <div>
          <p>#UserInfo Table</p>
          <p className="mt-5 text-sm">Python</p>
          <Editor
            value={pycode("template_userinfo")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.py)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <p className="mt-5 text-sm">Node Js</p>
          <Editor
            value={jscode("template_userinfo")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.js)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className="mt-10">
          <p>#Feedback Table</p>
          <p className="mt-5 text-sm">Python</p>
          <Editor
            value={pycode("template_feedback")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.py)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <p className="mt-5 text-sm">Node Js</p>
          <Editor
            value={jscode("template_feedback")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.js)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className="mt-10">
          <p>#NewsLetter Table</p>
          <p className="mt-5 text-sm">Python</p>
          <Editor
            value={pycode("template_newsletter")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.py)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <p className="mt-5 text-sm">Node Js</p>
          <Editor
            value={jscode("template_newsletter")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.js)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className="mt-10">
          <p>#Contact Us Table</p>
          <p className="mt-5 text-sm">Python</p>
          <Editor
            value={pycode("template_contactus")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.py)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <p className="mt-5 text-sm">Node Js</p>
          <Editor
            value={jscode("template_contactus")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.js)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
        <div className="mt-10">
          <p>#Contact Us 2 Table</p>
          <p className="mt-5 text-sm">Python</p>
          <Editor
            value={pycode("template_contactus2")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.py)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
          <p className="mt-5 text-sm">Node Js</p>
          <Editor
            value={jscode("template_contactus2")}
            onValueChange={(code) => {}}
            highlight={(code) => highlight(code, languages.js)}
            className="border-2 border-[#0A2D28] rounded mb-5 bg-white w-[250px] sm:w-full"
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 12,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ApiDocs;
