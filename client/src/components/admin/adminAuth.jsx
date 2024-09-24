import React, { useState } from "react";
import { FaUserAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
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
    console.log("test")

    axios
      .post("http://localhost:4000/api/auth/admin", data)
      .then((res) => {
        // console.log(res.data.message)

        //check the response and setting the login true or false
        if (res.data.message=="success") {
          window.localStorage.setItem("login", "true");
          window.location.reload()
          // navigate("/");
        } else {
          window.localStorage.setItem("login", "false");
        }
      })
      .catch((e) => {
        window.localStorage("login", "false");
        res.json({
          message:e.message,
        })
      });
  };
  return (
    <div className="mt-10 sm:mt-40 border sm:w-2/5 w-11/12 m-auto shadow-lg rounded-md  ">
      <h1 className="text-center font-bold text-lg sm:text-xl text-white mt-10 ">Admin Login</h1>
      <form
        className="w-full sm:w-2/4 mx-auto my-8 flex flex-col p-4 sm:p-0"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="px-4 sm:px-7 py-3 outline-none rounded-sm w-full"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
          <FaUserAlt className="absolute right-3 top-3 sm:top-4" />
        </div>
        <div className="relative mt-5">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className="px-4 sm:px-7 py-3 outline-none rounded-sm w-full"
            id="pwd"
            value={data.password}
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />
          {showPassword ? (
            <FaEye
              className="absolute top-3 sm:top-4 right-3 cursor-pointer"
              onClick={() => setShowPassword(false)}
            />
          ) : (
            <FaEyeSlash
              className="absolute top-3 sm:top-4 right-3 cursor-pointer"
              onClick={() => setShowPassword(true)}
            />
          )}
        </div>
        <button
          type="submit"
          className="mt-5 font-bold border mx-auto py-2 sm:py-3 px-4 w-2/3 sm:w-1/2 outline-none rounded-3xl bg-white hover:bg-slate-400 hover:text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminAuth;
