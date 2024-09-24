import "./ItemList.css";
import { Item } from "../../models/item.model";
import ItemCart from "../ItemCart/ItemCart";
import { useAppSelector } from "../../utils/hooks";
import { useParams } from "react-router-dom";

function ItemList() {
  const item: Item[] = useAppSelector((state) => state.item.value);
  const { gender } = useParams();

  let sum = 0;
  const totalQuantity = (sum: number) => {
    item.map((item) => {
      sum += item.quantity;
    });
    return sum;
  };

  return (
    <div className="ItemList">
      <div className="essentials">
        <h2>Essentials:</h2>
        <div className="essentials-item">
          {item
            .filter((item) => item.gender === gender)
            .map(
              (item) =>
                item.category === "essentials" && (
                  <ItemCart key={item.id} item={item} />
                )
            )}
        </div>
      </div>
      <div className="toiletries">
        <h2>Toiletries:</h2>
        <div className="toiletries-item">
          {item
            .filter((item) => item.gender === gender)
            .map(
              (item) =>
                item.category === "toiletries" && (
                  <ItemCart key={item.id} item={item} />
                )
            )}
        </div>
      </div>
      <div className="results-container">
        <div className="results">
          <div className="totalItems">
            <strong>
              Total items:{item.filter((item) => item.gender === gender).length}
            </strong>
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
              {
                item.filter((item) => item.gender === gender && item.isPacked)
                  .length
              }
            </strong>
          </div>
          <div className="countOfUnpackedItems">
            <strong>
              Count of unpacked items:
              {
                item.filter((item) => item.gender === gender && !item.isPacked)
                  .length
              }
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemList;
