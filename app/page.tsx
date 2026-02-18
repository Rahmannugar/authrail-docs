"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import { motion } from "motion/react";

const Home = () => {

  return (
    <main className="min-h-screen flex flex-col bg-black text-white selection:bg-orange-500/30">
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            <Navbar />
            <Hero />
          </motion.div>
    </main>
  );
};

export default Home;
