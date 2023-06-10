import React from "react";

const Order = ({ alphabet }) => {
  const alpha = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "J",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="d-flex flex-wrap justify-content-center gap-2 ">
            {alpha.map((letter, index) => (
              <button
                className="alphabet text-center bg-black"
                key={index}
                onClick={() => alphabet(letter)}
              >
                <h5 className="letter text-capitalize mt-2 text-light">
                  {letter}
                </h5>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
