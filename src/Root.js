import React from "react";

import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="App">
      {/* <Header /> */}
     
      <Outlet /> {/* سيتم عرض المحتوى المخصص للمسار هنا */}
    </div>
  );
};

export default Root;
