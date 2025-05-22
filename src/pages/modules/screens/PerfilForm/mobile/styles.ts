import styled from "styled-components";

interface LoD {
  $red: boolean;
}

export const Container = styled.section`
  height: fit-content;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding: 0px 10px;
  visibility: hidden;
  position: absolute;

  .NextImage {
    width: 72px;
    height: 72px;
    border-radius: 100px;
  }

  @media screen and (max-width: 900px) {
    visibility: visible;
    position: relative;
    margin: 0px 0px 100px 0px;
  }
`;

export const top = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: left;

  margin: 0px 0px 10px 0px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 500px;
  justify-content: center;
  align-items: center;
`;

export const Perfil = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;

  border-bottom: solid 1px #d8d8d8;
`;

export const account = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 20px;
  margin-top: 50px;

  position: relative;

  ::before {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #d8d8d8;
    position: absolute;
    top: -20px;
  }
`;

export const name = styled.div``;

export const avatar = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  position: relative;
`;

export const Button = styled.button<LoD>`
  width: 100%;
  height: 40px;
  gap: 8px;

  margin-top: 20px;
  padding: 10px 16px;
  border-radius: 8px;

  color: #fff;

  background-color: ${({ $red }) => ($red ? "#FF3B30" : "#18181B")};
`;

export const label = styled.label`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 16px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const input = styled.input`
  width: 100%;
  height: 48px;
  min-width: 240px;
  padding-left: 10px;
  border-radius: 10px;
  margin-top: 10px;

  border: 1px solid #9e9e9e;
`;

export const HiddenFileInput = styled.input`
  display: none;
`;
