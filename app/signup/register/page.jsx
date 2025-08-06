'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!agreeTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }
    // Submit logic
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-start">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/logo.png"
            alt="SafeSpace Logo"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-[#30B6AA]">Safe</span>
          <span className="text-xl font-bold text-black">Space</span>
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex flex-col md:flex-row items-center justify-center flex-grow px-4 py-10">
        {/* Image Section */}
        <div className="hidden md:flex flex-col items-center justify-center w-1/2 p-6 relative">
       
          <Image
            src="/person.png"
            alt="Person Illustration"
            width={180}
            height={200}
            className="absolute bottom-0 right-0 transform translate-x-6"
          />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8 bg-white shadow-md rounded-lg max-w-md mx-auto">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Support Worker Registration
          </h1>
           <h2 className="text-sm font-bold text-center text-gray-800 mb-4">
           Create Your Support Worker Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Terms Checkbox */}
            <div className="flex items-center">
              <input
                id="agree"
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
                className="h-4 w-4 text-green-600 border-gray-300 rounded"
              />
              <label htmlFor="agree" className="ml-2 block text-sm text-gray-700">
                 <span className="underline">I agree to the terms of service and privacy Policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreeTerms}
              className={`w-full py-2 px-4 ${
                agreeTerms
                  ? 'bg-green-600 hover:bg-green-700'
                  : 'bg-gray-400 cursor-not-allowed'
              } text-white font-semibold rounded-md transition duration-200`}
            >
              Register
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-green-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
