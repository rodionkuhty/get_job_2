import React, { Fragment } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const items = [
  "Покупка квартир",
  "Аренда квартир",
  "Дома, дачи, коттеджи",
  "Новостройки",
  "Участки",
  "Гаражи, стоянки",
  "Коммерческая недвижимость",
  "Комнаты"
];

const StyledMenu = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #a9a9a9;
  display: flex;
  justify-content: space-around;
`;

const StyledNavLink = styled(NavLink)`
  margin-top: 13px;
  color: black;

  :hover {
    color: green;
    text-decoration: none;
  }
`;

export default () => {
  return (
    <Fragment>
      <StyledMenu>
        {items.map((item, ind) => {
          return (
            <div
              key={item}
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <StyledNavLink style={{}} to={item}>
                {item}
              </StyledNavLink>
            </div>
          );
        })}
      </StyledMenu>
    </Fragment>
  );
};

// color: black;
// float: left;
// text - align: center;
// padding - right: 10px;
// padding - top: 13px;
// margin - left: 70px;
//   : hover {
//     color: green;
// }
