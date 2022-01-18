import React from "react";
import image from "../scss/iPhone Mockup.png";

const Promo = () => {
  return (
    <div className="d-flex flex-column align-content-end  ">
      <h1 className="text-center" style={{ color: "white" }}>
        <b>Gradie</b>
      </h1>
      <p className="text-center " style={{ color: "#86BFD3" }}>
        Beautiful gradients in seconds
      </p>
      <img
        src={image}
        style={{ width: "315px", objectFit: "contain" }}
        className="align-self-center align-self-end"
      ></img>
    </div>
  );
};

export default Promo;
