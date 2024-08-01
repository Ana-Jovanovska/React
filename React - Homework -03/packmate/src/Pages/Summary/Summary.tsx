import Footer from "../../Layout/Footer/Footer";
import Header from "../../Layout/Header/Header";
import { LinkData } from "../../models/core.model";
import { useAppSelector } from "../../utils/hooks";
import "./Summary.css";

function Summary() {
  const item = useAppSelector((state) => state.item.value);
  const tripDetailsPage = useAppSelector((state) => state.tripDetails.value);

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
        <div className="itemPage">
          <h2>Packed items list:</h2>
          <div className="itemPage_container">
            {item
              .filter((item) => item.isPacked)
              .map((item, i) => (
                <div className="summery-item-div" key={i}>
                  <strong>
                    Item:{item.description} {<div></div>}
                  </strong>
                  <p>Quntity:{item.quantity}</p>
                </div>
              ))}
          </div>
        </div>
        <div className="tripDetailsPage">
          <h2>Trip details:</h2>
          <div className="tripDetailsPage_container">
            {tripDetailsPage !== null ? (
              <div className="trip-details-info-div">
                <p>First Name: {tripDetailsPage?.firstName}</p>
                <p>Last Name: {tripDetailsPage?.lastName}</p>
                <p>Date Of Birth: {tripDetailsPage?.dateOfBirth}</p>
                <p>Email: {tripDetailsPage?.email}</p>
                <p>Phone Number: {tripDetailsPage?.phoneNumber}</p>
              </div>
            ) : null}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
export default Summary;
