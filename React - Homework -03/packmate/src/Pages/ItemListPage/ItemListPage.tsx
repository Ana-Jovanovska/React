import "./ItemListPage.css";
import { LinkData } from "../../models/core.model";
import Header from "../../Layout/Header/Header";
import Footer from "../../Layout/Footer/Footer";
import ItemList from "../../Components/ItemList/ItemList";

function ItemListPage() {
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

      <Footer />
    </div>
  );
}
export default ItemListPage;
