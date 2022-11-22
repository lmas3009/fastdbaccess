import { useEffect, useState } from "react";
import instance from "../../utils/axios";

const Tables = ({ data, database, pid }) => {
  const [computesize, setcomputesize] = useState("");

  useEffect(() => {
    const formatByteSize = (bytes) => {
      var size = "";

      if (bytes < 1024) size = bytes + " bytes";
      else if (bytes < 1048576) size = (bytes / 1024).toFixed(3) + " KB";
      else if (bytes < 1073741824) size = (bytes / 1048576).toFixed(3) + " MB";
      else size = (bytes / 1073741824).toFixed(3) + " GB";

      instance
        .put("/projects", {
          id: pid,
          computesize: size.toString(),
        })
        .then((res) => {
          
        });

      return size.toString();
    };
    const size = formatByteSize(Buffer?.byteLength(JSON.stringify(data)));
    setcomputesize(size);
  }, [pid,data]);

  return (
    <div className="flex flex-col">
      <p className="text-sm mt-5">Storage used {computesize}</p>
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
                  {database?.length > 0 ? (
                    database.map((item, index) => {
                      return (
                        <th
                          key={index}
                          scope="col"
                          className="text-sm font-medium text-white px-6 py-4"
                        >
                          {item}
                        </th>
                      );
                    })
                  ) : (
                    <></>
                  )}
                </tr>
              </thead>
              <tbody>
                {data?.length > 0 ? (
                  data.map((item, index) => {
                    return (
                      <tr className="bg-white border-b" key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        {database?.length > 0 ? (
                          database.map((_item, index) => {
                            return (
                              <td
                                key={index}
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                              >
                                {item[_item]}
                              </td>
                            );
                          })
                        ) : (
                          <></>
                        )}
                      </tr>
                    );
                  })
                ) : (
                  <tr className="bg-white border-b">
                    <td
                      colSpan={database?.length + 1}
                      className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
                    >
                      No Data Found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tables;
