import React, { Component, Fragment } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import styled from "styled-components";

import GpsLogo from "../img/gps.png";

const StyledFormMainPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const StyledInputLogo = styled(Input)`
  padding-right: 18px;
  background-image: url(${GpsLogo});
  background-repeat: no-repeat;
  background-size: 20px 20px;
  background-position: left center;
  width: 400px;
`;

const StyledDropDown = styled(DropdownToggle)`
  background-color: white;
  color: black;
  margin-left: 10px;
  width: 150px;
  padding-right: 18px;
`;

export default class FormMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <StyledFormMainPage>
        <Form style={{ display: "flex", justifyContent: "space-between" }}>
          <FormGroup>
            <StyledInputLogo
              style={{ textIndent: "17px" }}
              type="text"
              id="exampleEmail"
              placeholder="Город, район, улица"
            />
          </FormGroup>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <StyledDropDown caret>Купить</StyledDropDown>
            <DropdownMenu>
              <DropdownItem>Купить</DropdownItem>
              <DropdownItem>Снять</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Form>
      </StyledFormMainPage>
    );
  }
}
