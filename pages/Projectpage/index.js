import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import Router, { useRouter } from "next/router";
import Tables from "./tables";
import Alert from "./alert";
import ApiDocs from "./apidocs";

const ProjectPage = () => {
  const [projectdata, setprojectdata] = useState([]);
  const [projectdatastats, setprojectdatastats] = useState([]);
  const [_delete, setdelete] = useState(false);
  const [apishow, setapishow] = useState(false);
  const query = useRouter();
  const { id } = query.query;
  const pid = query.asPath.split("#")[2];

  useEffect(() => {
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
            })
            .then((res) => {
              if (res.data.status) {
                setprojectdatastats(res.data.result);
              }
            });
        }
      });
  }, [id, pid]);

  const DeleteProject = (projectid, projectsize, userid) => {
    instance
      .delete("/projects", {
        params: {
          projectid: projectid,
          projectsize: projectsize,
          userid: userid,
        },
      })
      .then((res) => {
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
      : projectdata[0]?.template === "Contact Us 2 Datatbase"
      ? Template_ContactUs2
      : [];

  const setapidocs = (e) => {
    setapishow(e);
  };

  return (
    <div className="p-5 poppins">
      <div>
        {_delete ? <Alert /> : <></>}
        {apishow ? (
          <ApiDocs setapidocs={setapidocs} pid={pid} data={database} template={projectdata[0].template} />
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
                        DeleteProject(item.id, item.projectsize, id);
                      }}
                      className="bg-white text-[#0A2D28] w-max pl-4 pr-4 p-1 cursor-pointer rounded"
                    >
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
