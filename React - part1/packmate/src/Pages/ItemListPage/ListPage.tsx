import ListCard from "../../Components/ListCard/ListCard";
import { Item } from "../../models/Item.model";
import "./ListPage.css";

function ListPage() {
  const itemMock: Item[] = [
    {
      id: "1",
      description: "TV",
      quantity: 10,
      isPacked: false,
    },
    {
      id: "1",
      description: "Watch",
      quantity: 7,
      isPacked: true,
    },
    {
      id: "1",
      description: "Radio",
      quantity: 5,
      isPacked: false,
    },
  ];

  return (
    <section className="ListPage">
      <h2>Travel packing list:</h2>
      <div className="list-container">
        {itemMock.map((item, i) => (
          <ListCard key={i} item={item} />
        ))}
      </div>
      <div className="list-details">
        <div>
          <p>Total items: {itemMock.length}</p>
        </div>
        <div>
          <p>
            Packed items:
            {itemMock.filter((item) => item.isPacked === true).length}
          </p>
        </div>
        <div>
          <p>
            Unpacked items:
            {itemMock.filter((item) => item.isPacked === false).length}
          </p>
        </div>
      </div>
    </section>
  );
}
export default ListPage;
