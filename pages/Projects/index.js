import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const query = useRouter();
  const { id } = query.query;

  const [projectdata, setprojectdata] = useState([]);

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

  const modifytime = (time) => {
    var date = time.split(" ")
    return date[1]+" "+date[2]+" "+date[3]
  }

  return (
    <div className="p-5 poppins">
      <p>Find all your Projects</p>
      <div className="flex flex-wrap gap-5 mt-10">
        {projectdata.length > 0 ? (
          projectdata.map((item, index) => {
            return (
              <div key={index}>
                <div className="w-60 h-56 flex flex-col items-center justify-center rounded border-2 border-[#0A2D28]">
                  <Image
                    alt="database"
                    src={"/assets/database.png"}
                    width={150}
                    height={20}
                    className=" flex items-center justify-center pl-4"
                  />
                  <div className="w-60 h-full bg-[#0A2D28] rounded p-3 text-white flex flex-col gap-3 text-sm">
                    <p>{item.projectname}</p>
                    <div className="w-full flex justify-between">
                      <div className="text-xs">{item.template}</div>
                      <div className="text-xs font-medium">&ldquo;{item.projectsize} MB&rdquo;</div>
                    </div>
                    <div className="w-full flex justify-between">
                      <div className="text-xs">{modifytime(item.created_on)}</div>
                      <Link onClick={()=>window.localStorage.setItem("fastdbaccess_analytics",item.projectname+"#"+item.id)} href={"/home/"+id+"#analytics"}  className="text-xs cursor-pointer">open</Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No Projects created</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
