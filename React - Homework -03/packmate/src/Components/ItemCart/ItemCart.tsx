import { Item } from "../../models/item.model";
import "./ItemCart.css";
import {
  addQuntityItem,
  isPacked,
  removeIsPackedItem,
  removeQuntityItem,
} from "../../state/slice/item.slice";
import { useAppDispatch } from "../../utils/hooks";

interface ItemCartProps {
  item: Item;
}

function ItemCart({ item }: ItemCartProps) {
  const dispatch = useAppDispatch();

  return (
    <div className="ItemCart">
      <h3 className="text">{item.description}</h3>
      <div className="info">
        <p>Quantity:</p>
        <button
          onClick={() => {
            dispatch(removeQuntityItem(item));
          }}
        >
          ➖
        </button>
        <p>{item.quantity}</p>
        <button
          onClick={() => {
            dispatch(addQuntityItem(item));
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
            if (!item.isPacked && item.quantity >= 1) {
              dispatch(isPacked(item));
            } else {
              dispatch(removeIsPackedItem(item));
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
