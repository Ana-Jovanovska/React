import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import ItemList from "../../Components/ItemList/ItemList";
import { useContext } from "react";
import { ItemListContext } from "../../Contexts/ItemListContext";
import { useParams } from "react-router-dom";

interface Params {
  gender: string;
}

function ItemListPage() {
  const { gender } = useParams<Params>();

  const { filterItemsByGender } = useContext(ItemListContext);

  const items = filterItemsByGender(gender);

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
        <ItemList items={items} />
        : (
        <ItemList items={items} />)
      </div>

      <Footer />
    </div>
  );
}
export default ItemListPage;
