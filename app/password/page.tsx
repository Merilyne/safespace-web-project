'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const PasswordPage = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const checkLength = password.length >= 8;
  const checkNumber = /\d/.test(password);
  const checkSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const isValid = checkLength && checkNumber && checkSymbol && passwordsMatch;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      router.push('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-md px-6 py-4 flex items-center">
        <Image src="/logo.png" alt="Logo" width={40} height={40} className="mr-3" />
        <span className="text-xl font-bold text-[#30B6AA]">Safe</span>
          <span className="text-xl font-bold text-black">Space</span>
      </nav>

      {/* Main Section */}
      <main className="flex-grow flex justify-center items-center p-6">
        <div className="flex flex-col lg:flex-row items-center gap-8 max-w-5xl w-full">
          
          {/* Left-side Image */}
          <div className="hidden lg:block flex-1">
            <Image
              src="/person.png" // ✅ Replace with your image file name
              alt="Support Worker"
              width={250}
              height={250}
              className="rounded-xl object-contain"
            />
          </div>

          {/* Form Section */}
          <div className="flex-1 w-full max-w-md bg-[#f8f1f0] p-8 rounded-xl shadow-md">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-1">Support Worker Registration</h1>
            <p className="text-sm text-center text-gray-600 mb-6">Create your support worker account</p>

            <form onSubmit={handleSubmit}>
              {/* Password */}
              <label htmlFor="password" className="block text-md font-medium text-gray-700 mb-2">
                Create Password
              </label>
              <div className="relative mb-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="At least 8 characters, 1 number, 1 symbol"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-gray-500"
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              <p className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black">
                Password must be at least 8 characters, include a number and a symbol.
              </p>

              {/* Confirm Password */}
              <label htmlFor="confirmPassword" className="block text-md font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative mb-2">
                <input
                  type={showConfirm ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Re-enter your password"
                 className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 text-black"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute right-3 top-2 text-black 500"
                  
                >
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>

              {!passwordsMatch && confirmPassword && (
                <p className="text-sm text-red-600 mb-2 ml-1">Passwords do not match.</p>
              )}

              {/* Strength Bar */}
              <div className="h-2 bg-gray-200 rounded-full mb-4 overflow-hidden">
                <div
                  className={`h-full transition-all duration-300 ${
                    isValid
                      ? 'bg-green-500 w-full'
                      : password.length >= 6
                      ? 'bg-yellow-500 w-2/3'
                      : password.length > 0
                      ? 'bg-red-500 w-1/3'
                      : 'w-0'
                  }`}
                />
              </div>

              {/* Checklist */}
              <ul className="text-sm space-y-1 mb-6">
                <li className="flex items-center gap-2 text-black">
                  <span className={checkLength ? 'text-green-600' : 'text-gray-500'}>●</span> 8 characters minimum
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span className={checkNumber ? 'text-green-600' : 'text-gray-500'}>●</span> a number
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span className={checkSymbol ? 'text-green-600' : 'text-gray-500'}>●</span> one symbol
                </li>
                <li className="flex items-center gap-2 text-black">
                  <span className={passwordsMatch && confirmPassword ? 'text-green-600' : 'text-gray-500'}>●</span> passwords match
                </li>
              </ul>

              <button
                type="submit"
                disabled={!isValid}
                className={`w-full py-2 px-4 rounded-full font-semibold transition duration-200 ${
                  isValid
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-300 text-gray-600 cursor-not-allowed'
                }`}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">© 2025 SafeSpace. All rights reserved</p>
      </footer>
    </div>
  );
};

export default PasswordPage;
