"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Button from "../common/Button";

const Heading = ({
  title,
  paragraph,
  actions = [],
  showLive = false,
  showBack = false,
  backRoute = "#",
}) => {
  const router = useRouter();

  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div>
        {showBack && (
          <Button
            onClick={() => router.push(backRoute)}
            className="flex items-center gap-2 mb-2 text-gray-500 hover:text-black"
          >
            <i className="ri-arrow-left-line text-xl"></i>
            Back
          </Button>
        )}

        <h1 className="text-2xl font-inter font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          {title}
        </h1>

        {paragraph && (
          <p className="text-sm font-inter mt-1 bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
            {paragraph}
          </p>
        )}
      </div>
      {(showLive || actions.length > 0) && (
        <div className="flex items-center gap-3">
          {showLive && (
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Live
            </div>
          )}

          {actions.map((btn, i) => (
            <Button
              key={i}
              onClick={() => router.push(btn.route)}
              className={`flex items-center gap-1.5 px-6 capitalize! rounded md:rounded-lg lg:rounded-full text-sm font-medium transition relative overflow-hidden text-white
               ${btn.variant === "gradient"
                  ? " bg-gradient-to-br from-indigo-600  to-purple-600"
                  : "bg-gray-100 text-gray-700"
                }`}
            >
              <div className="absolute inset-0 bg-white/5" />
              {btn.icon && <i className={`${btn.icon} text-[1rem]`}></i>}
              {btn.text}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Heading;
