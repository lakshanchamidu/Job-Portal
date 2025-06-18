import React, { useState } from "react";
import axios from "axios";
import logo from "../assests/JobPortal.png";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/jobPortal/userLogin",
        {
          email,
          password,
        }
      );
      if (response.status === 200) {
        setEmail("");
        setPassword("");
        alert("Login Successful!.");
      }
    } catch (error) {
      console.error("Login error.", error);
      alert("Check your Credintials.");
    }
  };

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 flex relative">
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <img src={logo} alt="Logo" className="w-20 h-20 rounded-full" />
      </div>

      {/* Left Side */}
      <div className="w-1/2 flex flex-col items-center justify-center px-8 mt-10">
        <div className="text-center text-white mb-6">
          <h1 className="text-6xl font-bold mb-2">Welcome</h1>
          <p className="text-2xl">Connecting Talent with Opportunity</p>
        </div>

        <div className="overflow-hidden max-w-[700px] w-full">
          <div className="flex space-x-6 animate-scroll-x items-stretch">
            {[
              {
                title: "Job Listings",
                description:
                  "Explore thousands of job opportunities across various industries, filter by location, salary, and skill level to find your perfect match.",
              },
              {
                title: "Apply Easily",
                description:
                  "Quickly upload your resume and apply to jobs in just a few clicks. No lengthy forms—just a smooth and easy application process.",
              },
              {
                title: "Admin Dashboard",
                description:
                  "Employers can efficiently manage job postings, review applications, and track recruitment progress through a centralized dashboard.",
              },
              {
                title: "User Profile",
                description:
                  "Keep track of your application history, manage your resume, and receive personalized job recommendations based on your preferences.",
              },
              {
                title: "Secure Login",
                description:
                  "Your account is protected with modern encryption and secure authentication to ensure your personal data stays safe at all times.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="w-64 h-56 flex-shrink-0 bg-white bg-opacity-20 backdrop-blur-lg border border-white/30 text-white rounded-xl shadow-xl p-6 flex flex-col justify-center items-center text-center"
              >
                <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm leading-snug">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 flex items-center justify-center px-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-20 backdrop-blur-md p-10 rounded-xl shadow-lg w-full max-w-md"
        >
          <h2 className="text-4xl font-bold mb-2 text-white text-center">
            Log In
          </h2>
          <p className="text-1xl text-center text-white font-bold mb-6">
            Sign in to access your account
          </p>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="w-full p-3 mb-4 rounded-2xl text-black"
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
            className="w-full p-3 mb-4 rounded-2xl text-black"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 transition-colors text-white font-semibold py-3 rounded-2xl"
          >
            Log In
          </button>
          <p className="text-center text-white mt-4">
            Don't have an account?{" "}
            <a
              href="/jobPortal/SignUp"
              className="text-yellow-300 hover:underline"
            >
              Register Now
            </a>
          </p>
        </form>
      </div>
      <div className="absolute bottom-1 w-full text-center text-white text-sm select-none">
        Developed by Chamidu Lakshan
      </div>
    </div>
  );
}

export default LogIn;
