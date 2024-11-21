import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBTypography,
} from "mdb-react-ui-kit";

import "../explore.css";
import { Alert } from "bootstrap";
import { Navigate } from "react-router-dom";
import axios from "axios";

function Explore() {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((res) => {
      console.log("========>>", res.data);
      setAdmin(res.data);
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log("--=-=-====", data);
        data = data.slice(0, 3);
        setUsers(data);
      });
    document.getElementById("explore").style.color = "#c82a2a";
  }, []);

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
  };

  const getUserData = (res) => {
    const updatedUsers = [...users, res];
    setUsers(updatedUsers);
  };

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
                src="../../images/b7.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                // src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large"
                src="../../images/b19.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                // src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large"
                src="../../images/b15.jpg"
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
      <section className="search-sec aa">
        <div className="container">
          <form action="#" method="post" noValidate="noValidate">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="Filter names"
                      onChange={handleSearchTextChange}
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <input
                      type="text"
                      className="form-control search-slt"
                      placeholder="Enter Drop City"
                    />
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <select
                      className="form-control search-slt"
                      id="exampleFormControlSelect1"
                    >
                      <option>Bride</option>
                      <option>Groom</option>
                    </select>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-12 p-0">
                    <button type="button" className="ProfileSearchbtn">
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="App exploreback">
        <main className="listOfCards">
          {users.length >= 1 ? (
            <>
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(searchText.toLowerCase())
                )
                .map((user, index) => (
                  <UserCard
                    key={index}
                    name={user.name}
                    dob={user.dob}
                    email={user.email}
                    pic={user.pic}
                    username={user.username}
                    phone={user.phone}
                  />
                ))}
            </>
          ) : (
            <>
              <Skeleton
                width={280}
                height={430}
                style={{
                  borderRadius: "10px",
                  lineHeight: 2,
                  padding: "1rem",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                  marginLeft: "2rem",
                  marginRight: "1.5rem",
                }}
              />
              <Skeleton
                width={280}
                height={430}
                style={{
                  borderRadius: "10px",
                  lineHeight: 2,
                  padding: "1rem",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                  marginLeft: "2rem",
                  marginRight: "1.5rem",
                }}
              />
              <Skeleton
                width={280}
                height={430}
                style={{
                  borderRadius: "10px",
                  lineHeight: 2,
                  padding: "1rem",
                  marginBottom: "2rem",
                  marginTop: "3rem",
                  marginLeft: "2rem",
                  marginRight: "1.5rem",
                }}
              />
            </>
          )}

          <NewUserButton getUserData={getUserData} />
        </main>
      </div>
      {/*<div>
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {admin.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </table>
      </div>*/}
    </>
  );
}

function UserCard({ name, dob, email, pic, username, phone }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      background: "rgb(132, 180, 255)",
    },
  };

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpenPrice, setIsOpenPrice] = React.useState(false);
  const navigate = useNavigate();

  const buyPlansButton = () => {
    navigate("/pricing");
  };

  function openModal() {
    if (phone == 8172012647) {
      setIsOpen(true);
    } else {
      // alert("Choose plan to send message.");
      setIsOpenPrice(true);
    }
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
    setIsOpenPrice(false);
  }

  function sendMessage(e) {
    e.preventDefault();
    alert("Message sent successfully");
    setIsOpen(false);
  }

  return (
    <>
      <section>
        <div className="profilecardmain">
          <MDBContainer className="container py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol className="profilecard" md="12" xl="4">
                <MDBCard
                  className="findusercard"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="text-center maincard">
                    <div className="mt-3 mb-4">
                      <MDBCardImage
                        src={pic == null ? " .././images/man2.png" : pic}
                        alt={name}
                        className="rounded-circle"
                        fluid
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                    <MDBTypography tag="h4">{name}</MDBTypography>
                    <MDBTypography tag="h4">Age- {dob}</MDBTypography>
                    <MDBTypography tag="h4">{phone}</MDBTypography>
                    <MDBCardText className="text-muted mb-4">
                      {email}
                    </MDBCardText>
                    <MDBCardText className="text-muted mb-4">
                      <a href="#!">{username}</a>
                    </MDBCardText>
                    <button className="messagebtn" onClick={openModal}>
                      Message now
                    </button>
                    {/*--------------- Modal Start --------------- */}
                    <Modal
                      isOpen={modalIsOpen}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <div className="modaldiv">
                        <h2
                          ref={(_subtitle) => (subtitle = _subtitle)}
                          style={{ Color: "#424242", fontSize: "20px" }}
                        ></h2>
                        <button
                          className="modalclosebtn"
                          style={{ textAlign: "right" }}
                          onClick={closeModal}
                        >
                          X
                        </button>
                        <form>
                          <input placeholder="Type Message..." />
                          <button onClick={sendMessage}>Send</button>
                        </form>
                      </div>
                    </Modal>

                    <Modal
                      isOpen={modalIsOpenPrice}
                      onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      style={customStyles}
                      contentLabel="Example Modal"
                    >
                      <div className="modaldiv">
                        <h2
                          ref={(_subtitle) => (subtitle = _subtitle)}
                          style={{ Color: "#424242", fontSize: "20px" }}
                        ></h2>
                        <button
                          className="modalclosebtn"
                          style={{ textAlign: "right" }}
                          onClick={closeModal}
                        >
                          X
                        </button>
                        <form>
                          <h3>Choose plan to send message.</h3>
                          <button onClick={buyPlansButton}>Buy</button>
                        </form>
                      </div>
                    </Modal>
                    {/*--------------------- Modal End---------------------- */}
                    <div className="d-flex justify-content-between text-center mt-5 mb-2 cardbottom">
                      <div className="px-3">
                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Followers
                        </MDBCardText>
                      </div>
                      <div>
                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                        <MDBCardText className="small text-muted mb-0">
                          Likes
                        </MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </section>
    </>
  );
}

UserCard.propTypes = {
  name: PropTypes.string.isRequired,
  dob: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  pic: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

function NewUserButton({ getUserData }) {
  const [preIndex, setPreIndex] = useState(3);
  const [postIndex, setPostIndex] = useState(4);
  const [findMatch, setFindMatch] = useState(true);

  useEffect(() => {}, [findMatch]);

  const getNewUser = () => {
    let pre_Index = preIndex;
    let post_Index = postIndex;

    fetch("http://localhost:3001/users")
      .then((response) => response.json())
      .then((data) => {
        // console.log("--=-=-====", data);
        if (data.length > preIndex) {
          data = data.slice(pre_Index, post_Index);
          data = data[0];
          let name = data.name;
          let dob = data.dob;
          let email = data.email;
          let pic = data.pic;
          let username = data.username;
          let phone = data.phone;
          console.log("=====", data);
          getUserData({ name, dob, email, pic, username, phone });
        } else {
          setFindMatch(false);
          console.log("setFindMatch====", findMatch);
        }
      });
    setPostIndex(post_Index + 1);
    setPreIndex(pre_Index + 1);
  };

  return (
    <section className="findMatch">
      {findMatch == true ? (
        <button className="NewUserButton" onClick={getNewUser}>
          <h1 style={{ fontSize: "5rem" }}>?</h1>
          <h2>Get your best match</h2>
          <p
            style={{
              color: "#BDBDBD",
              padding: "10px 0 20px",
              margin: "auto",
              fontSize: "12px",
            }}
          ></p>
        </button>
      ) : (
        <button className="NewUserButton">
          <h1 style={{ fontSize: "5rem" }}>?</h1>
          <h2>No more match</h2>
          <p
            style={{
              color: "#BDBDBD",
              padding: "10px 0 20px",
              margin: "auto",
              fontSize: "12px",
            }}
          ></p>
        </button>
      )}
    </section>
  );
}

NewUserButton.propTypes = {
  getUserData: PropTypes.func.isRequired,
};

export default Explore;
