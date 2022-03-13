import { useState } from "react";
import Base from "../core/Base";
import businessSave from "./helper";

const Business = () => {
  const [values, setValues] = useState({
    businessName: "",
    gstNo: "",
    address: "",
    error: "",
    message: "",
    loading: false,
  });

  const { businessName, gstNo, address, error, message, loading } = values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    businessSave({ businessName, gstNo, address })
      .then((data) => {
        if (data.error) {
          setValues({
            ...values,
            error: data.error,
            loading: false,
            message: "",
          });
        } else {
          setValues({
            ...values,
            businessName: "",
            gstNo: "",
            address: "",
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
              <label className="text-black">Business Name</label>
              <input
                className="form-control my-1"
                onChange={handleChange("businessName")}
                type="text"
                value={businessName}
              />
            </div>
            <div className="form-group">
              <label className="text-black">GST No</label>
              <input
                className="form-control my-1"
                onChange={handleChange("gstNo")}
                type="text"
                value={gstNo}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Address</label>
              <input
                className="form-control my-1"
                onChange={handleChange("address")}
                type="text"
                value={address}
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
      {errorMessage()}
      {loadingMessage()}
      {successMessage()}
      {detailsForm()}
    </div>
  );
};

export default Business;
