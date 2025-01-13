import React from "react";
import profileImg from "./assets/profile_img.png";

export default function App() {
  return (
    <div className="w-[1320px] mx-auto">
      <nav className="w-[1300px] h-[52.5px] px-2.5 flex items-center font-EN text-grey-33 ">
        <h1 className="logo h-9 flex justify-start items-center font-bold text-xl ">
          <img className="" src="/favicon_logo.png" alt="" />
          YEJI
        </h1>
        <ul className="px-[100px] flex justify-start items-center gap-[100px] font-semibold ">
          <li>Home</li>
          <li>About Me</li>
          <li>Projects</li>
          <li>Blog</li>
        </ul>
      </nav>
      <section className="intro h-[857.5px] flex items-center">
        <div>
          <div className="mb-[65px]">
            <span className="font-EN text-[38px] font-bold text-red-60">
              YES<span className="text-red-48">!</span> YEJ
              <span className="text-red-48">!</span>
            </span>
            <h2 className="mb-[15px] font-EN text-[#18181B] text-7xl font-extrabold">
              I saw dev, dev was I
            </h2>
            <span className="text-[25px] text-[#7A7A7A]">
              위의 텍스트는
              <span className="bg-[#18181B] text-grey-97">
                {" "}
                펠린드롬 알고리즘{" "}
              </span>
              으로 구현 하였습니다.
            </span>
          </div>
          <div className="btn">
            <button className="w-[200px] h-[53px] py-[15px] mr-10 rounded-md text-white font-semibold bg-gradient-to-tl from-[#ff2c9c] via-[#ff287b] to-[#ff6a00] ">
              이력서 보기
            </button>
            <button className="w-[200px] h-[53px] py-[15px] mr-10 rounded-md text-red-49 font-semibold bg-white shadow-[3px_3px_10.800000190734863px_0px_rgba(255,44,156,0.39)] border-2 border-[#ff2c9c]">
              깃허브 보기
            </button>
          </div>
        </div>
        <div className="relative ">
          <div class="absolute top-0 left-0 w-[181px] h-[181px] rounded-full bg-[#02B784] opacity-60 mix-blend-multiply "></div>
          <div
            class="absolute inset-0 bg-gradient-radial from-violet-70 to-transparent 
              opacity-50"
          ></div>
          <div>
            <img className="  -scale-x-100" src={profileImg} alt="" />
          </div>
        </div>
      </section>
      <section className="about"></section>
      <section className="projects"></section>
      <section className="epilogue"></section>
    </div>
  );
}
