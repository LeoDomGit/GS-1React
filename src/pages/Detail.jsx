/*eslint-disable*/
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Detail() {
  const id = Number(useParams().id);
  const [product, setProduct] = useState({});
  const [gallery, setGallery] = useState([]);
  const [brandProducts, setBrandProduct] = useState([]);
  const api1 = "http://127.0.0.1:8000/api/";
  const api = "http://127.0.0.1:8000/api/product/";
  const urlimg = "http://127.0.0.1:8000/images/";

  useEffect(() => {
    fetch(api + id)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setProduct(res.product);
        setGallery(res.gallery);
      });
    fetch(api1 + "brandproducts/" + id)
      .then((res) => res.json())
      .then((res) => {
        setBrandProduct(res);
      });
  }, [id]);
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row w-100">
          <div className="col-md-4">
            <div style={{ width: "80%", margin: "0px auto" }}>
              <Carousel showStatus={false} infiniteLoop={true}>
                {gallery.length > 0 &&
                  gallery.map((item, index) => (
                    <div key={index}>
                      <img src={urlimg + item.images} />
                    </div>
                  ))}
              </Carousel>
            </div>
            <div className="row">
              <div className="col-md text-center">
                <button className="btn btn-primary">Thêm vào giỏ hàng </button>
              </div>
            </div>
          </div>
          <div className="col-md ">
            <div className="row w-100 pt-4">
              <div style={{ maxWidth: "50%" }} className="">
                <h3>{product.name}</h3>
                <hr />
                <h4>
                  Giá : {Intl.NumberFormat("vn-VN").format(product.price)}
                </h4>
              </div>
            </div>
            <div className="row">
              <div className="container">
                <div dangerouslySetInnerHTML={{ __html: product.content }} />
              </div>
            </div>
          </div>
        </div>
        <div style={{ margin: "0px auto" }} className="container-fluid row">
          <div className="col-md-6">
            <div className="row w-100">
              {brandProducts.length > 0 &&
                brandProducts.map((item, index) => (
                  <div className="col-md-3">
                    <div className="card" style={{ width: "100%" }}>
                      <img
                        src={urlimg + item.images}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          {Intl.NumberFormat("vn-VN").format(item.price)}
                        </p>
                        <a href={"/" + item.id} className="btn btn-primary">
                          Chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="col-md-6">
            <div className="row w-100">
              {brandProducts.length > 0 &&
                brandProducts.map((item, index) => (
                  <div className="col-md-3">
                    <div className="card" style={{ width: "100%" }}>
                      <img
                        src={urlimg + item.images}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">
                          {Intl.NumberFormat("vn-VN").format(item.price)}
                        </p>
                        <a href={"/" + item.id} className="btn btn-primary">
                          Chi tiết
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Detail;
