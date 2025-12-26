"use client";

import { useEffect, useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

export default function LoginModal({ isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  // 🔒 Lock background scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] mt-75 flex items-center justify-center">
      
      {/* 🔹 Blur & dark overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-md"
        onClick={onClose}
      />

      {/* 🔹 Modal */}
      <div className="relative z-10 w-[90%] max-w-md rounded-2xl bg-white p-8 shadow-2xl animate-scaleIn">
        
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-red-500"
        >
          <X size={20} />
        </button>

        <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
          Login
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="mb-4 w-full rounded-lg bg-blue-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-500"
        />

        <div className="relative mb-4">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full rounded-lg bg-blue-50 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-red-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-3 text-gray-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button className="w-full rounded-lg bg-red-500 py-3 font-semibold text-white hover:bg-red-600 transition">
          Login
        </button>

        <div className="mt-5 flex justify-between text-sm">
          <button className="text-red-500 hover:underline">
            Forgot password?
          </button>
          <button className="text-gray-600 hover:underline">
            Create account
          </button>
        </div>
      </div>
    </div>
  );
}
