import { Item } from "../../models/Item.model";
import classes from "./ListCard.module.css";

interface ListCardProps {
  item: Item;
}

function ListCard({ item }: ListCardProps) {
  return (
    <div
      className={`${classes.ListCard} ${
        item.isPacked ? classes["packed"] : ""
      }`}
    >
      <div className={classes.description}>{item.description}</div>
      <p>Quantity: {item.quantity}</p>
      <strong>Packed: {item.isPacked ? "✅" : "❎"}</strong>
    </div>
  );
}
export default ListCard;
