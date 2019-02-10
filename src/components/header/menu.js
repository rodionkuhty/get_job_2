import React, { Fragment } from "react";
import { useSpring, animated } from "react-spring";
import { ListGroup, ListGroupItem } from "reactstrap";

export default () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <Fragment>
      <animated.div style={props}>
        <ListGroup>
          <ListGroupItem color="success">Cras justo odio</ListGroupItem>
          <ListGroupItem color="info">Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem color="warning">Morbi leo risus</ListGroupItem>
          <ListGroupItem color="danger">Porta ac consectetur ac</ListGroupItem>
        </ListGroup>
      </animated.div>
    </Fragment>
  );
};
