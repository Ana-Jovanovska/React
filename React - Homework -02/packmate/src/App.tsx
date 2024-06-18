import { Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
import ItemListPage from "./Pages/ItemListPage/ItemListPage";
import maleJSON from "./data/male.json";
import femaleJSON from "./data/female.json";
import { useState } from "react";
import { Item } from "./models/item.model";

function App() {
  const [maleItem, setMaleItems] = useState<Item[]>(maleJSON);
  const [femaleItem, setFemaleItems] = useState<Item[]>(femaleJSON);
  const { gender } = useParams();

  const addQuntityItem = (selectItem: Item) => {
    if (gender === "male") {
      setMaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectItem.id) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectItem.id) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  const removeQuntityItem = (selectItem: Item) => {
    if (gender === "male") {
      setMaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectItem.id && item.quantity !== 0) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectItem.id && item.quantity !== 0) {
            item.quantity++;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  const isPackedItem = (selectedItem: Item) => {
    if (gender === "male") {
      setMaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = true;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = true;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  const removeIsPackedItem = (selectedItem: Item) => {
    if (gender === "male") {
      setMaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = false;
            return item;
          } else {
            return item;
          }
        });
      });
    }
    if (gender === "female") {
      setFemaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectedItem.id) {
            item.isPacked = false;
            return item;
          } else {
            return item;
          }
        });
      });
    }
  };

  return (
    <section className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item-page/:gender" element={<ItemListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </section>
  );
}
export default App;
