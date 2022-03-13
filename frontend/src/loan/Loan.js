import { useState } from "react";
import Base from "../core/Base";
import loanSave from "./helper";

const Loan = () => {
  const [values, setValues] = useState({
    loanNo: "",
    loanAmount: "",
    intRate: "",
    tenure: "",
    error: "",
    message: "",
    loading: false,
  });

  const { loanNo, loanAmount, intRate, tenure, error, message, loading } =
    values;

  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, error: false, loading: true });
    loanSave({ loanNo, loanAmount, intRate, tenure })
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
            loanNo: "",
            loanAmount: "",
            intRate: "",
            tenure: "",
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
              <label className="text-black">Loan Number</label>
              <input
                className="form-control my-1"
                onChange={handleChange("loanNo")}
                type="text"
                value={loanNo}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Loan Amount</label>
              <input
                className="form-control my-1"
                onChange={handleChange("loanAmount")}
                type="text"
                value={loanAmount}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Interest Rate</label>
              <input
                className="form-control my-1"
                onChange={handleChange("intRate")}
                type="text"
                value={intRate}
              />
            </div>
            <div className="form-group">
              <label className="text-black">Tenure</label>
              <input
                className="form-control my-1"
                onChange={handleChange("tenure")}
                type="date"
                value={tenure}
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

export default Loan;
