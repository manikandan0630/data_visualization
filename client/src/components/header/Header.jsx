
import "./header.css"
const Header = () => {

  //logout function

  const LogOut=()=>{
    const check=prompt("If you want logout?")
    //check the prompt ok or not
    if(check){
      window.sessionStorage.removeItem("login")
      window.location.reload()
    }
    else{
      alert("You are canceled the logout")
    }
    
   
  }
  return (
    <div className="fixed  bg-white  text-blue-800 px-10 py-1 z-10 w-full m-auto border  ">
      <div className="flex items-center justify-between py-2 text-5x1">
        <div className="font-bold  text-xl">Admin<span className="">Panel</span></div>
      
        <div className="flex items-center text-gray-500">
        <div className='font-semibold text-xl ' onClick={LogOut}><span className='mx-10 text-blue-800 hover:cursor-pointer'>Logout</span></div>
          <div className="bg-center bg-cover bg-no-repeat rounded-full inline-block h-12 w-12 ml-2 back" title='Admin'></div>
        </div>
    </div>
  </div>
  )
}

export default Header