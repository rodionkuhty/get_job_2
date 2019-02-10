import React from "react";
import { NavLink } from "react-router-dom";

import {
  Navbar,
  NavbarBrand,
  Button,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu
} from "reactstrap";
import styled from "styled-components";
import Menu from "./menu";

import LogoImage from "../img/ecology.png";
import DownArrow from "../img/down-arrow.png";
import UpArrow from "../img/up-arrow.png";

//style NavBar

const StyledNavBar = styled(Navbar)`
  border-bottom: 1px solid #a9a9a9;
`;

const StyledButtonAddAds = styled(Button)`
  background-color: ${props => props.color || "green"};
  margin-right: 20px;
  :hover {
    background-color: darkgreen;
  }
  @media (max-width: 768px) {
    background: palevioletred;
    display: none;
  }
  @media (max-width: 550px) {
    background: palevioletred;
    display: none;
  }
`;

const StyledButtonLogIn = styled(Button)`
  background-color: ${props => props.color || "green"};
  margin-right: 20px;
  :hover {
    background-color: darkgreen;
  }

  @media (max-width: 550px) {
    color: green;
    border: none;
    :hover {
      background-color: coral;
    }
  }
`;

const StyledDropdownDiv = styled.div`
  display: flex;
  float: left;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.state = {
      isOpen: false,
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleDropDown() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <div>
        <StyledNavBar color="light" light expand="md">
          <StyledDropdownDiv>
            <NavbarBrand href="/">
              <img src={LogoImage} alt="main logo" width="35px" height="35px" />
            </NavbarBrand>
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle
                tag="span"
                onClick={this.toggleDropDown}
                data-toggle="dropdown"
                aria-expanded={this.state.dropdownOpen}
              >
                {this.state.dropdownOpen ? (
                  <img
                    src={UpArrow}
                    alt="up arrow"
                    width="10px"
                    height="10px"
                  />
                ) : (
                  <img
                    src={DownArrow}
                    alt="up arrow"
                    width="10px"
                    height="10px"
                  />
                )}
              </DropdownToggle>
              <DropdownMenu>
                <Menu />
              </DropdownMenu>
            </Dropdown>
            <h4 style={{ marginLeft: "10px" }}>Недвижимость</h4>
          </StyledDropdownDiv>

          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/">
                <StyledButtonAddAds>Подать объявление</StyledButtonAddAds>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/login">
                <StyledButtonLogIn color="success" outline>
                  Вход
                </StyledButtonLogIn>
              </NavLink>
            </NavItem>
          </Nav>
        </StyledNavBar>
      </div>
    );
  }
}
