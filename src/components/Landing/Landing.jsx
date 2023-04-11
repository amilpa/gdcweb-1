import React, { forwardRef } from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import '../designs.css';
import './Landing.css';
import landingimage from '../../assets/landingimage.jpg'
// import { useState, useEffect, useRef } from "react";

// import Scrollbanner from "../Scrollbanner/Scrollbanner";

const Landing = () => {
  // const [isFixed, setIsFixed] = useState(false);
  // const secondComponentRef = useRef(null);

  // useEffect(() => {
  //   const secondComponent = secondComponentRef.current;
  //   const preOrg = secondComponent.getBoundingClientRect().top
  //   const orgPos = window.pageYOffset + preOrg;
  //
  //   const handleScroll = () => {
  //
  //     console.log("org " + orgPos);
  //
  //     var top  = window.pageYOffset  + 82;
  //
  //     console.log("top " + top);
  //
  //     setIsFixed(top >= orgPos);
  //
  //   };
  //
  //   window.addEventListener('scroll', handleScroll);
  //
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  return (
    <ParallaxProvider>
      <Parallax>
        <div className="">
          <div className="bg-cover bg-no-repeat bg-center relative bg-fixed flex flex-col justify-center items-center  h-[100vh] pb-10 gap-16  bg-[url('https://img.freepik.com/free-photo/cool-geometric-triangular-figure-neon-laser-light-great-background_181624-11301.jpg?w=1060&t=st=1681197936~exp=1681198536~hmac=fe575fd600ade9233e291e8870336b780c0d4a1905d7e998cb85e733e0d0d1cf')]">
            <h1 className="text-title md:text-[4rem] text-[2rem] uppercase ">
              Game Development Club<span className="text-[2rem] md:text-[4rem] ml-2 block"> MEC</span>
            </h1>
            <button
              className="outline  text-white
	   outline-white h-[30px] w-auto align-center text-center px-2  text-xl "
            >
              Start Game
            </button>
            <p className="text-white text-3xl text-center">Think it. Build it. Play it.</p>
            {
              // <Scrollbanner ref={secondComponentRef} isFixed={isFixed}/>
            }
          </div>
        </div>
      </Parallax>
    </ParallaxProvider>
  );
};

export default Landing;
