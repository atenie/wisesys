import React, { Component } from "react";
import Promo from "./components/Promo";
import Login from "./components/Login";
import "./scss/custom.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="row flex-grow-1  d-none d-xs-none d-sm-block "></div>
        <div className="mh-75 row flex-grow-1 row-cols-xs-1 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-3">
          <div className="col-xs-0 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-none d-xs-none d-sm-block"></div>
          <div className=" col-xs-12 col-sm-8 col-md-8 col-lg-8 col-xl-8 col-xxl-8 ">
            <div
              className="row h-100 d-flex"
              style={{
                backgroundColor: "white",
                borderRadius: "10px 10px",
                overflow: "hidden",
                border: "1px solid #BCBCBC",
              }}
            >
              <div
                className="col-xs-0 col-sm-0 col-md-0 col-lg-6 col-xl-6 col-xxl-6 flex-xl-grow-1 flex-xxl-grow-1  d-flex justify-content-end flex-column"
                style={{
                  backgroundColor: "#013243",
                  overflow: "hidden",
                }}
              >
                <Promo></Promo>
              </div>
              <div
                className="col-xs-0 col-sm-0 col-md-0 col-lg-6 col-xl-6 col-xxl-6 flex-xl-grow-1 flex-xxl-grow-1 d-flex"
                style={{
                  backgroundColor: "white",
                }}
              >
                <Login></Login>
              </div>
            </div>
          </div>
          <div className="col-xs-0 col-sm-2 col-md-2 col-lg-2 col-xl-2 col-xxl-2 d-none d-xs-none d-sm-none d-md-block"></div>
        </div>
        <div className="row flex-grow-1  d-none d-xs-none d-sm-block"></div>
      </>
    );
  }
}

export default App;
