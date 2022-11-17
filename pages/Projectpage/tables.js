const Tables = ({ data, database }) => {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-center border-2 border-[#0A2D28]">
              <thead class="border-b rounded-t bg-[#0A2D28]">
                <tr>
                  <th
                    scope="col"
                    class="text-sm font-medium text-white px-6 py-4"
                  >
                    #
                  </th>
                  {database?.length > 0 ? (
                    database.map((item, index) => {
                      return (
                        <th
                          key={index}
                          scope="col"
                          class="text-sm font-medium text-white px-6 py-4"
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
                      <tr class="bg-white border-b" key={index}>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {index + 1}
                        </td>
                        {database?.length > 0 ? (
                          database.map((_item, index) => {
                            return (
                              <td
                                key={index}
                                class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
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
                  <tr class="bg-white border-b">
                    <td
                      colspan={database?.length+1}
                      class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center"
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
