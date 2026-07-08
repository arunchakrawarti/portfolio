import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Arun Chakrawarti | Creative Frontend Developer Portfolio",
  description: "Explore the professional frontend developer portfolio of Arun Chakrawarti. Showcasing premium interactive web applications, dashboards, and custom React / Next.js projects.",
  keywords: [
    "Arun Chakrawarti",
    "Frontend Developer Portfolio",
    "React.js Developer",
    "Next.js Developer",
    "Tailwind CSS Specialist",
    "Redux Toolkit Expert",
    "REST APIs Integration",
    "Awwwards Web Design"
  ],
  authors: [{ name: "Arun Chakrawarti" }],
  creator: "Arun Chakrawarti",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arunchakrawarti.dev",
    title: "Arun Chakrawarti | Creative Frontend Developer Portfolio",
    description: "Explore the professional frontend developer portfolio of Arun Chakrawarti. Showcasing premium interactive web applications, dashboards, and custom React / Next.js projects.",
    siteName: "Arun Chakrawarti Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Chakrawarti | Creative Frontend Developer Portfolio",
    description: "Explore the professional frontend developer portfolio of Arun Chakrawarti. Showcasing premium interactive web applications, dashboards, and custom React / Next.js projects.",
    creator: "@arunchakrawarti",
  },
};

export default function RootLayout({ children }) {
  return (
    <html 
      lang="en" 
      className={`${poppins.variable} ${inter.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full bg-[#0b1120] text-white flex flex-col font-sans selection:bg-accent/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
