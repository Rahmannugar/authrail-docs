"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black/80 backdrop-blur border-b border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/authrail.png"
            alt="AuthRail Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        <div className="flex items-center gap-6 text-sm text-zinc-400">
          <Link href="/docs" className="hover:text-white transition">
            Docs
          </Link>
          <a
            href="https://github.com/Rahmannugar/auth-rail"
            target="_blank"
            className="hover:text-white transition"
          >
            GitHub
          </a>
          <a
            href="https://www.npmjs.com/package/authrail"
            target="_blank"
            className="hover:text-white transition"
          >
            Npm
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
