// pages/index.tsx
import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";


export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save login timestamp to Firestore
      await setDoc(
        doc(db, "users", user.uid),
        {
          email: user.email,
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      );

      alert("Login successful!");
    } catch (err: any) {
      setError(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-green-100 justify-between">
      <div className="flex-grow flex items-center justify-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md"
        >
          <div className="flex flex-col items-center mb-6">
            <img
              src="/logo.png"
              alt="SafeSpace Logo"
              className="w-16 h-16 mb-2"
            />
            <h1 className="font-bold text-2xl text-green-800">
              Safe<span className="font-extrabold">Space</span>
            </h1>
            <p className="text-xs text-gray-700 mt-1">
              Mental Health Support Platform
            </p>
          </div>

          <label className="block mb-2 text-sm font-semibold" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="Enter your email"
            className="w-full p-2 mb-4 border border-gray-400 rounded-md focus:outline-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="block mb-2 text-sm font-semibold" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
            className="w-full p-2 mb-2 border border-gray-400 rounded-md focus:outline-green-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="text-center mb-4">
            <a href="#" className="text-xs font-semibold text-gray-700">
              Forgot Password?
            </a>
          </div>

          {error && (
            <p className="text-red-600 text-center mb-2">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-full transition disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>

      <footer className="bg-black text-white text-center py-3 text-xs">
        2025 SafeSapce. All Right Reserved
      </footer>
    </div>
  );
}
