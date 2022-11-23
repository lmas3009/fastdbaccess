import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import Router, { useRouter } from "next/router";
import Tables from "./tables";
import Alert from "./alert";
import ApiDocs from "./apidocs";
import Head from "next/head";

const ProjectPage = () => {
  const [projectdata, setprojectdata] = useState([]);
  const [projectdatastats, setprojectdatastats] = useState([]);
  const [_delete, setdelete] = useState(false);
  const [apishow, setapishow] = useState(false);
  const [loading, setLoading] = useState(false);
  const query = useRouter();
  const { id } = query.query;
  const pid = query.asPath.split("#")[2];

  useEffect(() => {
    setTimeout(() => {
      instance
        .get("/projects", {
          params: {
            id: pid,
            projectbyid: true,
          },
        })
        .then((res) => {
          if (res.data.status) {
            setprojectdata(res.data.result);
            instance
              .post("/projectstats", {
                projectid: pid,
                template: res.data.result[0]?.template
              })
              .then((res) => {
                if (res.data.status) {
                  setprojectdatastats(res.data.result);
                }
              });
          }
        });
    }, 1000);
  }, [id, pid]);

  const DeleteProject = (projectid, projectsize, userid,template) => {
    setLoading(true);
    instance
      .delete("/projects", {
        params: {
          projectid: projectid,
          projectsize: projectsize,
          userid: userid,
          template: template
        },
      })
      .then((res) => {
        setLoading(false);
        setdelete(true);
        setTimeout(() => {
          Router.back();
        }, 2000);
      });
  };

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

  const database =
    projectdata[0]?.template === "UserInfo Database"
      ? Template_Userinfo
      : projectdata[0]?.template === "Feedback Database"
      ? Template_Feedback
      : projectdata[0]?.template === "NewsLetter Database"
      ? Template_NewsLetter
      : projectdata[0]?.template === "Contact Us Database"
      ? Template_ContactUs
      : projectdata[0]?.template === "Contact Us 2 Database"
      ? Template_ContactUs2
      : [];

  const setapidocs = (e) => {
    setapishow(e);
  };

  return (
    <div className="p-5 poppins">
      <Head>
        <title>
          {projectdata.length > 0 ? (
            projectdata[0].projectname +
            " | " +
            projectdata[0].template +
            " | " +
            "fastdbaccess | project"
          ) : (
            <></>
          )}
        </title>
      </Head>
      <div>
        {_delete ? <Alert /> : <></>}
        {apishow ? (
          <ApiDocs
            setapidocs={setapidocs}
            pid={pid}
            data={database}
            template={projectdata[0].template}
          />
        ) : (
          <></>
        )}
        {projectdata.length > 0 ? (
          projectdata.map((item, index) => {
            return item.projectname ===
              window.localStorage
                .getItem("fastdbaccess_analytics")
                .split("#")[0] &&
              item.id ===
                window.localStorage
                  .getItem("fastdbaccess_analytics")
                  .split("#")[1] ? (
              <div key={index} className="">
                <div className="w-full flex flex-col gap-3 bg-[#0A2D28] p-3 poppins rounded text-white">
                  <p className="text-sm">Project Name: {item.projectname}</p>
                  <p className="text-sm">Project Template: {item.template}</p>
                  <p className="text-sm">Project Size: {item.projectsize} MB</p>
                  <div className="w-full flex items-center justify-between">
                    <div
                      onClick={() => {
                        DeleteProject(item.id, item.projectsize, id,item.template);
                      }}
                      className="bg-white text-[#0A2D28] w-max pl-4 pr-4 p-1 cursor-pointer rounded flex items-center gap-2"
                    >
                      {loading ? (
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokwidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      ) : (
                        <></>
                      )}
                      Delete
                    </div>
                    <p
                      className="bg-white text-[#0A2D28] w-max pl-4 pr-4 p-1 cursor-pointer rounded"
                      onClick={() => setapishow(true)}
                    >
                      View Api
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <></>
            );
          })
        ) : (
          <></>
        )}
        <Tables data={projectdatastats} database={database} pid={pid} />
      </div>
    </div>
  );
};

export default ProjectPage;
