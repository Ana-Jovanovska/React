import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import { Item } from "../../models/item.model";

interface ItemListPageProps {
  gender: Item;
  data: Item[];
  addQuntityItem: (selectedItem: Item) => void;
  removeQuntityItem: (selectedItem: Item) => void;
  isPackedItem: (selectedItem: Item) => void;
  removeIsPackedItem: (selectedItem: Item) => void;
}

function ItemListPage({
  data,
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
    <div className="ItemPage">
      <Header title="🧳PackMate" linkDataArr={linkDataArr} />

      <Footer />
    </div>
  );
}
export default ItemListPage;
