import styled from "styled-components";

export const Container = styled.section`
  max-width: 373px;
  height: 550px;

  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 10px;
  background-color: #000;

  color: #fff;

  overflow-y: scroll;
`;

export const H1 = styled.h1`
  font-family: Irish Grover;
  font-weight: 400;
  font-size: 48px;
  line-height: 120%;
  letter-spacing: 0px;
  text-align: left;
  vertical-align: middle;
`;

export const subContainer = styled.div`
  width: 341;
  height: 80;
`;

export const H2 = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const P = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
  overflow: hidden;
`;
