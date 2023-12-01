import { Container } from "react-bootstrap";
import { Link, useOutletContext } from "react-router-dom";
export default function HomePage() {
  return (
    <div
      className="dark-theme"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link to={"/code"} style={{ textDecoration: "none", color: "black" }}>
        <button type="button" className="btn btn-warning">
          Share Code
        </button>
      </Link>
    </div>
  );
}
