import "./HomePage.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const navigateToList = (gender: string) => {
    navigate(`/listpage/${gender}`);
  };

  return (
    <section className="HomePage">
      <div className="homepage-title">
        <h1>WELCOME TO THE PACKING APP</h1>
        <h2>ARE YOU:</h2>
      </div>
      <div className="button-container">
        <button onClick={() => navigateToList("male")}>👱MALE</button>
        <button onClick={() => navigateToList("female")}>👩FEMALE</button>
      </div>
    </section>
  );
}
export default HomePage;
