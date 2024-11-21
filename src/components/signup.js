import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import "../signup.css";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [errorMessages] = useState({});
  const [isSubmitted] = useState(false);
  const [base64Image, setbase64Image] = useState(null);
  const [filesName, setFilesName] = useState("");

  // Start

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    photo: "",
    password: "",
  });

  const [errorFormData, setErrorFormData] = useState({
    name: "",
    email: "",
    phone: "",
    birthdate: "",
    photo: "",
    password: "",
  });

  const handleChange = (e, type) => {
    let tempFormData = { ...formData };
    let errorTempFormData = { ...errorFormData };
    if (type == "name") {
      if (e.target.value != "") {
        tempFormData = { ...tempFormData, name: e.target.value };
        errorTempFormData = { ...errorTempFormData, name: "" };
      } else {
        tempFormData = { ...tempFormData, name: "" };
        errorTempFormData = { ...errorTempFormData, name: "Required field" };
      }
    }

    if (type == "email") {
      if (e.target.value != "") {
        tempFormData = { ...tempFormData, email: e.target.value };
        errorTempFormData = { ...errorTempFormData, email: "" };
      } else {
        tempFormData = { ...tempFormData, email: "" };
        errorTempFormData = { ...errorTempFormData, email: "Required field" };
      }
    }

    if (type === "birthdate") {
      if (e !== "") {
        let inputDate = new Date(e);
        let formatteddate = moment(inputDate).format("DD-MM-YYYY").toString();
        tempFormData = { ...tempFormData, birthdate: e };
        errorTempFormData = { ...errorTempFormData, birthdate: "" };
      } else {
        tempFormData = { ...tempFormData, birthdate: "" };
        errorTempFormData = {
          ...errorTempFormData,
          birthdate: "Required field",
        };
      }
    }

    if (type == "phone") {
      if (e.target.value != "") {
        tempFormData = { ...tempFormData, phone: e.target.value };
        errorTempFormData = { ...errorTempFormData, phone: "" };
      } else {
        tempFormData = { ...tempFormData, phone: "" };
        errorTempFormData = {
          ...errorTempFormData,
          phone: "Required field",
        };
      }
    }

    if (type == "password") {
      if (e.target.value != "") {
        tempFormData = { ...tempFormData, password: e.target.value };
        errorTempFormData = { ...errorTempFormData, password: "" };
      } else {
        tempFormData = { ...tempFormData, password: "" };
        errorTempFormData = {
          ...errorTempFormData,
          password: "Required field",
        };
      }
    }
    setFormData(tempFormData);
    setErrorFormData(errorTempFormData);
  };

  useEffect(() => {
   
  }, [formData, base64Image]);

  const handleSubmitt = (e) => {
    e.preventDefault();
    formData["photo"] = base64Image;
    let formatteddate = moment(formData.birthdate)
      .format("DD-MM-YYYY")
      .toString();

    const newUser = {
      name: formData.name,
      email: formData.email,
      pic: formData.photo,
      username: formData.name,
      password: formData.password,
      phone: formData.phone,
      dob: formatteddate,
      member: "Free",
    };

    // Send a POST request to create a new user
    fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New user created:", data);
        resetFormDataFunction();
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });

    const resetFormDataFunction = () => {
      alert("Successfully user created");
      navigate("/")
      setbase64Image(null);
      setFormData({
        name: "",
        email: "",
        phone: "",
        birthdate: "",
        photo: "",
        password: "",
      });

      setErrorFormData({
        name: "",
        email: "",
        phone: "",
        birthdate: "",
        photo: "",
        password: "",
      });
    };

    const loginUser = {
      password: formData.password,
      email: formData.email,
    };

    fetch("http://localhost:3002/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("New Login created===", data);
      })
      .catch((error) => {
        console.error("Error creating user:", error);
      });
  };

  // End

  class CardProfile extends React.Component {
    state = {
      file: "",
      imagePreviewUrl:
        "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
      name: "",
      status: "",
      active: "edit",
    };

    // photoUpload = (e) => {
    //   e.preventDefault();
    //   const reader = new FileReader();
    //   const file = e.target.files[0];
    //   reader.onloadend = () => {
    //     this.setState({
    //       file: file,
    //       imagePreviewUrl: reader.result,
    //     });
    //   };
    //   reader.readAsDataURL(file);
    // };

    // handleSubmit = (e) => {
    //   e.preventDefault();
    //   let activeP = this.state.active === "edit" ? "profile" : "edit";
    //   this.setState({
    //     active: activeP,
    //   });
    // };

    constructor(props) {
      super(props);
      this.state = {
        base64Image: null,
      };
    }

    handleImageChange = (e) => {
      // e.preventDefault();
      let fileName = e.target.files[0].name;
      setFilesName(fileName);
      const reader = new FileReader();
      const file = e.target.files[0];
      reader.onloadend = () => {
        const base64Data = reader.result;
        setbase64Image(base64Data);
      };
      if (file) {
        reader.readAsDataURL(file);
      }
      console.log("------------------=-", filesName);
    };

    render() {
      return (
        <div>
          {base64Image ? (
            <>
              <img className="imgUpload" src={base64Image} alt="Selected" />
            </>
          ) : (
            <>
              <img
                className="imgUpload"
                src=".././images/man2.png"
                alt="Selected"
                // style={{ maxWidth: "100%", maxHeight: "300px" }}
              />
            </>
          )}

          <input
            className="imgUpload"
            type="file"
            accept="image/*"
            onChange={this.handleImageChange}
          />
        </div>
      );
    }
  }

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <form onSubmit={handleSubmitt}>
      <div className="form-outline">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Name
        </label>
        <br />
        <input
          id="name"
          value={formData.name}
          onChange={(e) => handleChange(e, "name")}
          type="text"
          name="name"
          className="form-control"
          required
        />
      </div>

      <div className="form-outline">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Date of Birth
        </label>
        <br />
        <div className="dob">
          <DatePicker
            id="birthdate"
            selected={formData.birthdate}
            onChange={(e) => handleChange(e, "birthdate")}
            // dateFormat="MM/dd/yyyy"
          />
        </div>
      </div>
      <div className="form-outline">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Phone Number
        </label>
        <br />
        <input
          id="phone"
          value={formData.phone}
          onChange={(e) => handleChange(e, "phone")}
          type="text"
          name="phone"
          className="form-control"
          required
        />
        {renderErrorMessage("pass")}
      </div>
      <div className="form-outline fieldmargin">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Email
        </label>
        <br />
        <input
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e, "email")}
          type="text"
          className="form-control"
          required
        />
      </div>
      <div className="form-outline fieldmargin">
        <label className="form-label passwordlabel" htmlFor="form2Example22">
          Password
        </label>
        <br />
        <input
          id="password"
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e, "password")}
          type="text"
          className="form-control"
          required
        />
      </div>

      <div className="text-center pt-1 pb-1">
        <button className="signupbutton form-control" type="submit">
          Submit
        </button>
      </div>
      <div className=" text-center align-items-center justify-content-center">
        <p className="mb-0 me-2">Already have an account?</p>
        <button
          type="button"
          onClick={() => navigate("/")}
          className="btn btn-outline-danger"
        >
          Login
        </button>
      </div>
    </form>
  );

  return (
    <div className="app">
      <section className="h-100 gradient-form totalbackcolor ">
        <div className="container py-5 h-100 signupcard">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-xl-8 totalcard">
              <div className="cardf rounded-3 text-black">
                <div className="row g-0">
                  <div className="col-lg-6">
                    <div className="card-body  mx-md-4">
                      <div className="text-center">
                        <h4 className="mt-1 pb-1 titlematrimony">
                          SIGN UP <br />
                          <CardProfile />
                        </h4>
                      </div>
                      {isSubmitted ? (
                        <div>User is successfully logged in</div>
                      ) : (
                        renderForm
                      )}
                    </div>
                  </div>
                  <div className="col-lg-6 d-flex  gradient-custom-2">
                    <div className="text-white px-3 py-4 mx-md-4 contenttitle">
                      <div className="text-center">
                        <img
                          src=".././images/logo.png"
                          style={{ width: "35%" }}
                          alt="logo"
                        />
                      </div>
                      <p className="small mb-0">Now</p>
                      <h4 className="mb-4 ">Find your life partner Easy</h4>
                      <p className="small mb-0">and fast.</p>
                      <div className="log-bg">&nbsp;</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Signup;
