import React from "react";
import"./Ex3.scss"
export default function Ex3() {
  return (
    <div className="fullPage">
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://www.mihgroup.ae/themes/storefront/public/images/logo/logo.png" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVrHOo9H2h8wZrqbxW-MzdPbRZ1O5WCOw5_A&s" className="card-img-top" alt="..."  />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
