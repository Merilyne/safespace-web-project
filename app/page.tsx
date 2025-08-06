'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#e6f7f9] text-black">
      {/* Navbar */}
      <nav className="bg-white shadow-sm py-4 px-8 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png" // Place logo.png in your /public folder
            alt="SafeSpace Logo"
            width={48}
            height={48}
            className="rounded-full"
          />
          <span className="text-2xl font-bold text-[#30B6AA]">Safe</span>
          <span className="text-2xl font-bold text-black">Space</span>
        </Link>

        <div className="space-x-4">
          <Link
            href="/signin"
            className="bg-white text-gray-700 px-5 py-2 rounded-full shadow-md hover:shadow-lg transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup/register"
            className="bg-green-600 text-white px-5 py-2 rounded-full shadow-md hover:bg-green-700 transition"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow px-8 py-12 gap-8 text-center md:text-left">
        {/* Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/doctor.png" 
            alt="Illustration"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
            Support Connect <br /> Platform
          </h1>
          <p className="text-gray-700 text-base md:text-lg">
            Simplify your work with streamlined session management, crisis response tools,
            integrated billing, and client engagement features.
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">2025 SafeSpace. All rights reserved</p>
      </footer>
    </div>
  );
}
