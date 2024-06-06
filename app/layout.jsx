import "./globals.css";
import { Rubik } from "next/font/google";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Timeline from "./components/Timeline";
import Gallery from "./components/Gallery";
import Legends from "./components/Legends";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Glory Glory Manchester United",
  description:
    "Explore the rich history and legacy of Manchester United. Discover key events, legendary players, and iconic moments.",
  author: "NjoxPy(Godbless Nyagawa)",
  keywords:
    "Manchester United, football history, Manchester United legends, Manchester United timeline, Manchester United iconic moments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        <Hero />
        <Timeline />
        {/* <Gallery /> */}
        <Legends />
        <Footer />
        {children}
      </body>
    </html>
  );
}
