import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 40px 80px;
`;

export const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 800px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #333;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  width: 100px;
  padding: 5px;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
`;

export const TextArea = styled.textarea`
  height: 300px;
  padding: 10px;
  font-size: 14px;
  resize: none;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 10px;
`;

export const Button = styled.button<{ $variant: "cancel" | "save" }>`
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 13px;
  border: none;
  cursor: pointer;

  background-color: ${({ $variant }) =>
    $variant === "cancel" ? "#ff4d4d" : "#000"};
  color: white;
`;

export const ImagePreview = styled.div`
  width: 210px;
  height: 150px;
  border-radius: 4px;
  background-color: #e8ecef;
  overflow: hidden;
  position: relative;
`;
