import "./ItemList.css";
import { Item } from "../../models/item.model";
import ItemCart from "../ItemCart/ItemCart";

interface ItemListPageProps {
  model: Item[];
  addQuntityItem: (selectedItem: Item) => void;
  removeQuntityItem: (selectedItem: Item) => void;
  isPackedItem: (selectedItem: Item) => void;
  removeIsPackedItem: (selectedItem: Item) => void;
}

function ItemList({
  model,
  addQuntityItem,
  removeQuntityItem,
  isPackedItem,
  removeIsPackedItem,
}: ItemListPageProps) {
  return (
    <div className="ItemList">
      <div className="essentials">
        <h2>Essentials:</h2>
        <div className="essentials-item">
          {model.map(
            (item) =>
              item.category === "essentials" && (
                <ItemCart
                  key={item.id}
                  item={item}
                  addQuntityItem={addQuntityItem}
                  removeQuntityItem={removeQuntityItem}
                  isPackedItem={isPackedItem}
                  removeIsPackedItem={removeIsPackedItem}
                />
              )
          )}
        </div>
      </div>
      <div className="toiletries">
        <h2>Toiletries:</h2>
        <div className="toiletries-item">
          {model.map(
            (item) =>
              item.category === "toiletries" && (
                <ItemCart
                  key={item.id}
                  item={item}
                  addQuntityItem={addQuntityItem}
                  removeQuntityItem={removeQuntityItem}
                  isPackedItem={isPackedItem}
                  removeIsPackedItem={removeIsPackedItem}
                />
              )
          )}
        </div>
      </div>
      <div className="Results">
        <div className="totalItems">
          <h3>Total number of items:</h3>
          <p>{model.length}</p>
        </div>
        <div className="totalQuantity">
          <h3>Total quantity of all items:</h3>
        </div>
        <div className="countOfPackedItems">
          <h3>
            Count of packed items:
            {model.filter((item) => item.isPacked).length}
          </h3>
        </div>
        <div className="countOfUnpackedItems">
          <h3>
            Count of unpacked items:
            {model.filter((item) => !item.isPacked).length}
          </h3>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
