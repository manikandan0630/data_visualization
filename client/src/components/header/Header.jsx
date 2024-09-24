import React from 'react'
import "./header.css"
const Header = () => {
  return (
    <div className="fixed    text-blue-800 px-10 py-1 z-10 w-full m-auto border  ">
      <div className="flex items-center justify-between py-2 text-5x1">
        <div className="font-bold text-white text-xl">Admin<span className="text-white">Panel</span></div>
        <div className="flex items-center text-gray-500">
          {/* <span className="material-icons-outlined p-2" style={{fontSize: "30px"}}>search</span> */}
          {/* <span className="material-icons-outlined p-2" style={{fontSize: "30px"}}>notifications</span> */}
          <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2 back" ></div>
        </div>
    </div>
  </div>
  )
}

export default Header