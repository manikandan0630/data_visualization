import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./components/admin/adminAuth";
import Dashboard from "./components/dashboard/dashboard";
import { useEffect, useState } from "react";
function App() {
 
  const [success,setSuccess]=useState(false);
  //fethcing session from browser 
  useEffect(()=>{
     const data=window.sessionStorage.getItem("login")
     setSuccess(data)
  },[])


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={success=="true" ? <Dashboard /> : <AdminLogin />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
