import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Top = styled.div`
  display: grid;
  grid-template-columns: 45% 55%;

  align-items: center;
  justify-content: center;

  figure .NextImage {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 /1;
  }

  h1 {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
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
  //@ts-ignore
  text-wrap: balance;
`;

export const p = styled.p`
  text-align: end;
  margin-top: 10px;
`;
