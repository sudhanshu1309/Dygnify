import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "70px" }}>
      <h1>404</h1>
      <br />
      <h1>Page Not Found!</h1>
      <br />
      <Link
        style={{ height: "30px", fontSize: "2rem", textDecoration: "none" }}
        to="/"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default PageNotFound;
