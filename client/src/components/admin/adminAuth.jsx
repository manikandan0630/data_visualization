import React, { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import "./admin.css"
const AdminAuth = () => {
  // const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //poost data to the server
    console.log("test");

    axios
      .post("http://localhost:4000/api/auth/admin", data)
      .then((res) => {
        // console.log(res.data.message)

        //check the response and setting the login true or false
        if (res.data.message == "success") {
          window.localStorage.setItem("login", "true");
          window.location.reload();
          // navigate("/");
        } else {
          alert("Please enter the correct details")
          window.location.reload()
          window.localStorage.setItem("login", "false");
        }
      })
      .catch((e) => {
        window.localStorage("login", "false");
        res.json({
          message: e.message,
        });
      });
  };
  return (
    // <div className="mt-10 sm:mt-40 border sm:w-2/5 w-11/12 m-auto shadow-lg rounded-md  ">
    //   <h1 className="text-center font-bold text-lg sm:text-xl text-white mt-10 ">Admin Login</h1>
    //   <form
    //     className="w-full sm:w-2/4 mx-auto my-8 flex flex-col p-4 sm:p-0"
    //     onSubmit={handleSubmit}
    //   >
    //     <div className="relative">
    //       <input
    //         type="text"
    //         name="username"
    //         placeholder="Username"
    //         className="px-4 sm:px-7 py-3 outline-none rounded-sm w-full"
    //         value={data.username}
    //         onChange={(e) => setData({ ...data, username: e.target.value })}
    //       />
    //       <FaUserAlt className="absolute right-3 top-3 sm:top-4" />
    //     </div>
    //     <div className="relative mt-5">
    //       <input
    //         type={showPassword ? "text" : "password"}
    //         name="password"
    //         placeholder="Password"
    //         className="px-4 sm:px-7 py-3 outline-none rounded-sm w-full"
    //         id="pwd"
    //         value={data.password}
    //         onChange={(e) => setData({ ...data, password: e.target.value })}
    //       />
    //       {showPassword ? (
    //         <FaEye
    //           className="absolute top-3 sm:top-4 right-3 cursor-pointer"
    //           onClick={() => setShowPassword(false)}
    //         />
    //       ) : (
    //         <FaEyeSlash
    //           className="absolute top-3 sm:top-4 right-3 cursor-pointer"
    //           onClick={() => setShowPassword(true)}
    //         />
    //       )}
    //     </div>
    //     <button
    //       type="submit"
    //       className="mt-5 font-bold border mx-auto py-2 sm:py-3 px-4 w-2/3 sm:w-1/2 outline-none rounded-3xl bg-white hover:bg-slate-400 hover:text-white"
    //     >
    //       Login
    //     </button>
    //   </form>
    // </div>

    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="my-1 text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-bold bg-white ">
                  <h1>Admin Login </h1>
                </div>
              </div>

              <div className="mx-auto my-5 max-w-xs relative">
                <FaUserAlt className="absolute top-4 right-5" />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                  value={data.username}
                  onChange={(e)=>setData({...data,username:e.target.value})}
                />
                {
                  showPassword?<FaEye className="absolute bottom-24 right-5" onClick={()=>setShowPassword(false)}/>:<FaEyeSlash className="absolute bottom-24 right-5" onClick={()=>setShowPassword(true)}/>
                }
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type={showPassword?"text":"password"}
                  placeholder="Password"
                  value={data.password}
                  onChange={(e)=>setData({...data,password:e.target.value})}
                />
                <button onClick={handleSubmit} className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 hover:text-white transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  
                  
                  <span className="m-auto">Sign In</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
          <div
            className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat back"
            
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AdminAuth;
