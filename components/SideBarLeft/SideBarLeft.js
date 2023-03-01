import Image from "next/image";
import React, { useEffect } from "react";
import { AiFillInstagram, AiFillFacebook, AiFillMail } from "react-icons/ai";
import { ImLocation2 } from "react-icons/im";
import { IoMdSunny } from "react-icons/io";
import { BsFillMoonStarsFill } from "react-icons/bs";

import { useTheme } from "next-themes";
function SideBarLeft(props) {
  const { theme, setTheme } = useTheme();
  // toggle dark mode & light mode

  useEffect(() => {
    setTheme("dark");
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  const toggleModeUi = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (localStorage.theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <img
        src="https://i.imgur.com/sAoyMua.jpg"
        className="w-32 h-32 rounded-full justify-center text-center border-2 border-yellow-500 dark:border-green-600 my-3 m-auto"
        alt="avatar"
      />

      <h3 className="my-4 text-2xl tracking-wider">
        <span className="text-red-400 dark:text-green-600 font-bold">
          Vương Qu
        </span>
        ốc Bảo
      </h3>
      <p className="px-2 mx-4 py-1 mt-3 mb-5 dark:bg-gradient-to-r dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 bg-slate-200 dark:bg-red rounded-full hover:cursor-pointer">
        FrontEnd Developer
      </p>

      {/* Email Me  */}
      <p
        className="px-2 mx-4 py-1 my-3 rounded-full bg-gradient-to-b from-pink-300 to-yellow-400 flex items-center justify-center hover:cursor-pointer dark:bg-gradient-to-l dark:from-green-400 dark:to-blue-500"
        download="name"
        onClick={() => window.open("mailto:vuongquocbao98@gmail.com")}
      >
        <AiFillMail className="w-4 h-4 mr-1 animate-bounce" />
        Email me
      </p>

      {/* Socical Icons  */}
      <div className="flex justify-center my-6 gap-6 text-indigo-600 dark:text-white">
        <a
          href="https://www.facebook.com/bao.vuong.15.11"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-600 dark:hover:text-indigo-400 transition ease-in-out duration-150 border-2 dark:border-yellow-400"
        >
          <AiFillFacebook className="w-9 h-9 shadow" />
        </a>
        <a
          href="https://www.instagram.com/baovuong1511/"
          target="_blank"
          rel="noreferrer"
          className="hover:text-pink-600 dark:hover:text-indigo-400 transition ease-in-out duration-150 border-2 dark:rounded-md dark:border-green-400"
        >
          <AiFillInstagram className="w-9 h-9 shadow" />
        </a>
      </div>
      {/* Address */}
      <div className="bg-gray-200 dark:bg-gradient-to-r font-superfont dark:from-indigo-500 dark:via-purple-500 dark:to-pink-500 mt-2 leading-7">
        <div className="flex justify-center pt-2">
          <ImLocation2 className="mr-1 text-pink-600" />
          <span>TP.Ho Chi Minh</span>
        </div>
        <p>vuongquocbao98@gmail.com</p>
        <p className="pb-2">0975 774 662</p>
      </div>

      {/* change dark ui  */}
      <button
        className="px-8 py-1 my-6 dark:bg-gradient-to-l dark:from-green-400 flex items-center dark:to-blue-500 bg-gradient-to-t rounded-full justify-center mx-auto from-pink-300 to-yellow-400"
        onClick={() => toggleModeUi()}
      >
        Sun <IoMdSunny className="m-2" /> Moon{" "}
        <BsFillMoonStarsFill className="m-2" />
      </button>
    </>
  );
}

export default SideBarLeft;
