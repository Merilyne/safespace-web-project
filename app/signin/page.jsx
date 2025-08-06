'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navbar */}
      <nav className="bg-white shadow py-4 px-6 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="SafeSpace Logo"
            width={60}
            height={60}
            className="h-16 w-auto"
          />
          <span className="text-xl font-extrabold text-black-700 cursor-pointer">SafeSpace</span>
        </Link>
       
      </nav>

      {/* Main Section */}
      <main className="flex flex-col md:flex-row items-center justify-center flex-grow gap-10 px-4 py-12">
        {/* Side Image */}
        <div className="hidden md:block">
          <Image
            src="/person.png"
            alt="Person Illustration"
            width={250}
            height={250}
            className="object-contain"
          />
        </div>

        {/* Sign In Form */}
        <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-10">
          <h1 className="text-2xl font-extrabold mb-2 text-black-700 text-center">Login</h1>
          <h2 className="text-lg font-semibold mb-6 text-center">Acess your SafeSpace Account</h2>

          <form onSubmit={handleSignIn} className="space-y-4">
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required
            />

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">2025 SafeSpace. All rights reserved</p>
      </footer>
    </div>
  );
}
