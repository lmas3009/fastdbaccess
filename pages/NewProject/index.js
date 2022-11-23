import Image from "next/image";
import { useEffect, useState } from "react";
import PreviewTables from "./preivewtables";
import Slider from "./slider";
import instance from "../../utils/axios";
import Router, { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import Head from "next/head";

const NewProject = () => {
  const [projectname, setprojectname] = useState("");
  const [projectsize, setprojectsize] = useState("");
  const [template, settemplate] = useState("None");
  const [showtables, setshowtables] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    if (projectname === "") {
      setLoading(false);
      alert("No project");
    } else if (projectsize === "") {
      setLoading(false);
      alert("Select size");
    } else if (template === "None") {
      setLoading(false);
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
          if (res.data.status) {
            setLoading(false);
            Router.back();
          }
        });
    }
  };

  return (
    <div className="p-5 bg-white text-black poppins">
      <Head>
        <title>fastdbaccess | New Project</title>
      </Head>
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
          disabled={data.ProjectCount <= 0 ? true : false}
          className="p-3 border-2 border-[#0A2D28] rounded mt-5 w-full text-sm bg-white text-black"
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
        className="bg-[#0A2D28] w-max p-2 pl-4 pr-4 text-center text-white rounded cursor-pointer flex items-center gap-2 "
        onClick={() => CreateProject()}
      >
        {loading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
