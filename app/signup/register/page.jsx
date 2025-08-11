'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterPage = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    licenseNumber: '',
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

    console.log('Form submitted:', formData);
    router.push('/password'); // Route to next page
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-3 px-6 flex items-center justify-start">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="SafeSpace Logo" width={32} height={32} className="rounded-full" />
          <span className="text-xl font-bold text-[#30B6AA]">Safe</span>
          <span className="text-xl font-bold text-black">Space</span>
        </Link>
      </nav>

      {/* Page Content */}
      <div className="flex flex-col md:flex-row items-stretch justify-around flex-grow px-6 py-10">
        {/* Image Section */}
        <div className="hidden md:flex w-1/2 items-center justify-center p-6">
          <Image
            src="/person.png"
            alt="Person Illustration"
            width={400}
            height={500}
            className="object-contain h-full"
          />
        </div>

        {/* Form Section */}
         <div className="w-full md:w-1/2 p-8 bg-white shadow-md rounded-lg max-w-md mx-auto  max-h-[90vh]">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Support Worker Registration
          </h1>
          <h2 className="text-sm font-bold text-center text-gray-600 mb-4">
            Create Your Support Worker Account
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Work License Number</label>
              <input
                type="text"
                name="licenseNumber"
                placeholder="Enter your license number"
                value={formData.licenseNumber}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-black"
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
                <span className="underline">I agree to the terms of service and privacy policy</span>
              </label>
            </div>

            <button
              type="submit"
              disabled={!agreeTerms}
              className={`w-full py-2 px-4 ${
                agreeTerms ? 'bg-green-600 hover:bg-green-700' : 'bg-gray-400 cursor-not-allowed'
              } text-white font-semibold rounded-md transition duration-200`}
            >
              Continue
            </button>
            <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{' '}
            <Link href="/signin" className="text-green-600 hover:underline">
              Sign In
            </Link>
          </p>
          </form>

          
        </div>
      </div>
      {/* Footer */}
      <footer className="bg-black text-white text-center py-4">
        <p className="text-sm">2025 SafeSpace. All rights reserved</p>
      </footer>
    </div>
  );
};

export default RegisterPage;
