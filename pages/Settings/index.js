import { useEffect, useState } from "react";
import instance from "../../utils/axios";
import { signOut, useSession } from "next-auth/react";
import Head from "next/head";

const Settings = () => {
  const { data: session, status } = useSession();
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(false);

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

  const DeleteAccount = () => {
    setLoading(true);
    if (status === "authenticated") {
      instance
        .delete("/userinfo", {
          params: {
            email: session.user.email,
          },
        })
        .then((res) => {
          setLoading(false);
          if (res.data.status) {
            signOut({ callbackUrl: "https://fastdbaccess.vercel.app" });
          }
        });
    } else {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 poppins">
      <Head>
        <title>fastdbaccess | Settings</title>
      </Head>
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
      <div
        onClick={() => DeleteAccount()}
        className="mt-10 p-2 bg-[#0a2d28] w-max rounded text-white pl-5 pr-5 cursor-pointer flex items-center gap-3"
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
        <p>Delete Account</p>
      </div>
    </div>
  );
};

export default Settings;
