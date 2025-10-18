import React from "react";
import heroImage from "../../assets/hero.png";
import playStore from "../../assets/fi_16076057.png";
import appStore from "../../assets/fi_5977575.png";

const HeroSection = () => {
  return (
    <div className="lg:py-20 py-10">
      <div className="flex flex-col text-center space-y-6 lg:px-70">
        <h2 className="lg:text-6xl text-5xl font-extrabold ">
          We Build <br />
          <span className=" bg-gradient-to-l from-[#9f62f2] to-[#632ee3] bg-clip-text text-transparent ">
            Productive{" "}
          </span>
          Apps
        </h2>
        <p className="text-[#627382] lg:text-xl text-sm  px-5">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="flex items-center gap-4 justify-center lg:mt-6">
          <a href="https://play.google.com/store/games?hl=en" className="">
            <button className="flex items-center gap-3 py-4 lg:px-8 px-5 border-1 border-[#d2d2d2] rounded-md">
              <img src={playStore} className="w-6 h-6" alt="" />
              Play Store
            </button>
          </a>
          <a
            href="https://appstoreconnect.apple.com/login?targetUrl=%2Fapps%2F1585041046%2Fappstore%2Fios%2Fversion%2Fdeliverable&authResult=FAILED"
            className=""
          >
            <button className="flex items-center gap-3 py-4 lg:px-8 px-5 border-1 border-[#d2d2d2] rounded-md">
              <img src={appStore} className="w-6 h-6" alt="" />
              App Store
            </button>
          </a>
        </div>
        <div className=" overflow-hidden flex justify-center mt-10">
          <img className="h-full  object-cover" src={heroImage} alt="" />
        </div>
      </div>
      <div className="lg:py-20 py-10 bg-gradient-to-l from-[#9f62f2] to-[#632ee3] text-[#ffffff]">
        <h3 className="text-center lg:text-5xl text-3xl font-bold">
          Trusted by Millions, Built for You
        </h3>
        <div className="lg:flex-row flex flex-col  justify-center items-center lg:py-10 pt-10 lg:gap-50 text-center lg:mt-6">
          <div className="space-y-7 space">
            <p className="text-sm ">Total Downloads</p>
            <h4 className="text-6xl font-extrabold">29.6M</h4>
            <p className="text-sm">21% more than last month</p>
          </div>
          <div className="space-y-7 space">
            <p className="text-sm ">Total Reviews</p>
            <h4 className="text-6xl font-extrabold">906K</h4>
            <p className="text-sm">46% more than last month</p>
          </div>
          <div className="space-y-7 space">
            <p className="text-sm ">Active Apps</p>
            <h4 className="text-6xl font-extrabold">132+</h4>
            <p className="text-sm">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
