import { Item } from "../../models/item.model";
import "./ItemCart.css";

interface ItemCartProps {
  item: Item;
  addQuntityItem: (selectedItem: Item) => void;
  removeQuntityItem: (selectedItem: Item) => void;
  isPackedItem: (selectedItem: Item) => void;
  removeIsPackedItem: (selectedItem: Item) => void;
}

function ItemCart({
  item,
  addQuntityItem,
  removeQuntityItem,
  isPackedItem,
  removeIsPackedItem,
}: ItemCartProps) {
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
