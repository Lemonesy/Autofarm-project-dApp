import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import { Context } from "..";
import TokenItem from "./TokenItem";

const TokenList = observer(() => {
  const {token} = useContext(Context)
  return (
<Row className="d-flex">
    {token.tokens.map(token =>
      <TokenItem key={token.id} token={token}/>
      )}

</Row>

  );
});

export default TokenList;