import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "../components/Products";

function Home() {
  return (
    <>
      <div className="container-fluid">
        <Header />

        <Slider />
        <div className="mt-3">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Products />
              </div>
              <div className="col-md-3">
                <Products />
              </div>
              <div className="col-md-3">
                <Products />
              </div>
              <div className="col-md-3">
                <Products />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
