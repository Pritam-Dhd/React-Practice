import React from "react";

const Type = (props) => {
  const types = props.types;

  return (
    <>
      {types.map((type, index) => (
        <span
          className="type badge rounded-pill text-black text-uppercase ability"
          key={index}
        >
          {type.type.name}
        </span>
      ))}
    </>
  );
};

export default Type;
