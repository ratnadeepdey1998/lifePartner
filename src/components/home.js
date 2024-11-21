import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/doc.css";
import "../assets/css/bootstrap.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/fonts.css";
import "../assets/css/animate.css";
// import "../assets/images/1.png"
// import { useNavigate } from "react-router-dom";

import "../home.css";
// import { Carousel } from "react-carousel-minimal";
import Videos from "../../src/weddingedit.mp4";
// import { Margin } from "@mui/icons-material";

function Home() {
  // const data = [
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
  //     caption: "Darjeeling",
  //   },
  //   {
  //     image:
  //       "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
  //     caption: "Darjeeling",
  //   },
  //   {
  //     image:
  //       "https://www.omm.com/~/media/images/site/locations/san_francisco_780x520px.ashx",
  //     caption: "San Francisco",
  //   },
  //   {
  //     image:
  //       "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
  //     caption: "Scotland",
  //   },
  //   {
  //     image:
  //       "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
  //     caption: "Darjeeling",
  //   },
  // ];

  // const captionStyle = {
  //   fontSize: "2em",
  //   fontWeight: "bold",
  // };
  // const slideNumberStyle = {
  //   fontSize: "20px",
  //   fontWeight: "bold",
  // };

  return (
    <>
      {/* <div style={{ textAlign: "center" }}>
        <div style={{ padding: "0 0px" }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="500px"
            captionStyle={captionStyle}
            // radius="10px"
            // slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            // thumbnails={true}
            // thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "0px auto",
            }}
          />
        </div>
      </div> */}

      {/* Video Start */}
      <section>
        <div className="row">
          <div id="heroSection" className="hero">
            <video id="#video" muted autoPlay={"autoplay"} loop src={Videos} />

            <div className="getQuote">
              <a href="#contact">
                <button className="btn"> Get Quote</button>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Video End*/}

      {/* card slider section Start */}
      <section>
        <div className="row horizCard">
          <div className="container py-3">
            <div className="title h1 text-center">
              Make Promises
            </div>

            <div className="cardf">
              <div className="row ">
                <div className="col-md-7 px-3">
                  <div className="card-block smallcard px-6">
                    <h4 className="card-title">
                      Make Promises{" "}
                    </h4>
                    <p className="card-text">
                      The Carousel code can be replaced with an img src, no
                      problem. The added CSS brings shadow to the card and some
                      adjustments to the prev/next buttons and the indicators is
                      rounded now. As in Bootstrap 3
                    </p>
                    <p className="card-text">
                      Made for usage, commonly searched for. Fork, like and use
                      it. Just move the carousel div above the col containing
                      the text for left alignment of images
                    </p>
                    <br />
                    <a href="#" className="mt-auto btn btn-primary  ">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-md-5">
                  <div
                    id="CarouselTest"
                    className="carousel slide"
                    data-ride="carousel"
                  >
                    <ol className="carousel-indicators">
                      <li
                        data-target="#CarouselTest"
                        data-slide-to="0"
                        className="active"
                      ></li>
                      <li data-target="#CarouselTest" data-slide-to="1"></li>
                      <li data-target="#CarouselTest" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img
                          className="d-block threeslides"
                          // src="https://picsum.photos/450/300?image=1072"
                          src="../../images/b14.jpg"
                          alt=""
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block threeslides"
                          // src="https://picsum.photos/450/300?image=855
                          src="../../images/b10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="carousel-item">
                        <img
                          className="d-block threeslides"
                          // src="https://picsum.photos/450/300?image=355"
                          src="../../images/b16.jpg"
                          alt=""
                        />
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#CarouselTest"
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
                        href="#CarouselTest"
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
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="cardf float-left" style={{"width":"49%"}}>
              <div className="row twoslidespaddtop">
                <div className="col-sm-7">
                  <div className="card-block smallcard">
                    <h4 className="card-title">Small card</h4>
                    <p>Wetgple text to build your own card.</p>
                    <p>Change around the content for awsomenes</p>
                    <a href="#" className="btn btn-primary btn-sm ">
                      Read More
                    </a>
                  </div>
                </div>

                <div className="col-sm-5">
                  <img
                    className="d-block w-100 twoslides"
                    // src="https://picsum.photos/150?image=380"
                    src="../../images/b16.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="cardf float-right" style={{"width":"49%"}}>
              <div className="row twoslidespaddtop">
                
                <div className="col-sm-7">
                  <div className="card-block smallcard">
                    <h4 className="card-title">Small card</h4>
                    <p>Wetgple text to build your own card.</p>
                    <p>Change around the content for awsomenes</p>
                    <a href="#" className="btn btn-primary btn-sm ">
                      Read More
                    </a>
                  </div>
                </div>
                <div className="col-sm-5">
                  <img
                    className="d-block w-100 twoslides"
                    // src="https://picsum.photos/150?image=380"
                    src="../../images/b15.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* card slider section End */}

      {/* Hover Images Start */}

      <section className="fourcardsec">
        <div className="container mt-2">
          <div
            className="card card-block mb-2 cardTitle"
            style={{ backgroundColor: "#a86cc4", color: "#fff" }}
          >
            <h1 className="card-title">Matrimony</h1>
          </div>
          <div className="row">
            <div className="col-md-3 col-sm-6 eachcard">
              <div className="card cardhover card-block fourimgblock">
                <h4 className="card-title text-right">
                  <i className="material-icons">settings</i>
                </h4>
                <img
                  src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title mt-3 mb-3">Sierra</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and
                  e-commerce solutions.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cardhover card-block fourimgblock">
                <h4 className="card-title text-right">
                  <i className="material-icons">settings</i>
                </h4>
                <img
                  src="https://static.pexels.com/photos/7357/startup-photos.jpg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web .
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cardhover card-block fourimgblock">
                <h4 className="card-title text-right">
                  <i className="material-icons">settings</i>
                </h4>
                <img
                  src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and
                  e-commerce solutions.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="card cardhover card-block fourimgblock">
                <h4 className="card-title text-right">
                  <i className="material-icons">settings</i>
                </h4>
                <img
                  src="https://static.pexels.com/photos/7357/startup-photos.jpg"
                  alt="Photo of sunset"
                />
                <h5 className="card-title  mt-3 mb-3">ProVyuh</h5>
                <p className="card-text">
                  This is a company that builds websites, web apps and
                  e-commerce solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hover images End */}

      <section class="newsec zigzagSec">
        <div class="zigzagSecPanel zigzagSecLayer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 wow fadeInRight">
                <div class="zigzagPic zigzagPicWhatsappInner">
                  <img src="../../images/review3.jpeg" alt="waliner-notification-campaign" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="zigzagContent zigzagContentInner">
                  <h3>Scale Up Business Communication with Automated WhatsApp Campaigns:</h3>
                  <ul>
                    <li><span>Enhance brand loyalty and amplify sales through one-time or recurring WhatsApp
                      Notification Campaigns.</span></li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel zigzagSecLayer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 wow fadeInLeft">
                <div class="zigzagPic zigzagPicWhatsappInner">
                  <img src="../../images/review3.jpeg" alt="waliner-notification-campaign" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="zigzagContent zigzagContentInner">
                  <h3>Elevate Conversations to Transactions:</h3>
                  <ul>
                    <li><span>Distribute Product Catalogs seamlessly to thousands of customers via WhatsApp
                      Catalog Messages</span></li>
                    <li><span>Regain potential sales by sending back-in-stock alerts on WhatsApp</span></li>
                    <li><span>Retrieve abandoned carts through automated reminders on WhatsApp, minimizing
                      lost opportunities</span> </li>
                    <li><span>Provide personalized and timely alerts to keep customers informed about new
                      offers</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel zigzagSecLayer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 wow fadeInRight">
                <div class="zigzagPic zigzagPicWhatsappInner">
                  <img src="../../images/review3.jpeg" alt="waliner-notification-campaign" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="zigzagContent zigzagContentInner">
                  <h3>Captivate Customers with Interactive Notifications</h3>
                  <ul>
                    <li><span>Amplify campaign effectiveness by incorporating rich media elements such as
                      images, videos, PDFs, and more</span></li>
                    <li><span>Utilize interactive components like Call-to-Action (CTA) and Quick Reply
                      buttons to effectively engage customers</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel zigzagSecLayer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 wow fadeInLeft">
                <div class="zigzagPic zigzagPicWhatsappInner">
                  <img src="../../images/review3.jpeg" alt="waliner-notification-campaign" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="zigzagContent zigzagContentInner">
                  <h3>Deliver Unique Updates with Regularity</h3>
                  <ul>
                    <li><span>Keep customers in the loop by sending notifications regarding orders,
                      payments, and shipping updates, using pre-approved templates</span></li>
                    <li><span>Enhance the security of Cash on Delivery (COD) orders by initiating an
                      additional confirmation round via WhatsApp, ensuring authenticity</span> </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel zigzagSecLayer">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 wow fadeInRight">
                <div class="zigzagPic zigzagPicWhatsappInner">
                  <img src="../../images/review3.jpeg" alt="waliner-notification-campaign" />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="zigzagContent zigzagContentInner">
                  <h3>Track Your Campaign's Impact</h3>
                  <ul>
                    <li><span>Stay updated on crucial campaign metrics such as Sent, Delivered, Read, and
                      Replied messages</span></li>
                    <li><span>Utilize these performance insights to build targeted campaign audiences,
                      optimizing your outreach strategy</span> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel whywaliner">
          <div class="container">
            <div class="heading wow fadeInUp">
              <h2>Elevate Customer Interactions with waliner.io and WhatsApp</h2>
              <p>Experience the power of waliner.io and WhatsApp to transform your customer <br /> interactions into
                meaningful engagements</p>
            </div>
            <div class="whywalinerBoxes">
              <div class="row justify-content-center">
                <div class="col-md-4 col-sm-6 col-12 wow fadeInLeft">
                  <div class="zigzagContent">
                    <h3>Simplified Conversations</h3>
                    <p>Seamlessly connect with customers through the widely used platform of WhatsApp</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="zigzagContent">
                    <h3>Personalized Engagement </h3>
                    <p>Deliver tailored experiences and communication to foster stronger relationships</p>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInRight">
                  <div class="zigzagContent">
                    <h3>Enhanced Reach </h3>
                    <p>Leverage WhatsApp's extensive user base to expand your brand's presence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="zigzagSecPanel featuresSec">
          <div class="container">
            <div class="heading wow fadeInUp">
              <h2>Power-packed Features</h2>
              <p>Our new software comes with power-packed features, including real-time analytics, customizable dashboards.</p>
            </div>
            <div class="whywalinerBoxes featuresBoxes">
              <div class="row">
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-reply" aria-hidden="true"></i></span>
                    <div class="card-body">
                      <h5 class="card-title">Auto-Replies</h5>
                      <p class="card-text">Incorporate your product catalog into automated responses for
                        quick customer access</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-whatsapp" aria-hidden="true"></i>
                    </span>
                    <div class="card-body">
                      <h5 class="card-title">WhatsApp Widget on Website</h5>
                      <p class="card-text">Integrate a WhatsApp widget onto your website, offering
                        customers a convenient platform to ask questions and seek assistance</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-inbox" aria-hidden="true"></i></span>
                    <div class="card-body">
                      <h5 class="card-title">Collaborative Team Inbox</h5>
                      <p class="card-text">Employ a collaborative team inbox to effectively manage and
                        promptly address customer queries, ensuring efficient issue resolution</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-clock-o" aria-hidden="true"></i></span>
                    <div class="card-body">
                      <h5 class="card-title">Track Response Times</h5>
                      <p class="card-text">Monitor how swiftly your agents engage with customers'
                        inquiries</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-asterisk" aria-hidden="true"></i></span>
                    <div class="card-body">
                      <h5 class="card-title">Measure Resolution Times</h5>
                      <p class="card-text">Evaluate how efficiently issues are resolved, aiming for prompt
                        solutions</p>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-sm-6 col-12 wow fadeInUp">
                  <div class="card text-center">
                    <span class="icon"><i class="fa fa-users" aria-hidden="true"></i></span>
                    <div class="card-body">
                      <h5 class="card-title">Enhance Customer Experience</h5>
                      <p class="card-text">Utilize insights to refine your support process, ensuring a
                        better customer journey</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       {/* Review section start */}
       <section>
        <div className="row reviewdiv">
          <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
            <h1
              className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg reviewtitle"
              contentEditablee="false"
            >
              Read Customer Reviews
            </h1>
          </div>
          <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm reviewcard">
            <li>
              <img
                src="../../images/review1.jpg"
                className="wpx-100 img-round mgb-20 reviewimage"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contentEditablee="false">
                " It was a very good experience for me. We matched on Shadi.com
                and hit it off with first meeting itself. The compatibility with
                the partner finding the like-minded
                matches is quite crucial.
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contentEditablee="false"
              >
                Prerna and Neraj
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contentEditablee="false"
              >
                Business Woman - New York
              </small>
            </li>
            <li>
              <img
                src="../../images/review2.jpeg"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contentEditablee="false">
                " I actually lost hope of all matrimonial sites after so many
                fake profiles and people only looking for hookups but then i met
                Shubham and he was all what i looked for. Thank you. "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contentEditablee="false"
              >
                Shreya and Subham
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contentEditablee="false"
              >
                Recording Artist - Los Angeles
              </small>
            </li>
            <li>
              <img
                src="../../images/review3.jpeg"
                className="wpx-100 img-round mgb-20"
                title=""
                alt=""
                data-edit="false"
                data-editor="field"
                data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
              />
              <p className="fs-110 font-cond-l" contentEditablee="false">
                " We met through shaadi.com an it took a long time to say a Yes
                ,in between there was a No as well but we were estine to be
                together an now I feel I am the luckiest person to have him . "
              </p>
              <h5
                className="font-cond mgb-5 fg-text-d fs-130"
                contentEditablee="false"
              >
                Jitesh and Rashmi
              </h5>
              <small
                className="font-cond case-u lts-sm fs-80 fg-text-l"
                contentEditablee="false"
              >
                Fund Manager - Chicago
              </small>
            </li>
          </ul>
        </div>
      </section>

      {/* Review section End */}

    </>
  );
}
export default Home;
