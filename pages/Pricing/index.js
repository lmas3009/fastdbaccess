/* eslint-disable @next/next/no-img-element */
import Header from "../LandingPage/Header";
import Logo from "../LandingPage/IntroSection/logo";
import Image from "next/image";
import { Fade } from "react-reveal";
import styles from "../../styles/Home.module.css";

const Pricing = () => (
  <div className="relative w-full h-full ">
    <Image
      alt="vectorimg"
      src={"/assets/vectorimg.png"}
      width={400}
      height={400}
      className="w-full h-[full] sm:h-[70vh] md:h-[80vh]"
    />
    <div className="absolute w-full top-0">
      <Header />
      <section className="px-6 xl:px-0">
        <div className="mt-10 mx-auto container flex flex-col items-center justify-center">
          <Fade top>
            <Logo font="large" />
          </Fade>
          <Fade top>
            <div className="flex flex-col lg:items-center justify-center w-full mt-5">
              <h1 className=" text-gray-800 text-5xl flex text-center items-center justify-center abel">
                The Right Plans for your account
              </h1>
            </div>
          </Fade>
          <div className="flex items-center justify-center w-full">
            <div className="pt-14">
              <div className="container mx-auto">
                <div className="flex flex-wrap mb-12 justify-between sm:justify-center -mx-6">
                  <Fade left>
                    <div className="w-80  mb-4 px-6">
                      <div className="py-5 px-4 bg-white border border-gray-200shadow rounded-lg text-left">
                        <h4 className="text-2xl text-[#0A2D28] font-semibold pb-8">
                          Basic
                        </h4>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 text-base font-normal">
                              24/7 access
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMark.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-gray-800 text-base font-normal">
                              Unlimited Projects
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
                          <span className="text-gray-600 font-light text-lg">
                            /month
                          </span>
                        </p>
                        <button className="mt-5 w-full bg-gray-200 hover:bg-gray-300 focus:outline-none transition duration-150 ease-in-out rounded text-[#0A2D28] px-8 text-base font-semibold py-3">
                          Choose
                        </button>
                      </div>
                    </div>
                  </Fade>
                  <Fade right>
                    <div className="w-80 mb-4 px-6">
                      <div className="py-5 px-4 bg-[#0A2D28] border border-gray-200 shadow rounded-lg text-left">
                        <h4 className="text-2xl text-white font-semibold pb-8">
                          Pro
                        </h4>
                        <ul className="flex flex-col mb-6">
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              24/7 access
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              Unlimited Projects
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              Upto 500MB storage
                            </p>
                          </li>
                          <li className="flex items-center mb-2.5">
                            <img
                              src="https://cdn.tuk.dev/assets/templates/weCare/checkMarkWhite.png"
                              className="mr-4"
                              alt="check-mark"
                            />
                            <p className="text-white text-base font-normal">
                              Account Security
                            </p>
                          </li>
                        </ul>
                        <p className="text-base text-white relative pl-3">
                          <span className="font-light text-lg">$</span>
                          <span className="text-2xl font-semibold">20</span>
                          <span className="font-light text-lg">/month</span>
                        </p>
                        <button className="mt-5 w-full text-[#0A2D28] focus:outline-none transition duration-150 ease-in-out rounded bg-white hover:bg-gray-100 px-8 py-3 text-base font-semibold">
                          Coming Soon
                        </button>
                      </div>
                    </div>
                  </Fade>
                </div>
              </div>
              <style
                dangerouslySetInnerHTML={{
                  __html: "",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <style>
        {` 
            .checkbox:checked {
                right: 0;
                background-color: #4338ca;
            }
            `}
      </style>

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
export default Pricing;
