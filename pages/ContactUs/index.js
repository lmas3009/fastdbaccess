import React, { useState } from "react";
import Header from "../LandingPage/Header";
import Image from "next/image";
import Logo from "../LandingPage/IntroSection/logo";
import { Fade } from "react-reveal";
import styles from "../../styles/Home.module.css";
import Head from "next/head";

function ContactUs() {
  return (
    <div className="relative w-full h-full poppins bg-white">
      <Head>
        <title>fastdbaccess | Contact Us</title>
      </Head>
      <Image
        alt="vectorimg"
        src={"/assets/vectorimg.png"}
        width={400}
        height={400}
        className="w-[100%] h-[full] sm:h-[70vh] md:h-[80vh]"
      />
      <div className="absolute w-full top-0 text-black">
        <Header />
        <div className="w-full flex items-center justify-center mt-10">
          <Fade top>
            <Logo font="large" />
          </Fade>
        </div>
        <div className="w-full flex items-center justify-center">
          <Fade>
            <div className=" rounded py-12 lg:px-28 px-8 w-max bg-white mt-10">
              <p className="text-4xl leading-7 text-center text-gray-700 abel">
                Contact Us
              </p>
              <div className="md:flex items-center mt-16">
                <div className="md:w-72 flex flex-col">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Full Name
                  </label>
                  <input
                    tabIndex={0}
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-800 placeholder-gray-300 placeholder:text-sm"
                    placeholder="Full Name"
                  />
                </div>
                <div className="md:w-72 flex flex-col md:ml-6 md:mt-0 mt-4">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Email Address
                  </label>
                  <input
                    tabIndex={0}
                    type="name"
                    className="text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-800 placeholder-gray-300 placeholder:text-sm"
                    placeholder="Email Id"
                  />
                </div>
              </div>
              <div>
                <div className="w-full flex flex-col mt-8">
                  <label className="text-base font-semibold leading-none text-gray-800">
                    Message
                  </label>
                  <textarea
                    tabIndex={0}
                    aria-label="leave a message"
                    role="textbox"
                    type="name"
                    className="h-36 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-indigo-700 mt-4 bg-white border rounded border-gray-800 placeholder-gray-100 resize-none"
                    defaultValue={""}
                  />
                </div>
              </div>
              <p className="text-xs leading-3 text-gray-600 mt-4">
                By clicking submit you agree to our terms of service, privacy
                policy and how we use data as stated
              </p>
              <div className="flex items-center justify-center w-full">
                <button className="mt-9 text-base leading-none text-white py-4 px-10 bg-[#0A2D28] rounded hover:bg-indigo-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none">
                  SUBMIT
                </button>
              </div>
            </div>
          </Fade>
        </div>

        <Fade bottom>
          <footer className={styles.footer}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Powered by fastdbaccess
            </a>
            <p>Github</p>
          </footer>
        </Fade>
      </div>
    </div>
  );
}

export default ContactUs;
