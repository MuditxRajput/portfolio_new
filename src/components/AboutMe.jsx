import { motion, useScroll, useTransform } from "framer-motion";
import React from "react";

import flag from "../assets/indian-flag.png";
import pe1 from "../assets/sec-2-p-e-1.png";
import pe2 from "../assets/sec-2-p-e-2.png";
import Div from "./Div";
import Wrapper from "./Wrapper";

const AboutMe = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-white text-black relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <span className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
      {/* BACKGROUND ELEMENTS END */}

      <Wrapper>
        {/* HEADING START */}
        <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
          <span>A Full stack Web Developer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
              src={flag}
              alt=""
              className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </Div>
        {/* HEADING END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Education: <br />• KIET Group of Institutions Ghaziabad, India
          Bachelor of Technology - Information Technology;
          <br /> • CGPA: 8.2 <br /> • RPS Public School Class 12 , Percentage:
          88% , 2018-2019
          <br /> • Presidency The International School, Class 10, CPGA: 9.2
          ,2016-201
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
          Experience: <br />
          Freelancing - Upwork, Fiverr <br/>◦ Automated WordPress Sites: Designed
          websites using RSS feeds for automated data extraction.<br/> ◦ Dynamic
          Template Designs: Crafted dynamic and static templates for various
          purposes.
        </Div>
        {/* PARAGRAPH END */}

        {/* PARAGRAPH START */}
        <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
        Internship : <br/>
        • QnA SDE Intern <br/>
        ◦ Responsive Web Design: frontend and backend development for a responsive webpage.<br/>
◦ Verification Solutions: Designed user verification/authentication processes and tackled challenges in detecting and
eliminating fake bots and posts
        </Div>
        {/* PARAGRAPH END */}
      </Wrapper>
    </div>
  );
};

export default AboutMe;
