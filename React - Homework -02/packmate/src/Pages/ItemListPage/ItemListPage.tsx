import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { Item } from "../../models/item.model";
import ItemList from "../../Components/ItemList/ItemList";

interface ItemListPageProps {
  gender: string | undefined;
  maleModel: Item[];
  femaleModel: Item[];
  addQuntityItem: (selectedItem: Item) => void;
  removeQuntityItem: (selectedItem: Item) => void;
  isPackedItem: (selectedItem: Item) => void;
  removeIsPackedItem: (selectedItem: Item) => void;
}

function ItemListPage({
  gender,
  maleModel,
  femaleModel,
  addQuntityItem,
  removeQuntityItem,
  isPackedItem,
  removeIsPackedItem,
}: ItemListPageProps) {
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
            model={maleModel}
            isPackedItem={isPackedItem}
            removeIsPackedItem={removeIsPackedItem}
            addQuntityItem={addQuntityItem}
            removeQuntityItem={removeQuntityItem}
          />
        ) : (
          <ItemList
            model={femaleModel}
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
