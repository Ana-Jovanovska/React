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
      <div className="addNewItem">
        <div className="input-group">
          <label>Add Items:</label>
          <input type="text" placeholder="Please add new item..." />
          <select id="category-select">
            <option value="" disabled selected>
              Select the category
            </option>
            <option value="Category One">Essentials</option>
            <option value="Category Two">Toiletries</option>
          </select>
          <button className="add-button">Add</button>
        </div>
      </div>
      <div className="sort-group">
        <label>Sort Items:</label>
        <select className="sort-select">
          <option value="title">Title</option>
          <option value="quantity">Quantity</option>
          <option value="isPacked">IsPacked</option>
          <option value="isNotPacked">IsNotPacked</option>
        </select>
        <button className="sortBtn">Sort Items</button>
        <button className="resetBtn">Reset</button>
      </div>
      <div className="container">
        <ItemList />
      </div>
      <div className="navigate-btn">
        <button
          onClick={() => {
            navigate("/destination");
          }}
        >
          <i className="fa-solid fa-hand-point-right"></i>
        </button>
      </div>
      <Footer />
    </div>
  );
}
export default ItemListPage;
