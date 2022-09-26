import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import MemberCard from "../components/membercard";
import { animate, motion } from "framer-motion";

import amrit from "../public/amrit.png";
import arvindg from "../public/arvindg.png";
import safamaam from "../public/safamaam.jpeg";
import home from "../public/home.png";
import nwc from "../public/nwc.png";

const heroImageVarient = {
  initial: {
    x: "-100vw",
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "anticipate",
      delay: 0.9,
      type: "spring",
      stiffness: 120,
      duration: 1.3,
    },
  },
};

export default function Home() {
  return (
    <div className=" text-white bg-black h-full w-fit lg:w-full pt-0">
      <Head>
        <title>NWC</title>
        <meta name="description" content="NWC department " />
        <link rel="icon" href={nwc} />
      </Head>
      <Header />
      <div className="  flex  px-36 h-screen  ">
        <motion.div
          className="hero-image hidden lg:block"
          variants={heroImageVarient}
          initial="initial"
          animate="animate"
        >
          <Image alt="homegif" src={home} width={1024} height={1024} />
        </motion.div>
        <div className="hero-desc-container py flex flex-col w-screen  items-start">
          <div className="font-extrabold text-7xl mb-5">
            <motion.h1
              className="font-extrabold text-9xl mb-5 "
              initial={{
                color: "white",
              }}
              whileInView={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#007CF0",
                  "#00b5f8",
                  "#00cce9",
                  "#00DFD8",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            >
              NWC
            </motion.h1>

            <motion.h1
              className="font-extrabold text-9xl mb-5 text-transparent  "
              initial={{
                color: "white",
              }}
              animate={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#7928CA",
                  "#ac06ba",
                  "#d000a8",
                  "#eb0094",
                  "#FF0080",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            >
              Association
            </motion.h1>
            <motion.h1
              className="font-extrabold text-9xl mb-5 text-transparent "
              initial={{
                color: "white",
              }}
              animate={{
                color: [
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#ffffff",
                  "#FF4D4D",
                  "#ff6e3d",
                  "#ff8e2d",
                  "#ffad23",
                  "#F9CB28",
                  "#ffffff",
                ],
              }}
              transition={{
                repeat: Infinity,
                duration: 9,
                ease: "linear",
              }}
            >
              SRM KTR
            </motion.h1>
          </div>
          <h5 className="font-extrabold text-xl  lg:mb-5">
            The official student association of the Department of NWC, SRM IST
            KTR.
          </h5>

          <div className=" lg:mt-10 mx-auto lg:hidden">
            <Image alt="homegif" src={home} width={720} height={720} />
          </div>
          <div className="flex justify-center  lg:justify-start  w-full ">
            <Link href="/notice">
              <button className="bg-[#010D51] border-4 border-black font-bold mx-auto  text-xl mt-1 rounded-3xl w-44 h-12">
                Join Now!
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="  board-members lg:border-b h-fit w-full ">
        <motion.h1
          className="font-bold mb-20 text-center text-7xl"
          initial={{
            opacity: 0,
          }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{
            ease: "anticipate",
            duration: 1,
          }}
        >
          Board Members
        </motion.h1>
        <div className="flex flex-col justify-around items-center">
          <div className="md:mb-0 flex justify-center  flex-wrap">
            <MemberCard
              src={safamaam}
              name={"Ms. M. Safa"}
              designation={"President"}
              desc={"Assistant Professor NWC SRM IST"}
              knowmore={"Know more"}
              knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
            />
          </div>
          <div className="flex w-full justify-around flex-wrap items-center ">
            <div className="my-10 ">
              <MemberCard
                src={arvindg}
                name={"Mr. Aravind G"}
                designation={"Vice-President"}
                desc={"CSE 4th year SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/safa-m-32417122b"}
              />
            </div>
            <div className="lg:my-10">
              <MemberCard
                src={amrit}
                name={"Mr. Armit Anand"}
                designation={"Joint-Secretary"}
                desc={"CSE 3rd year SRM IST"}
                knowmore={"Know more"}
                knowmoreSrc={"https://www.linkedin.com/in/anandamrit174"}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
