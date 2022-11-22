import Head from "next/head";

/* eslint-disable @next/next/no-img-element */
const Subscriptions = () => {
  return (
    <div className="p-5 poppins">
      <Head>
        <title>fastdbaccess | Subscriptions</title>
      </Head>
      <div className="w-80  mb-4 mt-5">
        <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
          <h4 className="text-2xl text-[#0A2D28] font-semibold pb-8">Basic</h4>
          <ul className="flex flex-col mb-6">
            <li className="flex items-center mb-2.5">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                className="mr-4"
                alt="check-mark"
              />
              <p className="text-gray-800 text-base font-normal">24/7 access</p>
            </li>
            <li className="flex items-center mb-2.5">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                className="mr-4"
                alt="check-mark"
              />
              <p className="text-gray-800 text-base font-normal">5 Projects</p>
            </li>
            <li className="flex items-center mb-2.5">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                className="mr-4"
                alt="check-mark"
              />
              <p className="text-gray-800 text-base font-normal">
                5 Database Templates
              </p>
            </li>
            <li className="flex items-center mb-2.5">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                className="mr-4"
                alt="check-mark"
              />
              <p className="text-gray-800 text-base font-normal">
                20MB storage
              </p>
            </li>
            <li className="flex items-center mb-2.5">
              <img
                src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                className="mr-4"
                alt="check-mark"
              />
              <p className="text-gray-800 text-base font-normal">
                Account Security
              </p>
            </li>
          </ul>
          <p className="text-base text-[#0A2D28] relative pl-3">
            <span className="font-light text-lg">$</span>
            <span className="text-2xl font-semibold">0</span>
            <span className="text-gray-600 font-light text-lg">/month</span>
          </p>
          <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#0A2D28] px-8 text-base font-semibold py-3">
            Current Plan
          </button>
        </div>
      </div>
      <p className="text-lg">Pro Plan Coming Soon</p>
    </div>
  );
};

export default Subscriptions;
