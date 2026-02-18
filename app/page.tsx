"use client";

import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";

const Home = () => {
  return (
    <main className="min-h-screen flex flex-col bg-black text-white selection:bg-orange-500/30">
      <Navbar />
      <Hero />
  
    </main>
  );
};

export default Home;
