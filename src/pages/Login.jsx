import React from "react";
import { loginWithGoogle } from "../firebase";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-red-200">
      <div className="p-8 bg-white shadow-xl rounded-2xl w-80 text-center">
        <h1 className="text-2xl font-bold mb-6">Welcome dear</h1>
        <button
          onClick={loginWithGoogle}
          className="w-full py-2 bg-blue-600 hover:bg-orange-700 text-white rounded-lg"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
