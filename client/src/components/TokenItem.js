import React from "react";
import { Card, Col, Image } from "react-bootstrap";
import tether from "../coin/tether.svg"
import bsw from "../coin/(BSW).svg"
import { useHistory } from "react-router-dom";
import { TOKEN_ROUTE } from "../utils/consts";

const TokenItem = ({token}) => {
const history = useHistory()
  return (
<Col className="mt-3" md={3} onClick={() => history.push(TOKEN_ROUTE + '/' + token.id)}>
<Card style={{width:200, cursor:'pointer'}} border={'light'}>

<div className="d-flex justify-content-center mt-1">
<Image width={75} height={75} src={bsw}/>
  <Image width={50} height={75} src={tether}/>
</div>
<div className="mt-3 d-flex justify-content-between">
  {/* <div>
    Biswap...
  </div> */}
  <div>
    USDT-BSW LP
  </div>
  <div>
    <div>
     APY {token.apy}%
    </div>
  </div>
</div>
<div>
    {token.name}
  </div>
</Card>
</Col>

  );
};

export default TokenItem;