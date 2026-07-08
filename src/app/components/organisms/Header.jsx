"use client";

import { useState } from "react";
import Button from "../common/Button";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItem = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const navContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="sticky top-0 z-50 w-full bg-navyblue">
        <div className="px-4 lg:px-18 flex items-center justify-between py-6">

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <img src="/img/logo.png" alt="Celestial Logo" className="h-8 w-auto" />
          </motion.div>

          {/* DESKTOP NAV */}
          <motion.nav
            variants={navContainer}
            initial="hidden"
            animate="show"
            className="hidden lg:flex items-center gap-10"
          >
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Readers", href: "/render" },
              { label: "Services", href: "/service" },
              { label: "Horoscope", href: "/heroscope" },
              { label: "Blog", href: "/blog" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                variants={navItem}
                className="font-montserrat text-[16px]"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.nav>

          {/* BUTTON */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block"
          >
            <Button href="/contact" variant="outline">
              Reservation
            </Button>
          </motion.div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setIsOpen(true)}
            className="lg:hidden text-white text-2xl"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-[998] lg:hidden"
            />

            {/* SIDEBAR */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 h-full w-[280px] bg-navyblue z-[999] lg:hidden"
            >
              <div className="flex items-center justify-between p-5 border-b border-white/20">
                <img src="/img/logo.png" alt="Logo" className="h-8 w-auto" />

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <nav className="flex flex-col p-6 space-y-6">
                {[
                  { label: "Home", href: "/" },
                  { label: "About Us", href: "/about" },
                  { label: "Readers", href: "/render" },
                  { label: "Services", href: "/service" },
                  { label: "Horoscope", href: "/heroscope" },
                  { label: "Blog", href: "/blog" },
                ].map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="text-white font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}

                <div className="pt-4">
                  <Button href="/contact" variant="outline">
                    Reservation
                  </Button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}