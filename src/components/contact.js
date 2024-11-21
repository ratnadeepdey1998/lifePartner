import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../contact.css";
import $ from 'jquery';
function Contact() {

  useEffect(() => {
    document.getElementById("footerbackcolor").style.background = "rgb(183, 45, 45)";
  }, []);
	
  return (
    <body>
      <section id="contact" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="contact clearfix">
              <div className="col-sm-4 contact_left clearfix">
                <div className="contact_left_inner clearfix">
                  <div className="col-sm-3 contact_left_inner_left clearfix">
                    <div className="contact_left_inner_left_inner clearfix">
                      <p>
                        <i className="fa fa-map"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-9 contact_left_inner_right clearfix">
                    <div className="contact_left_inner_right_inner clearfix">
                      <h4>Address</h4>
                      <hr className="hr_1" />
                      <p>6442 Fulton Street San Diego,</p>
                      <p>GT 82662-8889 UAI</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 contact_left clearfix">
                <div className="contact_left_inner clearfix">
                  <div className="col-sm-3 contact_left_inner_left clearfix">
                    <div className="contact_left_inner_left_inner clearfix">
                      <p>
                        <i className="fa fa-phone"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-9 contact_left_inner_right clearfix">
                    <div className="contact_left_inner_right_inner clearfix">
                      <h4>Phone</h4>
                      <hr className="hr_1" />
                      <p>
                        <a href="#">+2(826)818-5256</a>
                      </p>
                      <p>
                        <a href="#">+1(800)123-4567</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 contact_left clearfix">
                <div className="contact_left_inner clearfix">
                  <div className="col-sm-3 contact_left_inner_left clearfix">
                    <div className="contact_left_inner_left_inner clearfix">
                      <p>
                        <i className="fa fa-envelope"></i>
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-9 contact_left_inner_right clearfix">
                    <div className="contact_left_inner_right_inner clearfix">
                      <h4>E-mail</h4>
                      <hr className="hr_1" />
                      <p>
                        <a href="#">info@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact_2" className="clearfix">
        <div className="container">
          <div className="row">
            <div className="contact_2 clearfix">
              <h1>Feedback</h1>
              <hr className="hr_1" />
              <p>
                We would love to hear from you! Contact us directly filling this
                form.
              </p>
              <input
                type="text"
                className="form-control form-control_new_1"
                placeholder="Name"
              />
              <input
                type="text"
                className="form-control form-control_new_1"
                placeholder="E-mail Address"
              />
              <textarea
                placeholder="Message"
                className="form-control form-control_mass"
              ></textarea>
              <h5>
                <a href="#">SEND MESSAGE</a>
              </h5>
            </div>
          </div>
        </div>
      </section>
    </body>
  );
}
export default Contact;
