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
  let sum = 0;
  const totalQuantity = (sum: number) => {
    model.map((model) => {
      sum += model.quantity;
    });
    return sum;
  };

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
          <strong>Total items:{model.length}</strong>
        </div>
        <div className="totalQuantity">
          <strong>
            Total quantity:
            {totalQuantity(sum)}
          </strong>
        </div>
        <div className="countOfPackedItems">
          <strong>
            Count of packed items:
            {model.filter((item) => item.isPacked).length}
          </strong>
        </div>
        <div className="countOfUnpackedItems">
          <strong>
            Count of unpacked items:
            {model.filter((item) => !item.isPacked).length}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
