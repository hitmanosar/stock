import React from "react";
import a from "../photo/a.jpg";
import b from "../photo/b.jpg";
import e from "../photo/c.jpg";

const Carousel = () => {
  return (
    <React.Fragment>
      <div classNameName="container-fluid">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="true"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
                className="d-block w-100 img img-fluid "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
                className="d-block w-100 img img-fluid "
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://png.pngtree.com/thumb_back/fh260/background/20200731/pngtree-blue-carbon-background-with-sport-style-and-golden-light-image_371487.jpg"
                className="d-block w-100 img img-fluid "
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>



    </React.Fragment>
  );
};

export default Carousel;
