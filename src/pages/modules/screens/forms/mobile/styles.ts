import styled from "styled-components";

interface LoD {
  $red: boolean;
}

export const Container = styled.div`
  width: 100%;
  height: fit-content;

  padding: 0px 20px;

  position: absolute;
  visibility: hidden;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 900px) {
    visibility: visible;
    position: relative;
    margin: 0px 0px 100px 0px;
  }
`;

export const Top = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const Photo = styled.div`
  width: 100%;

  display: flex;
  gap: 30px;
`;

export const Figure = styled.figure`
  .NextImage {
    width: 120px;
    height: 100px;
  }
`;

export const name = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 10px 0px 10px 0px;

  .title {
    height: 50px;
    border: 1px solid #9e9e9e;
  }

  .content {
    height: 500px;
    padding: 10px;
    border: 1px solid #9e9e9e;
  }

  .content::placeholder {
    color: #9e9e9e;
  }
`;

export const input = styled.input`
  width: 100%;
  height: 48px;
  min-width: 240px;
  padding: 0px 0px 0px 10px;

  border: 1px solid #9e9e9e;
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

export const Button = styled.button<LoD>`
  width: 100%;
  height: 40px;
  gap: 8px;
  margin-top: 30px;
  padding: 10px 16px;
  border-radius: 8px;

  color: #fff;

  background-color: ${({ $red }) => ($red ? "#FF3B30" : "#18181B")};
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 20px;
`;
