import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
  return (
    <section className="HomePage">
      <div className="homepage-title">
        <h1>WELCOME TO THE PACKING APP</h1>
        <h2>ARE YOU:</h2>
      </div>
      <div className="button-container">
        <div className="male">
          <Link to="/item-page/male">
            <Button text="MALE" />
          </Link>
        </div>
        <div className="female">
          <Link to="/item-page/female">
            <Button text="FEMALE" />
          </Link>
        </div>
      </div>
    </section>
  );
}
export default HomePage;
