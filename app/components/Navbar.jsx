'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-blue-700">
        SafeSpace
      </Link>
      <div>
        <Link href="/signin" className="text-blue-600 hover:underline mx-2">Sign In</Link>
        <Link href="/register" className="text-blue-600 hover:underline mx-2">Register</Link>
      </div>
    </nav>
  );
}
