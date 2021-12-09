import React from "react";

const MainLayout = ({children}) => {
  return (
     <div className="page-wrap">
      {children}
     </div> 
  );
}

export default MainLayout;