import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Footer from "../../Layout/Footer/Footer";
import ItemList from "../../Components/ItemList/ItemList";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import { useAppDispatch } from "../../utils/hooks";
import { addNewItem, resetItem, sortItem } from "../../state/slice/item.slice";

import { useState } from "react";

function ItemListPage() {
  const dispatch = useAppDispatch();
  const { gender } = useParams();
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("essentials");
  const [query, setQuery] = useState("");

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
          <input
            type="text"
            placeholder="Please add new item..."
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <select
            className="category-select"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option value="" disabled selected>
              Select the category
            </option>
            <option value="Category One">Essentials</option>
            <option value="Category Two">Toiletries</option>
          </select>
          <button
            className="add-button"
            onClick={() => {
              dispatch(addNewItem({ title, category, gender }));

              setTitle("");
            }}
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
      <div className="sort-group">
        <label>Sort Items:</label>
        <select
          className="sort-select"
          onChange={(query) => {
            setQuery(query.target.value);
          }}
        >
          <option value="title">Title</option>
          <option value="quantity">Quantity</option>
          <option value="isPacked">IsPacked</option>
          <option value="isNotPacked">IsNotPacked</option>
        </select>
        <button
          className="sortBtn"
          onClick={() => {
            dispatch(sortItem(query));
          }}
        >
          Sort
        </button>
        <button
          className="resetBtn"
          onClick={() => {
            dispatch(resetItem());
          }}
        >
          <i className="fa-solid fa-arrows-rotate"></i>
        </button>
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
