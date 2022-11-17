import { Select } from "@chakra-ui/react";
import "../../styles/Home.module.css";
import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import Router, { useRouter } from "next/router";
import Image from "next/image";
import Alert from "./alert"

const Analytics = () => {
  const query = useRouter();
  const { id, menu } = query.query;

  const [projectdata, setprojectdata] = useState([]);
  const [_delete,setdelete] = useState(false) 

  useEffect(() => {
    instance
      .get("/projects", {
        id: id,
      })
      .then((res) => {
        if (res.data.status) {
          setprojectdata(res.data.result);
        }
      });
  }, [id]);

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
        setdelete(true)
        setTimeout(()=>{
          Router.reload();
        },2000)
      });
  };

  return (
    <div className="p-5 poppins">
      <p>Analytics</p>
      {_delete?<Alert/>:<></>}
      <Select
        placeholder="Select your Project"
        className="border-2 border-black rounded p-2 mt-5"
        onChange={(e) => {
          window.localStorage.setItem("fastdbaccess_analytics", e.target.value)
        }}
      >
        {projectdata.length > 0 ? (
          projectdata.map((item, index) => {
            return (
              <option key={index} value={item.projectname + "#" + item.id}>
                {item.projectname}
              </option>
            );
          })
        ) : (
          <></>
        )}
      </Select>

      {window.localStorage.getItem("fastdbaccess_analytics") ? (
        projectdata.length > 0 ? (
          projectdata.map((item, index) => {
            return item.projectname ===
              window.localStorage
                .getItem("fastdbaccess_analytics")
                .split("#")[0] &&
              item.id ===
                window.localStorage
                  .getItem("fastdbaccess_analytics")
                  .split("#")[1] ? (
              <div key={index} className="mt-10">
                <div className="w-full flex flex-col gap-3 bg-[#0A2D28] p-3 poppins rounded text-white">
                  <p className="text-sm">Project Name: {item.projectname}</p>
                  <p className="text-sm">Project Template: {item.template}</p>
                  <p className="text-sm">Project Size: {item.projectsize} MB</p>
                  <div
                    onClick={() => {
                      DeleteProject(item.id, item.projectsize, id);
                    }}
                    className="bg-white text-[#0A2D28] w-max pl-4 pr-4 p-1 cursor-pointer rounded"
                  >
                    Delete
                  </div>
                </div>
              </div>
            ) : (
              <></>
            );
          })
        ) : (
          <></>
        )
      ) : (
        <></>
      )}
    </div>
  );
};

export default Analytics;
