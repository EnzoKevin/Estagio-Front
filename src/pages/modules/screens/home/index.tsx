"use client";
import * as S from "./styles";
import Post from "@/pages/components/post";
import BlackBar from "@/pages/components/blackBar";
import Top from "@/pages/components/tops";
import Mock from "@/pages/assets/images/mock.png";

export default function Hero() {
  const test = [
    {
      id: 1,
      Image: Mock,
      title:
        "5 Gerações de Redes 5G: O Que Esperar da Próxima Revolução da Conectividade",
      date: "22/03/2025",
    },
    {
      id: 2,
      Image: Mock,
      title:
        "5 Gerações de Redes 5G: O Que Esperar da Próxima Revolução da Conectividade",
      date: "22/03/2025",
    },
    {
      id: 3,
      Image: Mock,
      title:
        "5 Gerações de Redes 5G: O Que Esperar da Próxima Revolução da Conectividade",
      date: "22/03/2025",
    },
  ];

  return (
    <S.Container>
      <S.SubContainer>
        <Post />
        <BlackBar />
      </S.SubContainer>
      <S.Row>
        {test.map((test) => {
          return (
            <Top
              key={test.id}
              id={test.id}
              Images={test.Image}
              date={test.date}
              title={test.title}
            />
          );
        })}
      </S.Row>
    </S.Container>
  );
}
