import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/footer";
import Header from "../components/header";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { animate, motion } from "framer-motion";

import upcoming from "../public/upcoming.png"
import event11 from "../public/event11.PNG"
import event12 from "../public/event12.PNG"
import event13 from "../public/event13.PNG"



const upcomingVarient = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2,
      staggerChildren: 0.3,
    },
  },
};
const upcomingChildImageVarient = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2,
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
      duration: 0.8,
    },
  },
};
const upcomingChildVarient = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeInOut",
      type: "spring",
      stiffness: 120,
      duration: 0.8,
    },
  },
};

export default function Events() {
  let counter = useRef();
  let plus = useRef();

  let count = {
    value: 0,
  };
  useEffect(() => {
    gsap.to(count, {
      value: 65,
      duration: 0.8,
      onUpdate: () => (counter.current.innerText = Math.round(count.value)),
    });
    gsap.fromTo(
      plus.current,
      { opacity: 0, x: -100 },
      { opacity: 1, duration: 1, ease: "power2.out", x: 0 }
    );
  }, []);
  return (
    <div className="bg-black flex flex-col justify-around h-fit w-fit  text-white ">
      <Head>
        <title>Events/NWC</title>
        <meta name="description" content="Events at NWC Club " />
        <link rel="icon" href="/nwc.png" />
      </Head>
      <Header textColor={"white"} />
      <div className=" flex flex-col justify-around  ">
        {/*for all events
         we take image for two cases 
         Case 1 : when browser width < 1024 px
         Case 2 : when browser width >=1024 px
         So some of the images are hidden when width <1024 and some are visible
         and same for width >=1024px
         
         
         */}
        <section className="bg-black events-main-pg h-fit xs:h-screen flex flex-col justify-center md:justify-evenly lg:flex-row lg:justify-evenly lg:items-center">
          <div className="left mb-40  text-center">
            <div className="justify-center flex items-center mb-10">
              <h1
                ref={counter}
                className="font-extrabold text-9xl md:text-[150px] xl:text-[176px]"
              >
                0
              </h1>
              <span
                ref={plus}
                className="font-extrabold opacity-0 text-9xl md:text-[150px] xl:text-[176px]"
              >
                +
              </span>
            </div>

            <motion.h4
              className=" font-bold text-2xl lg:text-6xl"
              initial={{
                opacity: 0,
                y: -150,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: 0.1,
              }}
            >
              Events done so far
            </motion.h4>
          </div>
          <div className="hidden seperator h-[34rem] w-1.5 rounded-xl border-4 border-[#010D51] bg-light-blue  lg:block"></div>
          <motion.div
            className="right  text-white text-center"
            variants={upcomingVarient}
            initial="initial"
            whileInView={"animate"}
            viewport={{ once: true, amount: 1 }}
          >
            <motion.h3
              className=" font-bold mb-10 text-4xl mt-0 md:text-6xl"
              variants={upcomingChildVarient}
            >
              Upcoming Events
            </motion.h3>
            <motion.div
              className="md:hidden lg:block lg:mt-4"
              variants={upcomingChildImageVarient}
            >
              <Image
                alt="upcoming"
                src={upcoming}
                width="500"
                height="300"
              />
            </motion.div>
            <motion.div
              className="hidden md:block lg:hidden  lg:mt-4"
              variants={upcomingChildImageVarient}
            >
              <Image
                alt="upcoming"
                src={upcoming}
                width="800"
                height="450"
              />
            </motion.div>

              {/* <Link href="/register">
                <span className=" font-bold text-xl"> Register Now </span>
              </Link> */}
              {/* <div class="absolute  -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div> */}
              <div class="grid gap-8 items-start justify-center mt-10">
                <motion.div class="relative group"
                variants={upcomingChildVarient}
                >
                  <motion.div class="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></motion.div>
                  <button class="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">

                    <Link href="/register" >
                      Register Now &rarr;
                    </Link>

                  </button>
                </motion.div>
              </div>
          </motion.div>
        </section>

        <section className=" bg-black events  h-fit">
          <h1 className="font-bold text-center mt-4 mb-5 text-7xl">
            Time Flies when you&apos;re having fun!
          </h1>
          <h5 className="font-bold text-center mt-4 mb-5 text-4xl">
            Relax, unwind and explore fantastic shows from the past.
          </h5>
          <div className="bg-black lg:grid lg:grid-cols-2 lg:gap-24  ">
            <div className=" event-desc   p-7 h-fit">


              <h1 className=" font-bold text-5xl ">SRM IDEATHON </h1>
              <h1 className="text-2xl font-bold">22.01.2022</h1>

              <div className="event-details  h-full">
                <div className="my-7">
                  <h3 className=" font-extrabold text-2xl">
                    <span className="text-[#474747] font-extrabold text-2xl">
                      Convenors
                    </span>{" "}
                    : Ms.M.Safa
                  </h3>
                  <h3 className="font-extrabold text-2xl">
                    <span className="text-[#474747] font-extrabold ">
                      Judges
                    </span>{" "}
                    : Mrs. Osa Mokherji Systems Engineer TCS, Mr. Kailash
                    Chandak Principal Engineer Coinswitch
                  </h3>
                </div>
                <div className="bg-white  event-image mx-auto w-fit lg:hidden lg:py-32 lg:ml-4">
                  <Image
                    alt="event11"
                    src={event11}
                    width="904"
                    height="508"
                  />
                </div>

                <p className=" font-extrabold text-xl ">
                  Women Safety, Lens Revolution, and Food Processing were among
                  the themes explored by the attendees. All of the selected
                  teams were split into 2 sessions. Each team had three to four
                  minutes to pitch their proposal and six minutes to complete
                  the judges&apos; questionnaire. The winners were announced by
                  the judges. All winners shared their experiences and thanked
                  the judges and team for allowing them to present their
                  innovative ideas.
                </p>
              </div>
            </div>
            <div className=" hidden lg:block bg-white  event-img lg:py-32 ">
              <div className="flex justify-center">

                <Image
                  alt="event11"
                  src={event11}
                  width="547"
                  height="341"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="events h-fit ">
          <div className="bg-white lg:grid lg:grid-cols-2 lg:gap-24  ">

            <div className="hidden bg-white  lg:block event-image py-24 ml-4">
              <Image
                alt="event12"
                src={event12}
                width="904"
                height="508"
              />
            </div>
            <div className="bg-black  event-desc  p-7 h-fit">
              <h1 className="font-extrabold text-5xl ">
                <span className="font-extrabold text-2xl block mb-2 mt-5">
                  Webinar on
                </span>
                ‘Successful career planning, Higher Education & Technical
                Profile Building by CareerLabs’{" "}
                <span className="font-bold text-2xl block mt-2">
                  25.01.2022
                </span>
              </h1>
              <div className="event-details  h-full xl:h-fit">
                <div className="my-7">
                  <h3 className="font-extrabold text-2xl mb-1">
                    <span className="text-[#474747] font-extrabold text-2xl">
                      Convenors
                    </span>{" "}
                    : Ms. M. Safa, Dr.T.Sam Pradeep, Mr.Savaridassan,
                    Dr.B.Yamini, Dr.Vijay Vasanth
                  </h3>
                  <h3 className="font-extrabold text-2xl">
                    <span className="text-[#474747] font-extrabold ">
                      Judges
                    </span>
                    :Nitin Ravi & Abishek Gupta, Byju’s – National Eminent
                    Speaker, Founding member
                  </h3>
                </div>
                <div className="event-image mx-auto w-fit lg:hidden lg:py-32 lg:ml-4">
                  <Image
                    alt="event12"
                    src={event12}
                    width="904"
                    height="508"
                  />
                </div>
                <p className="font-extrabold text-xl">
                  It was a very useful session for students on Successful Career
                  Planning, Higher Education & Technical Profile Building by
                  CareerLabs
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className=" events h-fit ">
          <div className="bg-black  lg:grid lg:grid-cols-2 lg:gap-24  ">
            <div className="event-desc  p-7 h-fit">
              <h1 className="font-extrabold text-5xl mt-4">
                International Women&apos;s Day Celebration
                <span className="text-2xl block">07.03.2022</span>
              </h1>
              <div className="event-details  h-full">
                <div className="my-7">
                  <h3 className="font-extrabold text-2xl mb-1">
                    <span className="text-[#474747] font-extrabold text-2xl">
                      Convenors and Co-Convenors:
                    </span>{" "}
                    Ms. M. Safa, Dr.B.Yamini
                  </h3>
                </div>
                <div className="event-image  lg:hidden ">
                  <Image
                    alt="event13"
                    src={event13}
                    width="904"
                    height="593"
                  />
                </div>
                <p className="font-extrabold text-xl ">
                  International Women&apos;s Day on 8 March is a day to
                  celebrate the social, economic, and political achievements of
                  women, reflect on progress, and demand gender equality. For
                  over a hundred years, International Women&apos;s Day has put
                  the spotlight on issues affecting women all over the world.
                  Today, International Women&apos;s Day belongs to everyone who
                  believes that women&apos;s rights are human rights. NWC
                  Association conducted women&apos;s day with a lot of fun
                  games, a motivational speech by Dr.Revathi Venkatraman, Chair
                  Person, School of computing, and concluded with prize
                  distribution to the winners of the games.
                </p>
              </div>
            </div>
            <div className="bg-white">

              <div className="bg-white z-10 hidden lg:block event-image px-7 py-32  mr-6">
                <Image
                  alt="event13"
                  src={event13}
                  width="910"
                  height="593"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
