import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const {token} = useContext(Context)
  return (
<ListGroup className="mt-2 ">
 {token.types.map(type =>
  <ListGroup.Item
  active={type.id === token.selectedType.id}
  onClick={() =>token.setSelectedType(type)}
   key={type.id}
   >
    {type.name}
  </ListGroup.Item>
  )}
</ListGroup>

  );
});

export default TypeBar;