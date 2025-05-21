import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 1fr 1fr;
`;

export const SubContainer = styled.div`
  display: flex;

  gap: 20px;
`;

export const Row = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 0px;
`;
