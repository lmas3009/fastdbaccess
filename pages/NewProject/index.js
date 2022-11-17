import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PreviewTables from "./preivewtables";
import Slider from "./slider";
import instance from "../../utils/axios";
import Router, { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const NewProject = () => {
  const [projectname, setprojectname] = useState("");
  const [projectsize, setprojectsize] = useState("");
  const [template, settemplate] = useState("None");
  const [showtables, setshowtables] = useState(false);
  const { data: session, status } = useSession();
  const [data, setdata] = useState([]);

  const query = useRouter();
  const { id } = query.query;

  useEffect(() => {
    if (status === "authenticated") {
      instance
        .post("/userinfo", {
          getuser: true,
          create_user: false,
          email: session.user.email,
        })
        .then((res) => {
          if (res.data.status) {
            setdata(res.data.result);
          }
        });
    }
  }, [status, session]);

  const setStorage = (e) => {
    setprojectsize(e);
  };

  const showTable = (e) => {
    setshowtables(e);
  };

  const CreateProject = async () => {
    if (projectname === "") {
      alert("No project");
    } else if (projectsize === "") {
      alert("Select size");
    } else if (template === "None") {
      alert("Select template");
    } else {
      await instance
        .post("/projects", {
          projectname,
          projectsize,
          template,
          userid: id,
        })
        .then((res) => {
          Router.back();
        });
    }
  };

  return (
    <div className="p-5 bg-white text-black poppins">
      {/* New project input tag */}
      <div>
        <p className="text-lg">
          Create New Project{" "}
          <span className="text-xs">
            {data.ProjectCount <= 0
              ? "No Projects Left"
              : data.ProjectCount + " Projects Left"}
          </span>
        </p>
        <input
          type="text"
          className="p-3 border-2 border-[#0A2D28] rounded mt-5 w-full text-sm"
          placeholder="New project name"
          onChange={(e) => setprojectname(e.target.value)}
        />
      </div>

      {/* Storgae Slider */}
      <div className="mt-10">
        <p className="text-lg">
          Select Storage Size{" "}
          <span className="text-xs font-medium">
            {data.StorageSize <= 0
              ? "No Space Left"
              : Math.round(data.StorageSize, 2) + "MB Left"}
          </span>
        </p>
        {projectsize}
        <Slider setStorage={setStorage} data={data} />
      </div>

      {/* Project Templates */}
      <div className="mt-2">
        <p className="text-lg">Select Templates</p>
        <p className="mt-5">
          Selected <span className="font-bold">&ldquo; {template} &rdquo;</span>
        </p>
        <div className="flex flex-wrap gap-5 mt-7 mb-10">
          <div
            className="w-60 h-48 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28] cursor-pointer"
            onClick={() => settemplate("UserInfo Database")}
          >
            <Image
              alt="database"
              src={"/assets/database.png"}
              width={200}
              height={300}
              className=" flex items-center justify-center pl-4"
            />
            <div className="w-60 h-16 bg-[#0A2D28] rounded p-2  text-white flex flex-col gap-3 text-sm">
              <p>UserInfo Database</p>
              <div onClick={() => setshowtables(true)} className="text-xs">
                Preview Tables
              </div>
            </div>
          </div>
          <div
            className="w-60 h-48 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28] cursor-pointer"
            onClick={() => settemplate("Feedback Database")}
          >
            <Image
              alt="database"
              src={"/assets/database.png"}
              width={200}
              height={300}
              className=" flex items-center justify-center pl-4"
            />
            <div className="w-60 h-16 bg-[#0A2D28] rounded p-2  text-white flex flex-col gap-3 text-sm">
              <p>Feedback Database</p>
              <div onClick={() => setshowtables(true)} className="text-xs">
                Preview Tables
              </div>
            </div>
          </div>
          <div
            className="w-60 h-48 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28] cursor-pointer"
            onClick={() => settemplate("NewsLetter Database")}
          >
            <Image
              alt="database"
              src={"/assets/database.png"}
              width={200}
              height={300}
              className=" flex items-center justify-center pl-4"
            />
            <div className="w-60 h-16 bg-[#0A2D28] rounded p-2  text-white flex flex-col gap-3 text-sm">
              <p>NewsLetter Database</p>
              <div onClick={() => setshowtables(true)} className="text-xs">
                Preview Tables
              </div>
            </div>
          </div>
          <div
            className="w-60 h-48 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28] cursor-pointer"
            onClick={() => settemplate("Contact Us Database")}
          >
            <Image
              alt="database"
              src={"/assets/database.png"}
              width={200}
              height={300}
              className=" flex items-center justify-center pl-4"
            />
            <div className="w-60 h-16 bg-[#0A2D28] rounded p-2  text-white flex flex-col gap-3 text-sm">
              <p>Contact Us Database</p>
              <div onClick={() => setshowtables(true)} className="text-xs">
                Preview Tables
              </div>
            </div>
          </div>
          <div
            className="w-60 h-48 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28] cursor-pointer"
            onClick={() => settemplate("Contact Us 2 Database")}
          >
            <Image
              alt="database"
              src={"/assets/database.png"}
              width={200}
              height={300}
              className=" flex items-center justify-center pl-4"
            />
            <div className="w-60 h-16 bg-[#0A2D28] rounded p-2  text-white flex flex-col gap-3 text-sm">
              <p>Contact Us 2 Database</p>
              <div onClick={() => setshowtables(true)} className="text-xs">
                Preview Tables
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit Project */}
      <div
        className="bg-[#0A2D28] w-40 p-2 text-center text-white rounded cursor-pointer"
        onClick={() => CreateProject()}
      >
        <p>Create Project</p>
      </div>

      <PreviewTables
        showTable={showTable}
        showtables={showtables}
        type={template}
      />
    </div>
  );
};

export default NewProject;
