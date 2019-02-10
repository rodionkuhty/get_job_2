import React from "react";
import styled, { css } from "styled-components";
import { Button } from "reactstrap";

const StyledButton = styled(Button)`
  background-color: coral;
  margin-right: 20px;
`;

export default ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
