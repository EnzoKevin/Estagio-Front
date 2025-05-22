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

  const save = {
    id: 0,
    user_data: {
      user_id: 0,
      user_name: "john doe",
    },
    title:
      "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
    content:
      "TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...",
    date: "21/05/2025",
  };

  return (
    <S.Container>
      <S.SubContainer>
        <Post content={save} isBtn={true} />
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
