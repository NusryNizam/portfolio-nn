import "./App.css";
import bgImage from "./assets/bg.svg";
import profileImage from "./assets/profile.svg";
import yewdioCover from "./assets/yewdio-cover.svg";
import epocketCover from "./assets/epocket-cover.svg";
import decorationImageLight from "./assets/bg-decoration-light.svg";
import decorationImageDark from "./assets/bg-decoration-dark.svg";

import Project from "./components/Project";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;

    gsap.fromTo(
      el,
      {
        scale: 1,
        filter: "blur(0px)",
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
      },
      {
        scale: 0.9,
        filter: "blur(2px)",
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        scrollTrigger: {
          trigger: ".project",
          start: "top bottom",
          end: "bottom 100%",
          markers: true,
          toggleActions: "play play play reverse"
        },
      }
    );
    // ScrollTrigger.create({
    //   trigger: ".project",
    //   start: "top bottom",
    //   end: "bottom 10%",
    //   markers: true,
    // });
  }, []);

  return (
    <div className="app">
      <div className="main-container" ref={mainRef} style={{backgroundImage: `url("${bgImage}")`}}>
        {/* <div className="background-wrapper"> */}
          {/* <img className="background" src={bgImage} alt="" /> */}
        {/* </div> */}
        {/* <h1>Hello World!</h1> */}
        <section className="main">
          <div className="content">
            <img className="profile" src={profileImage} alt="" />
            <h1 className="heading-1">Nusry Nizam</h1>
            <h3 className="title">UI Designer & Developer</h3>
          </div>
        </section>
      </div>
      <Project
        color="#0D5FE3"
        cover={yewdioCover}
        decorationImg={decorationImageLight}
        fontColor="#ffffff"
        title="Yewdio"
        description="Listen to YouTube as Audio and consume less bandwidth. Listen while your screen is off."
        theme="light"
      />
      <Project
        color="#35FF92"
        cover={epocketCover}
        decorationImg={decorationImageDark}
        fontColor="#0e0e0e"
        title="ePocket"
        description="Manage your personal finances. Track your income, expense and visualize with dashboards."
        theme="dark"
      />
      <Footer />
    </div>
  );
}

export default App;
