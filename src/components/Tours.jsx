import React from "react";
import Tour from "./Tour";
function Tours(props) {
  console.log(props.data);
  return (
    <div className="flex flex-col lg:flex-row w-2/3 m-auto flex-wrap">
      {props.data.map((item) => {
        return (
          <Tour
            key={item.id}
            name={item.name}
            info={item.info}
            img={item.image}
          />
        );
      })}
    </div>
  );
}

export default Tours;
