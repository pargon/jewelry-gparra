import { useState } from "react";
import { Card, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

function ItemCount({ quantity, setQuantity, stock, onAdd }) {
  const [finish, setFinish] = useState(false);

  const sum = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      alert(`Stock Max:${stock}`);
    }
  };

  const sub = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addValueCart = () => {
    if (quantity === 0) {
      alert("Must select one");
    } else {
      if (quantity <= stock) {
        setQuantity(quantity);
        setFinish(true);

        onAdd();
      } else {
        alert(`Not Stock Available`);
      }
    }
  };

  return (
    <>
      <Card.Text>Order Quantity: {quantity}</Card.Text>
      <ButtonGroup>
        <Button onClick={sum} variant="secondary">
          +
        </Button>
        <Button onClick={addValueCart} variant="secondary">
          Add Cart
        </Button>
        <Button onClick={sub} variant="secondary">
          -
        </Button>
      </ButtonGroup>
      {finish && (
        <Button className="w-100 mt-2 btn-dark">
          <Link to={"../cart/"} style={{ textDecoration: "none" }}>
            Finish
          </Link>
        </Button>
      )}
    </>
  );
}

export default ItemCount;
