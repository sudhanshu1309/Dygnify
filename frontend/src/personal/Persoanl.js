import { useState } from "react";
import Base from "../core/Base";
import userSave from "./helper";

const Personal = () => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    mobNo: "",
    error: "",
    message: "",
    loading: false,
  });

  const { firstName, lastName, age, mobNo, error, message, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    userSave({ firstName, lastName, age, mobNo })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            loading: false,
          });
        } else {
          setValues({
            ...values,
            firstName: "",
            lastName: "",
            age: "",
            mobNo: "",
            error: "",
            message: data.message,
            loading: false,
          });
        }
      })
      .catch((e) => {
        console.log("Error in Saving");
      });
  };

  const detailsForm = () => {
    return (
      <div className="col-6 mt-5">
        <div className="col md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-black">First Name</label>
              <input
                className="form-control my-1"
                onChange={handleChange("firstName")}
                type="text"
                value={firstName}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Last Name</label>
              <input
                className="form-control my-1"
                onChange={handleChange("lastName")}
                type="text"
                value={lastName}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Age (in years)</label>
              <input
                className="form-control my-1"
                onChange={handleChange("age")}
                type="number"
                value={age}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Mobile Number</label>
              <input
                className="form-control my-1"
                onChange={handleChange("mobNo")}
                type="number"
                value={mobNo}
              />
            </div>
            <button
              onClick={onSubmit}
              className="btn btn-success btn-block rounded my-1"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div className="col-6">
        <div className="col md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: error ? "" : "none" }}
          >
            {error}
          </div>
        </div>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div className="col-6">
        <div className="col md-6 offset-sm-3 text-left">
          <div
            className="alert alert-success"
            style={{ display: message ? "" : "none" }}
          >
            {message}
          </div>
        </div>
      </div>
    );
  };

  const loadingMessage = () => {
    return (
      loading && (
        <div className="col-6">
          <div className="col md-6 offset-sm-3 text-left">
            <div className="alert alert-info">
              <h2>Loading...</h2>
            </div>
          </div>
        </div>
      )
    );
  };

  return (
    <div>
      <Base />
      {loadingMessage()}
      {errorMessage()}
      {successMessage()}
      {detailsForm()}
    </div>
  );
};

export default Personal;
