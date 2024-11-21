import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "../features.css";
import $ from "jquery";

function Features() {
  useEffect(() => {
    document.getElementById("features").style.color = "#c82a2a";
    // document.getElementById("myCarousel").style.interval = "3000";
  }, []);

  return (
    <>
      <section>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner" style={{ height: "530px" }}>
            <div className="carousel-item active">
              <img
                // src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large"
                src="../../images/b15.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                // src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large"
                src="../../images/b7.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                // src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large"
                src="../../images/b19.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
      <section>
        <div className="title h1 text-center">Make Promises</div>
        <div
          id="myCarousel"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="mask flex-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-12 order-md-1 order-2">
                      <h4>
                        Present your <br />
                        awesome product
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet. Reprehenderit, qui
                        blanditiis quidem rerum <br />
                        necessitatibus praesentium voluptatum deleniti atque
                        corrupti.
                      </p>
                      <a href="#">VIEW MORE</a>{" "}
                    </div>
                    <div className="col-md-5 col-12 order-md-2 order-1">
                      <img
                        src="../../images/wed1.png"
                        className="mx-auto"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mask flex-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-12 order-md-1 order-2">
                      <h4>
                        Present your <br />
                        awesome product
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet. Reprehenderit, qui
                        blanditiis quidem rerum <br />
                        necessitatibus praesentium voluptatum deleniti atque
                        corrupti.
                      </p>
                      <a href="#">VIEW MORE</a>{" "}
                    </div>
                    <div className="col-md-5 col-12 order-md-2 order-1">
                      <img
                        src="../../images/wed2.png"
                        className="mx-auto"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mask flex-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-12 order-md-1 order-2">
                      <h4>
                        Present your <br />
                        awesome product
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet. Reprehenderit, qui
                        blanditiis quidem rerum <br />
                        necessitatibus praesentium voluptatum deleniti atque
                        corrupti.
                      </p>
                      <a href="#">VIEW MORE</a>{" "}
                    </div>
                    <div className="col-md-5 col-12 order-md-2 order-1">
                      <img
                        src="../../images/wed3.png"
                        className="mx-auto"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mask flex-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-12 order-md-1 order-2">
                      <h4>
                        Present your <br />
                        awesome product
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet. Reprehenderit, qui
                        blanditiis quidem rerum <br />
                        necessitatibus praesentium voluptatum deleniti atque
                        corrupti.
                      </p>
                      <a href="#">VIEW MORE</a>{" "}
                    </div>
                    <div className="col-md-5 col-12 order-md-2 order-1">
                      <img
                        src="../../images/wed4.png"
                        className="mx-auto"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="mask flex-center">
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-7 col-12 order-md-1 order-2">
                      <h4>
                        Present your <br />
                        awesome product
                      </h4>
                      <p>
                        Lorem ipsum dolor sit amet. Reprehenderit, qui
                        blanditiis quidem rerum <br />
                        necessitatibus praesentium voluptatum deleniti atque
                        corrupti.
                      </p>
                      <a href="#">VIEW MORE</a>{" "}
                    </div>
                    <div className="col-md-5 col-12 order-md-2 order-1">
                      <img
                        src="../../images/wed5.png"
                        className="mx-auto"
                        alt="slide"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#myCarousel"
            role="button"
            data-slide="prev"
          >
            {" "}
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Previous</span>{" "}
          </a>{" "}
          <a
            className="carousel-control-next"
            href="#myCarousel"
            role="button"
            data-slide="next"
          >
            {" "}
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>{" "}
            <span className="sr-only">Next</span>{" "}
          </a>{" "}
        </div>
      </section>
    </>
  );
}

export default Features;
