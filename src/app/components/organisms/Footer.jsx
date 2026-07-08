"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Button from "../common/Button";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 25 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Readers", href: "/readers" },
      { label: "Services", href: "/services" },
      { label: "Horoscope", href: "/horoscope" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Natal Chart Readings", href: "/services/natal-chart" },
      { label: "Compatibility Readings", href: "/services/compatibility" },
      { label: "Progression Readings", href: "/services/progression" },
      { label: "Specialty Readings", href: "/services/specialty" },
    ],
  },
];

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full overflow-hidden bg-navyblue pt-16 pb-12 text-white"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Top line */}
      <div className="absolute top-0 left-7 right-7 lg:left-19 lg:right-19 h-[1px] bg-white z-20" />

      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0 opacity-90 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/img/footer.png"
          alt="Space Stars Background"
          fill
          priority
          className="object-cover object-bottom"
        />
      </motion.div>

      {/* glow */}
      <div className="absolute bottom-[10px] left-1/2 z-0 h-[200px] w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-t from-purple-600/30 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="header relative z-10 mb-10 mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-6">

          {/* LOGO + SOCIAL */}
          <motion.div variants={item} className="lg:col-span-3 flex flex-col gap-4">
            <Image
              src="/img/logo.png"
              alt="Celestial Logo"
              width={140}
              height={30}
            />

            <p className="max-w-[230px] font-montserrat font-medium text-[16px] leading-[120%]">
              We help you exploring your cosmic path
            </p>

            <div className="mt-2 flex items-center gap-4">
              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                <FaFacebookF size={14} />
              </Link>

              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                <FaInstagram size={14} />
              </Link>

              <Link href="#" className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
                <span className="font-montserrat text-[14px] font-bold">X</span>
              </Link>
            </div>
          </motion.div>

          {/* LINKS */}
          <motion.div variants={item} className="lg:col-span-4 grid grid-cols-2 gap-6">
            {FOOTER_LINKS.map((group, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h4 className="font-cormorant font-bold text-primary text-[24px]">
                  {group.title}
                </h4>

                <ul className="flex flex-col gap-2">
                  {group.links.map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link.href}
                        className="font-montserrat font-medium text-[16px] hover:text-[#E2F163]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </motion.div>

          {/* CONTACT */}
          <motion.div variants={item} className="lg:col-span-2 flex flex-col gap-3">
            <h4 className="font-cormorant font-bold text-primary text-[24px]">
              Contact Us
            </h4>

            <div className="flex flex-col gap-2 font-montserrat font-medium text-[16px]">
              <p className="break-all">booking@celestial.com</p>
              <p>(+62) 1234 5678</p>
              <p>Oak Building 19, North City</p>
            </div>
          </motion.div>

          {/* SUBSCRIBE */}
          <motion.div variants={item} className="lg:col-span-3 flex flex-col gap-3">
            <h4 className="font-cormorant font-bold text-primary text-[24px]">
              Subscribe for any updates
            </h4>

            <form
              className="mt-2 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full rounded-[8px] border border-white bg-[#0A051B]/60 px-3 py-2 text-[14px] text-white placeholder-white/80 focus:border-[#E2F163] focus:outline-none"
              />

              <Button type="submit" variant="outline">
                Subscribe
              </Button>
            </form>
          </motion.div>

        </div>
      </div>
    </motion.footer>
  );
}