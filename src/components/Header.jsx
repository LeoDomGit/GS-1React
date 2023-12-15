import React, { useEffect, useState } from "react";

function Header() {
  // const : constant : hằng số
  const url = "http://127.0.0.1:8000/api/";
  //==State ===
  const [brands, setBrands] = useState([]);
  const [cate, setCate] = useState([]);
  useEffect(() => {
    fetch(url + "categrories")
      .then((res) => res.json())
      .then((res) => {
        setCate(res);
      });
    fetch(url + "brands")
      .then((res) => res.json())
      .then((res) => {
        setBrands(res);
      });
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href={"/"}>
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/news">
                  News
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Thương hiệu
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {brands.length > 0 &&
                    brands.map((item, index) => (
                      <li>
                        <a className="dropdown-item" href="#">
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Loại sản phẩm
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {cate.length > 0 &&
                    cate.map((item, index) => (
                      <li>
                        <a className="dropdown-item" href="#">
                          {item.name}
                        </a>
                      </li>
                    ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
