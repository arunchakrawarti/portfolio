"use client";
import Image from "next/image";
import { SideBarData } from "../../config/SideBarData";
import NavigationLink from "./NavigationLink";
import { useEffect, useState } from "react";

const SideBar = ({ isMobile = false, isOpen = true, onClose }) => {
    const [mounted, setMounted] = useState(false);

  const [theme, setTheme] = useState("light");
  
  useEffect(() => {
    let active = true;

    const timer = setTimeout(() => {
      if (!active) return;
      setMounted(true);

      if (typeof window !== "undefined") {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(savedTheme);
      }
    }, 0);

    return () => {
      active = false;
      clearTimeout(timer);
    };
  }, []);

  const toggleTheme = () => {

    const newTheme =
      theme === "light" ? "dark" : "light";

    setTheme(newTheme);

    localStorage.setItem("theme", newTheme);

    document.documentElement.classList.remove("light", "dark");

    document.documentElement.classList.add(newTheme);
  };

  if (!mounted) return null;
  return (
    <>
      {isMobile && isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-50
          w-[260px]
          bg-white
          transition-all duration-300
          transform
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >
        <div className="h-[calc(100vh-40px)] flex flex-col bg-light-gray lg:ml-5 my-5 rounded-xl">
          <div className="flex justify-center mt-5 pb-2">
            <Image
          src="/img/nextdial.jpeg"
          height={20}
          width={180}
          alt="next.png"
          />
          </div>
          <ul className="flex-1 overflow-y-auto no-scrollbar px-4 py-6 space-y-2">
            {SideBarData[0].items.map((item, index) => (
              <NavigationLink key={index} {...item} />
            ))}
          </ul>

           <div className="p-4">
            
            <div className="flex items-center justify-between bg-gray-100  rounded-xl p-1">

              <button
                onClick={() => {
                  setTheme("light");
                  localStorage.setItem("theme", "light");

                  document.documentElement.classList.remove(
                    "light",
                    "dark"
                  );

                  document.documentElement.classList.add("light");
                }}
                className={`
                  flex items-center justify-center gap-2
                  w-1/2 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300
                  ${
                    theme === "light"
                      ? "bg-primary text-white"
                      : "text-gray-600 "
                  }
                `}
              >
                <i className="ri-sun-line"></i>
                Light
              </button>

              <button
                onClick={() => {
                  setTheme("dark");
                  localStorage.setItem("theme", "dark");

                  document.documentElement.classList.remove(
                    "light",
                    "dark"
                  );

                  document.documentElement.classList.add("dark");
                }}
                className={`
                  flex items-center justify-center gap-2
                  w-1/2 py-2 rounded-lg text-sm font-medium
                  transition-all duration-300
                  ${
                    theme === "dark"
                      ? "bg-primary text-white"
                      : "text-gray-600 "
                  }
                `}
              >
                <i className="ri-moon-line"></i>
                Dark
              </button>

            </div>

          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;