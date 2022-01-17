import React from "react";
import image from "../scss/iPhone Mockup.png";

const Promo = () => {
  return (
    <>
      <h1 className="text-center pt-5" style={{ color: "white" }}>
        Gradie
      </h1>
      <p className="text-center " style={{ color: "#86BFD3" }}>
        Beautiful gradients in seconds
      </p>
      <img
        src={image}
        style={{ width: "inherit", height: "inherit", objectFit: "scale-down" }}
        className="mt-auto pt-auto"
      ></img>
    </>
  );
};

export default Promo;
