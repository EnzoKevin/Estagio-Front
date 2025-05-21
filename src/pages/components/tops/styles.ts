import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Top = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  gap: 10px;

  align-items: center;
  justify-content: center;

  figure .NextImage {
    width: 177px;
    height: 177px;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 177px;
    height: 177px;
  }
`;

export const h2 = styled.h2`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
  overflow: hidden;
  text-wrap: balance;
`;

export const p = styled.p`
  text-align: end;
  margin-top: 10px;
`;
