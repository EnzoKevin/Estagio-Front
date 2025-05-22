import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  padding: 10px;
  background-color: #000;
  color: #fff;

  max-height: 450px; // limite ajustável
  overflow-y: auto; // permite rolagem se passar do limite

  gap: 12px; // adiciona espaçamento entre elementos
  border-radius: 8px;
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

export const subContainer = styled.div``;

export const H2 = styled.h2`
  font-family: Montserrat;
  font-weight: 600;
  font-size: 14px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
  margin: 0px 0px 5px 0px;
`;

export const P = styled.p`
  font-family: Montserrat;
  font-weight: 400;
  font-size: 12px;
  line-height: 120%;
  letter-spacing: 0px;
  vertical-align: middle;
  overflow: hidden;

  display: -webkit-box;
  -webkit-line-clamp: 3; // mostra no máx. 3 linhas
  -webkit-box-orient: vertical;
`;
