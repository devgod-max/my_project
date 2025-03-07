import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          {/* <h3 className="text-neutral text-center">Something About Myself</h3> */}
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Me</span>
          </h1>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
            
          >
            <img              
              src="/debugging.jpeg"
              alt="Cristiano Silva"
              className="p-12 w-70 h-70 transform translate-y-[-12%] "
              // title="Cristiano Silva"
              style={{borderRadius : '100px'}}
            />

          </motion.div>
          <motion.div
            className=""
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold mb-4 text-center translate-y-[-380%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">Cristiano Silva</h1>
            <div className="my-8">
              <TypeAnimation
                className="text-2xl text-primary font-bold text-center translate-y-[-500%] sm:translate-y-[-0%]  sm:text-2xl sm:mb-2 md:text-left"
                cursor={true}
                sequence={[
                  "Senior Software Engineer",
                  2000,
                  "Senior Frontend Engineer",
                  2000,
                  "Senior backend Engineer",
                  2000 ,
                  "Cloud Engineer",
                  2000
                ]}
                wrapper="div"
                repeat={Infinity}
              />
            </div>
            <p className="text-neutral font-medium text-center translate-y-[-100%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            Hi! I am Cristiano Silva, a Senior Full-Stack Developer with 10+y ears of experience in building modern, responsive web applications. 
            I specialize in leveraging the latest technologies like React, Angular, Vue, Node.js, Django, Spring Boot, .NET and Docker to create 
            scalable solutions that enhance user experience and performance.
            Recently, I led a project using MERNstack architecture that improved site speed by 30% while providing a seamless user interface.
            My experiences spans across ecommerce, fintech and healthcare industries.
            </p>
            <br />
            <p className="text-neutral font-medium text-center translate-y-[-150%] sm:translate-y-[-0%] sm:mb-2 md:text-left">
            I am passionate about staying ahead of industry trends including microservices, serverless architecture and AI integration in web applications.
            Let 's transform innovative ideas into digital realities together!              
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4 mt-4 text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left ">
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Name : </span>Cristiano Silva
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Phone : </span>+55 71 98834 7553
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Email : </span>
                wodldoel@gmail.com
              </h2>
              <h2 className="font-medium">
                <span className="mr-2 text-primary">Address : </span>Lauro de Freitas, BA, Brazil
              </h2>
              {/* <a
                href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
                target="blank"
              > */}
                <div className="flex justify-center md:justify-start translate-y-[60%] sm:translate-y-[-0%]">
                  <button className="primary-button">
                    <span>My Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </div>

              {/* </a> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* My Skill */}
      <MySkill />

      {/* Education */}
      <Education />
    </div>
  );
};

export default About;
