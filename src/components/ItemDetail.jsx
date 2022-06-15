import React from "react";
import { Card } from "react-bootstrap";
import ItemsDetail from "../repository/ItemsDetail";

function ItemDetail({ id }) {

  const item = ItemsDetail.getById(id);

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.pictureUrl} />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Card.Text>Price: {item.price}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default ItemDetail;
