import React from "react";

function Products(props) {
  return (
    <>
      <div className="w-100">
        <div className="card" style={{ width: "18rem" }}>
          <img src={props.image} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{props.name} </h5>
            <p className="card-text">{props.name}</p>
            <p className="cart-text">
              Giá : {Intl.NumberFormat("vn-VN").format(props.price)}
            </p>
            <a href={"/" + props.id} className="btn btn-primary">
              Chi tiết
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
