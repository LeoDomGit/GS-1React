import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Products from "../components/Products";

function Home() {
  const url = "http://127.0.0.1:8000/api/";
  const urlimg = "http://127.0.0.1:8000/images/";
  const [products, setProduct] = useState([]);
  useEffect(() => {
    setInterval(() => {
      fetch(url + "products")
        .then((res) => res.json())
        .then((res) => {
          setProduct(res);
        });
    }, 7000);
  }, []);
  return (
    <>
      <div className="container-fluid">
        <Header />

        <Slider />
        <div className="mt-3">
          <div className="container">
            <div className="row mb-5">
              {products.length > 0 &&
                products.map((item, index) => (
                  <div key={index} className="col-md-3">
                    <Products
                      id={item.id}
                      name={item.name}
                      price={item.price}
                      discount={item.discount}
                      image={urlimg + item.images}
                    />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
