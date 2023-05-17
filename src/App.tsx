import "./App.css";
import bgImage from "./assets/bg-crop.svg";
import profileImage from "./assets/profile.svg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import yewdioCover from "./assets/yewdio-cover.svg";
import epocketCover from "./assets/epocket-cover.svg";
import decorationImageLight from "./assets/bg-decoration-light.svg";
import decorationImageDark from "./assets/bg-decoration-dark.svg";

import Project from "./components/Project";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const mainRef = useRef(null);
  const yewdioRef = useRef(null);
  const ePocketRef = useRef(null);

  useEffect(() => {
    const el = mainRef.current;
    const yewdioEl = yewdioRef.current
    console.log(yewdioRef.current)
    console.log(mainRef.current)
    const ePocketEl = ePocketRef.current

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
        filter: "blur(6px)",
        borderTopLeftRadius: '24px',
        borderTopRightRadius: '24px',
        scrollTrigger: {
          trigger: ".project",
          start: "top bottom",
          end: "bottom bottom",
          scrub: true,
          markers: true,
          toggleActions: "restart none none reverse"
        },
      }
    );

    // Entering Animation for Yewdio
    gsap.fromTo(
      yewdioEl,
      {
        // width: '90%',
        margin: 'auto',

      },
      {
        // width: '100%',

        borderRadius: 0,
        scrollTrigger: {
          trigger: yewdioEl,
          scrub: true,
          
          start: 'top 10%',
          end: 'top top',
          // once: true,
          markers: true,
          toggleActions: "restart none none reverse"
        }
      }
    )

    // Leaving Animation for Yewdio
    gsap.to(
      yewdioEl,
      {
        scale: 0.9,

        borderRadius: '24px',
        filter: 'blur(6px)',
        scrollTrigger: {
          trigger: yewdioEl,
          scrub: true,
          
          start: 'bottom 50%',
          // end: 'bot top',
          // once: true,
          markers: true,
          toggleActions: "restart none none reverse"
        }
      }
    )

    // Entring Animation for ePocket
    gsap.fromTo(
      ePocketEl,
      {
        // width: '90%',
        margin: 'auto',

      },
      {
        // width: '100%',,

        borderRadius: 0,
        scrollTrigger: {
          trigger: ePocketEl,
          // scrub: true,
          
          start: 'top 10%',
          end: 'top top',
          // once: true,
          markers: true,
          toggleActions: "restart none none reverse"
        }
      }
    )

    // Leaving Animation for ePocket
    gsap.to(
      ePocketEl,
      {
        scale: 0.9,
        borderRadius: '24px',
        filter: 'blur(6px)',
        scrollTrigger: {
          trigger: ePocketEl,
          scrub: true,
          
          start: 'bottom 50%',
          // end: 'bot top',
          // once: true,
          markers: true,
          toggleActions: "restart none none reverse"
        }
      }
    )

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
      {/* <div style={{height: '100vh'}}>test</div> */}

      <Project
        color="#0D5FE3"
        cover={yewdioCover}
        decorationImg={decorationImageLight}
        fontColor="#ffffff"
        title="Yewdio"
        description="Listen to YouTube as Audio and consume less bandwidth. Listen while your screen is off."
        theme="light"
        ref={yewdioRef}
      />
      <div style={{height: '100vh'}}></div>

      <Project
        color="#35FF92"
        cover={epocketCover}
        decorationImg={decorationImageDark}
        fontColor="#0e0e0e"
        title="ePocket"
        description="Manage your personal finances. Track your income, expense and visualize with dashboards."
        theme="dark"
        ref={ePocketRef}
      />
      <div style={{height: '100vh'}}></div>

      <Footer />
    </div>
  );
}

export default App;
