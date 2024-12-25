import React from "react";

function Title() {
  return (
    <div className="text-center mt-10 relative">
      <h1 className="text-2xl font-semibold text-[rgba(0,0,0,0.8)]">
        Our Tours
      </h1>
      <div className="w-[5%] absolute border-2 left-1/2 border-green-500 mt-2 -translate-x-2/4 -translate-y-2/4"></div>
    </div>
  );
}

export default Title;
