import React from 'react'
import "./header.css"
const Header = () => {

  //logout function

  const LogOut=()=>{
     const logout= window.sessionStorage.removeItem("login")
      if(logout){
        alert("user logout")
        window.location.reload()
      }
  }
  return (
    <div className="fixed  bg-white  text-blue-800 px-10 py-1 z-10 w-full m-auto border  ">
      <div className="flex items-center justify-between py-2 text-5x1">
        <div className="font-bold  text-xl">Admin<span className="">Panel</span></div>
        <div className="flex items-center text-gray-500">
        
          <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2 back" onClick={LogOut()}></div>
        </div>
    </div>
  </div>
  )
}

export default Header