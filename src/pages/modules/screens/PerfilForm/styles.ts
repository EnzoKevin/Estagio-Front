import styled from "styled-components";

interface LoD {
  $red: boolean;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;

  padding: 0px 50px;

  @media screen and (max-width: 900px) {
    visibility: hidden;
    position: absolute;
  }
`;

export const top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0px 0px 10px 0px;
`;

export const SubContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Perfil = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const file = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
`;

export const name = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0px 0px 0px;
`;

export const save = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button<LoD>`
  width: 100;
  height: 40;
  gap: 8px;
  padding-top: 10px;
  padding-right: 16px;
  padding-bottom: 10px;
  padding-left: 16px;
  border-radius: 8px;

  background-color: ${({ $red }) => ($red ? "#FF3B30" : "#18181B")};
`;

export const label = styled.label`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
`;

export const input = styled.input`
  width: 442px;
  height: 48px;
  min-width: 240px;
  padding: 0px 0px 0px 10px;

  border: 1px solid #9e9e9e;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 100%;

  .NextImage {
    width: 250px;
    height: 300px;
  }
`;

export const HiddenFileInput = styled.input`
  display: none;
`;

export const FileButton = styled.button`
  width: 137px;
  height: 48px;
  top: 81px;
  border-radius: 12px;

  background-color: #007aff;
`;
