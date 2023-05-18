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

    gsap.to(
      el,
      // {
      //   scale: 1,
      //   filter: "blur(0px)",
      //   borderTopLeftRadius: '0px',
      //   borderTopRightRadius: '0px',
      // },
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
          // markers: true,
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
          // markers: true,
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
          // markers: true,
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
          // markers: true,
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
          // markers: true,
          toggleActions: "restart none none reverse"
        }
      }
    )

  }, []);

  return (
    <div className="app" id="app">
      <div className="main-container" ref={mainRef} style={{backgroundImage: `url("${bgImage}")`}}>
        <section className="main">
          <div className="content">
            <img className="profile" src={profileImage} alt="" />
            <h1 className="heading-1">Nusry Nizam</h1>
            <h3 className="title">UI Designer & Developer</h3>
            <div className="socials">
              <a href="https://github.com/NusryNizam" target="_blank" rel="noopener noreferrer">
                <svg className="icon">
                  <use xlinkHref="#github"></use>
                </svg>
              </a>
              <a href="https://dribbble.com/nusry" target="_blank" rel="noopener noreferrer">
                <svg className="icon">
                  <use xlinkHref="#dribbble"></use>
                </svg>
              </a>
              <a href="https://linkedin.com/in/nusrynizam" target="_blank" rel="noopener noreferrer">
                <svg className="icon">
                  <use xlinkHref="#linkedin"></use>
                </svg>
              </a>
            </div>
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
        link="https://yewdio.netlify.app"
        ref={yewdioRef}
      />

      <div style={{height: '100vh'}} aria-hidden="true"></div>

      <Project
        color="#35FF92"
        cover={epocketCover}
        decorationImg={decorationImageDark}
        fontColor="#0e0e0e"
        title="ePocket"
        description="Manage your personal finances. Track your income, expense and visualize with dashboards."
        theme="dark"
        link="https://epocket.000webhostapp.com"
        ref={ePocketRef}
      />

      <div style={{height: '100vh'}} aria-hidden="true"></div>

      <Footer />

      {/* SVG Sprite */}
      <svg width="0" height="0" className="hidden" aria-hidden="true">
        <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" id="linkedin">
          <path fillRule="evenodd" clipRule="evenodd" d="M2.39974 0.109009C1.27114 0.382382 0.379146 1.28812 0.108882 2.43519C-0.0362939 3.05118 -0.0362939 24.9563 0.108882 25.5723C0.382798 26.7349 1.27342 27.6287 2.42967 27.9015C2.79378 27.9873 4.28109 28 13.9998 28C23.7186 28 25.2059 27.9873 25.57 27.9015C26.7263 27.6287 27.6169 26.7349 27.8908 25.5723C28.0377 24.9487 28.0358 3.0504 27.8887 2.42619C27.6162 1.2692 26.7229 0.378009 25.561 0.103918C24.96 -0.0378912 2.98624 -0.0329967 2.39974 0.109009ZM7.26364 4.05024C7.89098 4.28505 8.48596 4.91363 8.7122 5.58045C8.84995 5.9865 8.85438 6.6887 8.72212 7.14395C8.35879 8.39459 6.95262 9.14958 5.68008 8.77721C3.85573 8.24338 3.27366 5.96203 4.61846 4.61637C5.32875 3.90563 6.31413 3.69471 7.26364 4.05024ZM20.6872 10.3862C21.5537 10.6253 22.0817 10.9256 22.6716 11.515C23.2656 12.1085 23.563 12.6131 23.8398 13.4971C24.1137 14.3718 24.1485 15.1348 24.1278 19.8119L24.1087 24.119H22.0217H19.9347L19.902 20.0076C19.8719 16.226 19.8596 15.8701 19.7493 15.57C19.3719 14.5437 18.8184 14.11 17.8096 14.0501C16.6617 13.9821 15.7534 14.5538 15.3969 15.5689C15.1741 16.2031 15.1453 16.766 15.1432 20.5143L15.1412 24.1535L13.1357 24.1362L11.1302 24.119L11.1136 17.3809L11.097 10.6429H13.1191H15.1412V11.4963V12.3496L15.3159 12.1325C16.1705 11.0705 17.2053 10.4478 18.437 10.2542C19.0081 10.1645 20.1199 10.2297 20.6872 10.3862ZM8.4889 17.3982V24.1535L6.38561 24.1362L4.28232 24.119L4.26569 17.3809L4.24913 10.6429H6.36898H8.4889V17.3982Z" fill="#CECECE"></path>
        </symbol>
        <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 28" id="github">
          <path fillRule="evenodd" clipRule="evenodd" d="M12.1628 0.0433167C8.81509 0.683497 6.2251 2.06362 3.99166 4.39788C1.93503 6.5471 0.723459 8.94462 0.205221 11.8908C-0.678155 16.9119 1.33861 22.2784 5.32471 25.5126C5.91976 25.9954 7.20315 26.7796 8.17691 27.2553C9.71221 28.0054 10.0029 28.095 10.3677 27.9301C10.7681 27.749 10.7882 27.6671 10.7882 26.2176V24.6954L9.80018 24.7834C7.85439 24.9568 6.66722 24.3113 5.80171 22.6099C5.50255 22.0216 4.98758 21.3705 4.5221 20.9921C3.65247 20.2849 3.58717 20.1307 4.0896 19.9725C4.76145 19.7608 5.59878 20.2228 6.6057 21.3613C7.1449 21.9708 7.80009 22.5792 8.06178 22.7136C8.96922 23.1793 10.6978 22.9392 10.8911 22.3207C10.9429 22.1551 11.0944 21.7699 11.2281 21.4645C11.3616 21.159 11.4752 20.8555 11.4805 20.79C11.4857 20.7245 11.008 20.5733 10.4189 20.4541C6.99953 19.7619 5.27076 17.5478 5.24962 13.8341C5.24017 12.1694 5.50754 11.1839 6.22029 10.2565C6.59281 9.77188 6.6136 9.64978 6.45707 8.86396C6.28593 8.00516 6.47666 6.47241 6.82324 5.92244C7.03562 5.58513 8.32537 5.92551 9.73472 6.69035C10.8102 7.27425 10.8454 7.28091 11.7967 7.08155C13.0064 6.8278 15.9252 6.83189 17.0455 7.08906C17.8629 7.27647 17.9356 7.26044 19.2793 6.59775C20.0433 6.22104 20.9571 5.86429 21.31 5.80494C21.8918 5.70689 21.9678 5.73929 22.1259 6.15215C22.4226 6.92654 22.5197 8.35151 22.3236 9.05564C22.1611 9.64023 22.1798 9.77307 22.4681 10.0776C22.9733 10.6114 23.4813 11.8802 23.6038 12.9145C23.7517 14.1636 23.4192 16.1931 22.8886 17.2794C22.1039 18.8862 20.2763 20.1488 18.2487 20.4851C17.139 20.6691 17.1485 20.6541 17.5928 21.525C17.9764 22.2771 18.005 22.5216 18.005 25.0366C18.005 27.7391 18.0052 27.7399 18.4255 27.9301C18.7903 28.095 19.081 28.0054 20.6163 27.2553C21.5901 26.7796 22.8735 25.9954 23.4685 25.5126C29.1712 20.8855 30.4718 12.4987 26.4335 6.39362C25.2112 4.54573 23.0665 2.59602 21.1717 1.61017C18.9214 0.439124 17.5086 0.0845857 14.8262 0.0172252C13.5976 -0.0136413 12.3991 -0.00187454 12.1628 0.0433167Z" fill="#CECECE"></path>
        </symbol>
        <symbol fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29 29" id="dribbble">
          <path d="M14.0654 28.0711C12.1185 28.0711 10.2908 27.7036 8.58226 26.9686C6.87375 26.2335 5.38378 25.2302 4.11233 23.9588C2.84089 22.6874 1.83764 21.1974 1.10258 19.4889C0.367527 17.7804 0 15.9527 0 14.0058C0 12.0986 0.367527 10.2908 1.10258 8.58226C1.83764 6.87375 2.84089 5.38378 4.11233 4.11233C5.38378 2.84089 6.87375 1.83764 8.58226 1.10258C10.2908 0.367527 12.1185 0 14.0654 0C15.9725 0 17.7804 0.367527 19.4889 1.10258C21.1974 1.83764 22.6874 2.84089 23.9588 4.11233C25.2302 5.38378 26.2335 6.87375 26.9686 8.58226C27.7036 10.2908 28.0711 12.0986 28.0711 14.0058C28.0711 15.9527 27.7036 17.7804 26.9686 19.4889C26.2335 21.1974 25.2302 22.6874 23.9588 23.9588C22.6874 25.2302 21.1974 26.2335 19.4889 26.9686C17.7804 27.7036 15.9725 28.0711 14.0654 28.0711ZM7.27108 23.5416C9.21798 24.972 11.4827 25.6872 14.0654 25.6872C15.3368 25.6872 16.5487 25.4885 17.7009 25.0912C17.4625 22.1907 16.8864 19.3697 15.9725 16.6281C14.1846 17.2241 12.5456 18.1082 11.0556 19.2803C9.56564 20.4524 8.30413 21.8728 7.27108 23.5416ZM18.2969 16.0321C18.6942 17.3036 19.032 18.6148 19.3101 19.9657C19.5882 21.3166 19.8067 22.6874 19.9657 24.078C21.396 23.2436 22.598 22.1609 23.5714 20.8299C24.5449 19.4988 25.1905 17.9989 25.5084 16.3301C24.7932 16.1315 24.0879 15.9825 23.3926 15.8831C22.6973 15.7838 22.0119 15.7341 21.3364 15.7341C20.4226 15.7341 19.4094 15.8335 18.2969 16.0321ZM2.38396 14.5422C2.50316 17.4029 3.53621 19.8663 5.48311 21.9324C6.63536 20.1445 8.04587 18.6148 9.71464 17.3433C11.3834 16.0719 13.2111 15.0984 15.1977 14.423C15.0388 13.9064 14.8203 13.3502 14.5422 12.7542C12.8337 13.3899 11.0954 13.8568 9.32725 14.1548C7.55914 14.4528 5.7811 14.6018 3.99313 14.6018H3.24815L2.38396 14.5422ZM21.3364 13.4098C22.7668 13.4098 24.2369 13.5886 25.7468 13.9462C25.7468 11.5622 25.0515 9.39678 23.6608 7.44988C21.5152 9.31731 19.1909 10.8073 16.6877 11.9198C16.8467 12.2377 16.9857 12.5555 17.1049 12.8734C17.2241 13.1912 17.3632 13.5091 17.5221 13.827C18.1578 13.668 18.7936 13.5588 19.4293 13.4992C20.065 13.4396 20.7007 13.4098 21.3364 13.4098ZM2.50316 12.2178C2.74155 12.2575 2.97995 12.2774 3.21835 12.2774H3.99313C7.25121 12.2774 10.41 11.741 13.4694 10.6682C12.1185 8.16506 10.5292 5.82084 8.70146 3.63554C7.03268 4.50966 5.65197 5.70164 4.55932 7.21148C3.46668 8.72132 2.78129 10.3901 2.50316 12.2178ZM11.0258 2.74155C11.9397 3.85407 12.784 4.99638 13.5588 6.1685C14.3336 7.34061 15.0388 8.54253 15.6745 9.77424C16.8268 9.25771 17.9393 8.65179 19.0121 7.95647C20.0849 7.26115 21.1378 6.49629 22.1708 5.66191C21.0583 4.58912 19.8067 3.76467 18.4161 3.18855C17.0255 2.61242 15.5752 2.32436 14.0654 2.32436C13.5488 2.32436 13.0323 2.36409 12.5158 2.44356C11.9993 2.52303 11.5026 2.62236 11.0258 2.74155Z" fill="#CECECE"></path>
        </symbol>
      </svg>
    </div>
  );
}

export default App;
