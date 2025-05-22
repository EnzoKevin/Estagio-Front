"use client";
import * as S from "./styles";
import Post from "@/pages/components/post";

export default function Articles() {
  const save = [
    {
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
    },
    {
      id: 1,
      user_data: {
        user_id: 1,
        user_name: "john doe",
      },
      title:
        "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
      content:
        "TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...",
      date: "21/05/2025",
    },
    {
      id: 2,
      user_data: {
        user_id: 2,
        user_name: "john doe",
      },
      title:
        "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
      content:
        "TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...",
      date: "21/05/2025",
    },
    {
      id: 3,
      user_data: {
        user_id: 3,
        user_name: "john doe",
      },
      title:
        "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
      content:
        "TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...",
      date: "21/05/2025",
    },
  ];

  return (
    <S.Container>
      {save.map((save) => {
        return (
          <S.SubContainer key={save.id}>
            <Post key={save.id} content={save} Readable={true} width="369px" />;
          </S.SubContainer>
        );
      })}
    </S.Container>
  );
}
