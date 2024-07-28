import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { LinkData } from "../../models/core.model";
import "./Summary.css";

function Summary() {
  const linkDataArr: LinkData[] = [
    {
      path: "/home",
      text: "HOME",
    },
  ];
  return (
    <>
      <div className="Summary">
        <Header title="🧳PackMate" linkDataArr={linkDataArr} />
        <div className="summary-container">
          <h1>Summary</h1>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Summary;
