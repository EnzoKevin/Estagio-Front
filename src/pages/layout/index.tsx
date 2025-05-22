"use client";
import React from "react";
import Header from "./header";
import * as S from "./styles";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <S.Container>
      <Header />
      {children}
    </S.Container>
  );
}
