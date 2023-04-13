import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Investers from "@/components/Investers";
import FundManagers from "@/components/FundManagers";
import Catagory from "@/components/Catagory";
import AboveFooter from "@/components/AboveFooter";
import ChooseDeal from "@/components/ChooseDeal";
import AboutUs from "@/components/AboutUs";
import StartUp from "@/components/StartUp";
import MainBanner from "@/components/MainBanner";
import { AnimatePresence,motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
        <div className="mx-auto xl:container">
          <Navbar />
          <MainBanner />
          <Catagory />
          <StartUp />
          <Investers />
          <FundManagers />
          <AboutUs />
          <ChooseDeal />
          <AboveFooter />
          <Footer />
        </div>
  );
}
