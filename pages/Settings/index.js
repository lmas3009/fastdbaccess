import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import instance from "../../utils/axios";
import { signIn, signOut, useSession } from "next-auth/react";

const Settings = () => {
  const { data: session, status } = useSession();
  const [data, setdata] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      instance
        .post("/userinfo", {
          email: session.user.email,
          getuser: true,
        })
        .then((res) => {
          if (res.data.status) {
            setdata(res.data.result);
          }
        });
    }
  }, [status, session]);

  return (
    <div className="p-5 poppins">
      <div className="flex flex-wrap mt-5 gap-5">
        <div className="w-52 h-44 bg-[#0a2d28] rounded flex flex-col justify-between p-5 text-white">
          <p className="text-xl">Storage Used</p>
          <div className="flex flex-col gap-2">
            <p>{20 - Math.round(data.StorageSize, 2)}MB / 20MB</p>

            <p>{((20 - Math.round(data.StorageSize, 2)) / 20) * 100}% used</p>
          </div>
        </div>
        <div className="w-52 h-44 bg-[#0a2d28] rounded flex flex-col justify-between p-5 text-white">
          <p className="text-xl">Projects Used</p>
          <div className="flex flex-col gap-2">
            <p>{5 - Math.round(data.ProjectCount, 2)} / 5 projects</p>

            <p>{((5 - Math.round(data.ProjectCount, 2)) / 5) * 100}% used</p>
          </div>
        </div>
      </div>
      <div className="mt-10 p-2 bg-[#0a2d28] w-max rounded text-white pl-5 pr-5 cursor-pointer">
        <p>Delete Account</p>
      </div>
    </div>
  );
};

export default Settings;
