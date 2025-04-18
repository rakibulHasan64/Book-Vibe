import React from "react";
import { useForm } from "react-hook-form";
import { AtSymbolIcon, KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

function Register() {
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      console.log("✅ Form Submitted:", data);
   };

   return (
      <div className="min-h-screen bg-gradient-to-br from-[#1e3c72] via-[#2a5298] to-[#1e3c72] flex items-center justify-center px-4">
         <div className="w-full max-w-md bg-white rounded-xl shadow-2xl p-8 border border-transparent bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-90">
            <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-8 drop-shadow-md">
               🚀 Join the Future
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
               {/* Name */}
               <div>
                  <label className="block mb-1 font-semibold text-gray-700">Full Name</label>
                  <div className="relative">
                     <input
                        type="text"
                        {...register("name", { required: "Name is required" })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                     />
                     <UserIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
                  </div>
                  {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
               </div>

               {/* Email */}
               <div>
                  <label className="block mb-1 font-semibold text-gray-700">Email Address</label>
                  <div className="relative">
                     <input
                        type="email"
                        {...register("email", {
                           required: "Email is required",
                           pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                     />
                     <AtSymbolIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
                  </div>
                  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
               </div>

               {/* Password */}
               <div>
                  <label className="block mb-1 font-semibold text-gray-700">Password</label>
                  <div className="relative">
                     <input
                        type="password"
                        {...register("password", {
                           required: "Password is required",
                           minLength: { value: 6, message: "Minimum 6 characters" },
                        })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg pl-10 focus:outline-none focus:ring-2 focus:ring-[#1e3c72]"
                     />
                     <KeyIcon className="w-5 h-5 absolute top-3 left-3 text-gray-400" />
                  </div>
                  {errors.password && (
                     <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                  )}
               </div>

               {/* Submit */}
               <button
                  type="submit"
                  className="w-full py-2 text-white text-lg font-semibold bg-gradient-to-r from-[#1e3c72] to-[#2a5298] hover:from-[#2a5298] hover:to-[#1e3c72] rounded-lg shadow-md transition duration-200"
               >
                  Create Account
               </button>
            </form>

            {/* Link */}
            <div className="text-center mt-6">
               <Link to="/logine" className="text-sm text-[#1e3c72] font-medium hover:underline">
                  Already have an account? <span className="font-semibold">Login</span>
               </Link>
            </div>
         </div>
      </div>
   );
}

export default Register;
