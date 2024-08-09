import React from  "react";
import Header from "./Header";
import Sidebar from "../Pages/sidebar";


function Layout({children}) {
  return (
    <div>
     <Sidebar/>
      <Header/>
     
      <main>{children}</main>
      
      </div>
  
  );
}

export default Layout;