import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  justify-content: center;
`;

export const SubContainer = styled.div`
  display: flex;

  gap: 20px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Row = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
