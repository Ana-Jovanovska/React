import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";

import Footer from "../../Layout/Footer/Footer";
import ItemList from "../../Components/ItemList/ItemList";
import { useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";

function ItemListPage() {
  const navigate = useNavigate();
  const linkDataArr: LinkData[] = [
    {
      path: "/home",
      text: "HOME",
    },
  ];
  return (
    <div className="ItemListPage">
      <Header title="🧳PackMate" linkDataArr={linkDataArr} />
      <div className="container">
        <ItemList />
      </div>
      <div className="navigate-btn">
        <button
          onClick={() => {
            navigate("/destination");
          }}
        >
          Next
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default ItemListPage;
