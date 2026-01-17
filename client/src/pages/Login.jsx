import { Bus } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [state, setState] = React.useState("login");
    

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center 
            bg-linear-to-br from-[#2b3a5e] via-[#20365a] to-[#0f172a]"
    >
      <form
        onSubmit={handleSubmit}
        className="sm:w-[350px] w-full text-center border  shadow border-gray-300/60 rounded-2xl px-8 bg-white"
      >
        <h1 className="flex text-gray-600  justify-center mr-6 text-3xl mt-10 font-medium">
          <Bus className="h-10 w-10  mr-2 text-indigo-600" />
          {state === "login" ? "Login" : "Sign up"}
        </h1>

        <p className="text-gray-500 text-sm mt-2">Please sign in to continue</p>

        <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border-none outline-none ring-0"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#6B7280"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="border-none outline-none ring-0"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mt-4 text-left  text-indigo-500">
          <button className="text-sm cursor-pointer" type="reset">
            Forget password?
          </button>
        </div>
          {/* Tempary link*/}
        <Link to={"/admin"}> 
          <button
            type="submit"
            className="mt-2 w-full h-11 rounded-full text-white bg-indigo-500 hover:opacity-90 transition-opacity"
          >
            {state === "login" ? "Login" : "Sign up"}
          </button>
        </Link>

        <p className="text-gray-500 text-sm mt-3 mb-11 cursor-pointer">
          Admin Only
        </p>
      </form>
    </div>
  );
};
