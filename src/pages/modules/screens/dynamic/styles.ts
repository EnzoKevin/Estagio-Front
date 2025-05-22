import styled from "styled-components";

interface Readable {
  readable: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: fit-content; //550px

  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const Figure = styled.figure`
  min-width: 369px;
  min-height: 224px;
  .NextImage {
    width: 100%;
    height: 100%;
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

export const H1 = styled.h1`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 36px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const P = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 20px;
  line-height: 130%;
  letter-spacing: 0px;

  white-space: pre-line;
`;

export const User = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 30px;

  border-bottom: 1px solid #09090933;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  .UserImage {
    width: 40px;
    height: 40px;

    border-radius: 25px;
  }
`;

/* export const h1 = styled.h1`
  font-family: Montserrat;
  font-weight: 500;
  font-size: 16px ; 32px
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`; */
