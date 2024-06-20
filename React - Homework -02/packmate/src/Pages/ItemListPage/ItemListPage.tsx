import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { Item } from "../../models/item.model";
import ItemList from "../../Components/ItemList/ItemList";
import { useState } from "react";
import maleJSON from "../../data/male.json";
import femaleJSON from "../../data/female.json";
import { useParams } from "react-router-dom";

function ItemListPage() {
  const [maleItem, setMaleItems] = useState<Item[]>(maleJSON);
  const [femaleItem, setFemaleItems] = useState<Item[]>(femaleJSON);
  const { gender } = useParams();
  console.log(gender);

  const addQuntityItem = (selectItem: Item) => {
    if (gender === "male") {
      setMaleItems((prevItem) => {
        return prevItem.map((item) => {
          if (item.id === selectItem.id) {
            return { ...item, quantity: item.quantity + 1 };
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
            return { ...item, quantity: item.quantity + 1 };
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
            return { ...item, quantity: item.quantity - 1 };
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
            return { ...item, quantity: item.quantity - 1 };
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
        {gender === "male" ? (
          <ItemList
            model={maleItem}
            isPackedItem={isPackedItem}
            removeIsPackedItem={removeIsPackedItem}
            addQuntityItem={addQuntityItem}
            removeQuntityItem={removeQuntityItem}
          />
        ) : (
          <ItemList
            model={femaleItem}
            isPackedItem={isPackedItem}
            removeIsPackedItem={removeIsPackedItem}
            addQuntityItem={addQuntityItem}
            removeQuntityItem={removeQuntityItem}
          />
        )}
      </div>

      <Footer />
    </div>
  );
}
export default ItemListPage;
