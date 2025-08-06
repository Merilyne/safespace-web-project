'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const [started, setStarted] = useState(false);
  const [selection, setSelection] = useState('');
  const router = useRouter();

  const handleGetStarted = () => {
    setStarted(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selection) {
      alert('Please select an option.');
      return;
    }

    router.push('/signup/professional-registration');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navbar */}
      <nav className="w-full bg-white shadow py-4 px-6 border-b">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold text-blue-600">SafeSpace</h1>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-12">
        {!started ? (
          <div className="bg-white p-10 rounded-xl shadow-lg w-full max-w-md">
            <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Join SafeSpace</h1>
            <p className="mb-6 text-center text-gray-600">We’ll guide you through a few quick steps.</p>

            <button
              onClick={handleGetStarted}
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </button>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Where do you currently spend most of your time?
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              {[
                "Other online platforms",
                "Clinic or hospital",
                "Private practice",
                "Community mental health agency",
                "Teaching or counseling in an academic setting",
                "Other clinical setting",
                "Not currently practicing",
              ].map((option) => (
                <label
                  key={option}
                  htmlFor={option}
                  className={`flex items-center p-3 rounded border cursor-pointer ${
                    selection === option
                      ? 'bg-blue-100 border-blue-600 text-blue-900'
                      : 'bg-gray-50 border-gray-300 hover:bg-blue-50 text-gray-900'
                  }`}
                >
                  <input
                    type="radio"
                    id={option}
                    name="practice"
                    value={option}
                    checked={selection === option}
                    onChange={(e) => setSelection(e.target.value)}
                    className="mr-3 w-5 h-5"
                  />
                  {option}
                </label>
              ))}

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
              >
                Continue
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="w-full bg-black text-white text-center text-sm py-4">
        © 2025 <span className="font-semibold">SafeSpace</span>. All rights reserved.
      </footer>
    </div>
  );
}
