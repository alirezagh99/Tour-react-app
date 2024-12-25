import React, { useState } from "react";

function Tour(props) {
  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };
  const mes = showMore ? "show less..." : "read more...";
  const showClass = showMore ? "" : "h-36 overflow-hidden";
  return (
    <div className="flex flex-col lg:w-1/4 rounded shadow-xl m-5">
      <div className="">
        <img className="max-w-full h-[200px]" src={props.img} alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 text-[rgba(0,0,0,0.8)]">
          {props.name}
        </h2>
        <p className={`text-[rgba(0,0,0,0.7)] ${showClass}`}>{props.info}</p>
        <p onClick={handleClick} className="text-blue-500 cursor-pointer">
          {mes}
        </p>
      </div>
    </div>
  );
}

export default Tour;
