import React from "react";

const Popup = (props) => {
  const {} = props;
  return (
    <div className="absolute w-screen h-screen bg-opacity-75 bg-black">
      <div className="mt-8 w-10/12 md:w-1/2 bg-white mx-auto md:mt-20">
        Hola soy un popup
      </div>
    </div>
  );
};

export default Popup;
