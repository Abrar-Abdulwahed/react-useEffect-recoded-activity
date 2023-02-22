import "./styles.css";

export default function ShoppingList({ dogsList = [] }) {
  return (
    <div className="shopping-cart">
      <h3 style={{ textAlign: "center" }}>
        Cute Dogs{" "}
        <span role="img" aria-label="">
          🐶
        </span>
      </h3>

      {dogsList.map((dog, index) => (
        <img src={dog} alt="" key={index} />
      ))}
    </div>
  );
}
