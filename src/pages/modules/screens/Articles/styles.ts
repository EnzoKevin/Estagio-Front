import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  gap: 10px;
  padding: 10px;

  @media screen and (max-width: 1434px) {
    justify-content: center;
  }
`;

export const SubContainer = styled.div`
  flex: 1 1;
  max-width: 369px;
  width: 80%;
  box-sizing: border-box;

  @media screen and (max-width: 960px) {
    max-width: 600px;
  }
`;
