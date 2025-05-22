import styled from "styled-components";

interface Hero {
  width?: string;
  height?: string;
  hero?: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: 100%; //550px

  display: flex;
  flex-direction: column;

  gap: 10px;

  @media screen and (max-width: 800px) {
    min-height: 550px;
    height: auto;
  }
`;

export const Figure = styled.figure<Hero>`
  ${({ width }) => (width ? `min-width: ${width};` : "")};
  ${({ height }) => (height ? `min-height: ${height};` : "")};
  .NextImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media screen and (max-width: 800px) {
    border-radius: 15px;

    ${({ hero }) =>
      hero
        ? `.NextImage {
      width: 500px;
      height: 550px;
      border-radius: 15px;
    }`
        : `.NextImage {
      border-radius: 15px;
    }`}
  }
`;

export const subContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 0px 15px;
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
`;

export const H1 = styled.h1<Hero>`
  font-family: Montserrat;
  font-weight: 500;
  font-size: ${({ width }) => (width ? "32px" : "16px")};
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const P = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  .UserImage {
    width: 40px;
    height: 40px;

    border-radius: 25px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

/* export const h1 = styled.h1`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px ; 32px
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`; */
