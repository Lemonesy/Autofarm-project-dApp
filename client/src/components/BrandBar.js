import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card, Row } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const {token} = useContext(Context)

  return (
    <Row className="d-flex mt-2">
    {token.brands.map(brand =>
        <Card
            style={{cursor:'pointer'}}
            key={brand.id}
            className="p-3"
            onClick={() => token.setSelectedBrand(brand)}
            border={brand.id === token.selectedBrand.id ? 'danger' : 'light'}
        >
            {brand.name}
        </Card>
    )}
</Row>

  );
});

export default BrandBar; 