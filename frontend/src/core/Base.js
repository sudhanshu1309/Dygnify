import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./base.css";

const Base = () => {
  return (
    <div>
      <div className="tab">
        <Link to="/" className="tablinks">
          Personal Details
        </Link>
        <Link to="/business" className="tablinks">
          Business Details
        </Link>
        <Link to="loan" className="tablinks">
          Loan Details
        </Link>
      </div>
    </div>
  );
};

export default Base;
