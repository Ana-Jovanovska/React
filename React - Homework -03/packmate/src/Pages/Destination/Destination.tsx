import "./Destination.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { useNavigate } from "react-router-dom";

function Destination() {
  const navigate = useNavigate();
  const linkDataArr: LinkData[] = [
    {
      path: "/home",
      text: "HOME",
    },
  ];
  return (
    <div className="Destination">
      <div className="destination-container">
        <Header title="🧳PackMate" linkDataArr={linkDataArr} />
        <h1>Destination</h1>
        <div className="search-destination"></div>
      </div>
      <div className="navigate-btn">
        <button
          onClick={() => {
            navigate("/trip-details");
          }}
        >
          <i className="fa-solid fa-hand-point-right"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default Destination;
