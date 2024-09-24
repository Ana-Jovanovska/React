import { useContext } from "react";
import { Item } from "../../models/item.model";
import "./ItemCart.css";
import { ItemListContext } from "../../Contexts/ItemListContext";

interface ItemCartProps {
  item: Item;
}

function ItemCart({ item }: ItemCartProps) {
  const {
    removeQuntityItem,
    addQuntityItem,
    removeIsPackedItem,
    isPackedItem,
  } = useContext(ItemListContext);

  return (
    <div className="ItemCart">
      <h3 className="text">{item.description}</h3>
      <div className="info">
        <p>Quantity:</p>
        <button
          onClick={() => {
            removeQuntityItem(item);
          }}
        >
          ➖
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            addQuntityItem(item);
          }}
        >
          ➕
        </button>
      </div>

      <div className="isPacked-info">
        <span>Packed:</span>
        <button
          className="button"
          onClick={() => {
            if (item.isPacked) {
              removeIsPackedItem(item);
            } else {
              isPackedItem(item);
            }
          }}
        >
          {item.isPacked ? "✅" : "❌"}
        </button>
      </div>
    </div>
  );
}
export default ItemCart;
