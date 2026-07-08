"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavigationLink = ({ title, icon, link, children = [] }) => {

  const pathname = usePathname();

  const hasChildren = children.length > 0;

  const isChildActive = children.some(
    (child) => pathname === child.link
  );

  const isActive = pathname === link || isChildActive;

  const [prevIsChildActive, setPrevIsChildActive] = useState(isChildActive);
  const [open, setOpen] = useState(isChildActive);

  if (isChildActive !== prevIsChildActive) {
    setPrevIsChildActive(isChildActive);
    if (isChildActive) {
      setOpen(true);
    }
  }

  return (
    <li>
      <div
        onClick={() => hasChildren && setOpen(!open)}
        className={`
          flex items-center justify-between
          px-4 py-2
          rounded-r-xl mt-1
          cursor-pointer
          transition-all duration-300
          group relative overflow-hidden
          border-l-3
          ${
            isActive
              ? "bg-[#7152F30D] text-primary border-primary"
              : "text-gray-700 border-transparent hover:bg-gray-100"
          }
        `}
      >

        <div className="flex items-center gap-3 relative z-10">

          <i className={`${icon} text-xl`}></i>

          {hasChildren ? (
            <span
              className={`
                font-lexend text-base
                ${isActive ? "font-semibold" : "font-light"}
              `}
            >
              {title}
            </span>
          ) : (
            <Link
              href={link}
              className={`
                font-lexend text-base
                ${isActive ? "font-semibold" : "font-light"}
              `}
            >
              {title}
            </Link>
          )}

        </div>

        {hasChildren && (
          <i
            className={`ri-arrow-right-s-line text-lg transition-all duration-300 relative z-10 ${
              open ? "rotate-90" : ""
            }`}
          ></i>
        )}

      </div>

      {hasChildren && (
        <div
          className={`overflow-hidden transition-all duration-300 ${
            open ? "max-h-auto mt-2" : "max-h-0"
          }`}
        >
          <ul className="ml-6 space-y-2">

            {children.map((child, index) => (

              <li key={index}>

                <Link
                  href={child.link}
                  className={`
                    block px-4 py-2
                    rounded-r-xl
                    font-lexend text-[14px]
                    transition-all duration-300
                    border-l-3
                    ${
                      pathname === child.link
                        ? "bg-gray-100 text-primary font-semibold border-primary"
                        : "text-gray-500 font-light border-transparent hover:bg-gray-100 hover:text-primary"
                    }
                  `}
                >
                  {child.title}
                </Link>

              </li>

            ))}

          </ul>
        </div>
      )}

    </li>
  );
};

export default NavigationLink;