import "./Destination.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
function Destination() {
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
        <h1>Destination Page</h1>
        <div className="search-destination"></div>
      </div>
      <Footer />
    </div>
  );
}
export default Destination;
