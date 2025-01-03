import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full p-2 border rounded-lg"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full p-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border rounded-lg"
              placeholder="Enter your password"
            />
            <p>remember me</p>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white rounded-lg hover:bg-gray-800"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
