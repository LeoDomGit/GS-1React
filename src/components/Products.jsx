import React from "react";

function Products() {
  return (
    <>
      <div className="w-100">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://shopdunk.com/images/thumbs/0007808_iphone-14-pro-max-128gb_240.png"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">Sản phẩm </h5>
            <p className="card-text">Sản phẩm 1</p>
            <p className="cart-text">Giá : 22.000.000</p>
            <a href="#" className="btn btn-primary">
              Chi tiết
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
