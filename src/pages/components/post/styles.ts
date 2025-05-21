import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 1fr;

  gap: 20px;
`;

export const Figure = styled.figure`
  width: 100%;

  .NextImage {
    width: 100%;
    height: 100%;
  }
`;

export const subContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

export const H1 = styled.h1`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 32px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .UserImage {
    width: 40px;
    height: 40px;

    border-radius: 25px;
  }
`;
