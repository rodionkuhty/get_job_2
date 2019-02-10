import React, { Component } from "react";
import { Route } from "react-router-dom";
import styled from "styled-components";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

const StyledCard = styled.div`
  display: flex;
  justify-content: space-between;
`;

class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h4>Продажа квартив</h4>
        <StyledCard>
          <Card className="col-sm-2 col-md-6 col-lg-12">
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card title</CardTitle>
              <CardSubtitle>Card subtitle</CardSubtitle>
              <CardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </CardText>
              <Button>Button</Button>
            </CardBody>
          </Card>
        </StyledCard>
      </div>
    );
  }
}

export default MainPage;
