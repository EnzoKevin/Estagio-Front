import styled from "styled-components";

interface buttons {
  $color?: string;
  $size?: string;
}

export const Button = styled.button<buttons>`
  width: ${({ $size }) => ($size ? $size : "fit-content")};

  color: #fff;
  padding: 5px 10px;

  background-color: ${({ $color }) => ($color ? $color : "#000")};
`;
