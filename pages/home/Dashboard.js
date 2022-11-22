import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import { useRouter } from "next/router";
import { BsGraphUp } from "react-icons/bs";

const Dashboard = () => {
  const [projects, setprojects] = useState([]);
  const [totalcount, settotalcount] = useState(0);
  const [size, setsize] = useState("");

  const query = useRouter();
  const { id } = query.query;

  useEffect(() => {
    instance
      .get("/projects", {
        params: {
          id: id,
          projectbyid: false,
        },
      })
      .then((res) => {
        if (res.data.status) {
          setprojects(res.data.result);
          var count = 0;
          res.data.result.map((item, index) => {
            count += Number(item.projectvaluescount);
          });
          settotalcount(count);
        }
      });
  }, [id, totalcount]);

  return (
    <div className="p-5 poppins">
      <p>Overview on your Projects</p>
      <div className="h-28 w-60 flex flex-col justify-between bg-[#0A2D28] mt-5 mb-5 rounded p-5">
        <p className="text-white text-base">Project Count Stats</p>
        <div>
          <p className="text-2xl text-white flex items-center gap-2">
            <span className="text-sm">
              <BsGraphUp />
            </span>
            {totalcount}
            <span className="text-lg -ml-1">+</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center border-2 border-[#0A2D28]">
                <thead className="border-b rounded-t bg-[#0A2D28]">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Project Name
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Total Count
                    </th>

                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Total Storage Used
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-white px-6 py-4"
                    >
                      Last Updated
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {projects.length > 0 ? (
                    projects.map((item, index) => {
                      return (
                        <tr className="bg-white border-b" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {index + 1}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.projectname}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.projectvaluescount}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.computesize}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {item.last_updated}
                          </td>
                        </tr>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
