/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import DatabaseProcess from "./LandingPage/databaseProcess";
import Header from "./LandingPage/Header";
import Intro from "./LandingPage/IntroSection";
import Jump from "react-reveal/Jump";
import { motion } from "framer-motion";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { Fade } from "react-reveal";
import Logo from "./LandingPage/IntroSection/logo";
import styles from "../styles/Home.module.css";

export default function Home() {
  const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <div className="bg-white text-black w-full h-full">
      <Head>
        <title>fastdbaccess</title>
        <meta name="description" content="Organize and Manage your Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative w-full h-full ">
        <Image
          alt="vectorimg"
          src={"/assets/vectorimg.png"}
          width={400}
          height={400}
          className="w-full h-[full] sm:h-[70vh] md:h-[80vh]"
        />
        <div className="absolute w-full top-0">
          <div className="h-full">
            <Header />
            <Intro />
          </div>
          <motion.div
            variants={animationConfiguration}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 3 }}
          >
            <div>
              <Jump>
                <DatabaseProcess />
              </Jump>
            </div>
          </motion.div>

          <div>
            <div className="h-full sm:h-[60vh] mt-24 mb-24 w-full flex flex-col gap-20 items-center justify-center">
              <Fade top>
                <p className="w-full flex items-center justify-center text-5xl abel ">
                  Features
                </p>
              </Fade>
              <div className="flex flex-col sm:flex-row gap-10 p-0 md:pl-28 md:pr-28">
                <Fade top>
                  <div className="w-full h-full flex flex-col gap-3 items-center justify-center text-center">
                    <p className="text-5xl text-[#0A2D28]">
                      <AiOutlineSafetyCertificate />
                    </p>
                    <p className="text-4xl abel">Data Security</p>
                    <p className="text-xl poppins">
                      Your data will secured with encrypted key
                    </p>
                  </div>
                </Fade>

                <Fade top>
                  <div className="w-full h-full flex flex-col gap-3 items-center justify-center text-center">
                    <p className="text-5xl text-[#0A2D28]">
                      <AiOutlineSafetyCertificate />
                    </p>
                    <p className="text-4xl abel">Easy to Use</p>
                    <p className="text-xl poppins">
                      Very user friendly application
                    </p>
                  </div>
                </Fade>

                <Fade top>
                  <div className="w-full h-full flex flex-col gap-3 items-center justify-center text-center">
                    <p className="text-5xl text-[#0A2D28]">
                      <AiOutlineSafetyCertificate />
                    </p>
                    <p className="text-4xl abel">Easy to Integrate</p>
                    <p className="text-xl poppins">
                      You can easly integrate the api with any frameworks
                    </p>
                  </div>
                </Fade>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center mb-20 p-5 sm:p-0">
            <Fade bottom>
              <div className="h-full p-10 w-full sm:w-[800px] shadow-2xl shadow-black rounded-md">
                <div className="w-full h-full flex flex-col gap-3 items-center justify-center text-center">
                  <Logo font="large" />
                  <p className="text-5xl abel">Run Database in Seconds</p>
                  <p className="p-2 pl-5 pr-5 bg-[#0A2D28] text-white rounded text-center">
                    Get Started
                  </p>
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
    </div>
  );
}
