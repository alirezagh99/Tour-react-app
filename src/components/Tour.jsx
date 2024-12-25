import React from "react";

function Tour(props) {
  return (
    <div className="flex flex-col w-1/4 rounded shadow-xl m-5">
      <div className="">
        <img className="max-w-full h-auto" src={props.img} alt="" />
      </div>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-3 text-[rgba(0,0,0,0.8)]">
          {props.name}
        </h2>
        <p className="text-[rgba(0,0,0,0.7)]">{props.info}</p>
      </div>
    </div>
  );
}

export default Tour;
