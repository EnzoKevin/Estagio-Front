import * as S from "./styles";

export default function BlackBar() {
  const test: { id: any; title: any; content: any }[] = [
    {
      id: 0,
      title:
        "Inteligência Artificial: O Futuro da Automação e da Transformação Digital",
      content:
        "Neste artigo, exploramos como a inteligência artificial está moldando o futuro dos negócios e da tecno...",
    },
    {
      id: 1,
      title:
        "Inteligência Artificial: O Futuro da Automação e da Transformação Digital",
      content:
        "Neste artigo, exploramos como a inteligência artificial está moldando o futuro dos negócios e da tecno...",
    },
    {
      id: 2,
      title:
        "Inteligência Artificial: O Futuro da Automação e da Transformação Digital",
      content:
        "Neste artigo, exploramos como a inteligência artificial está moldando o futuro dos negócios e da tecno...",
    },
    {
      id: 3,
      title:
        "Inteligência Artificial: O Futuro da Automação e da Transformação Digital",
      content:
        "Neste artigo, exploramos como a inteligência artificial está moldando o futuro dos negócios e da tecno...",
    },
  ];

  return (
    <S.Container>
      <S.H1>New</S.H1>
      {test.map((test) => {
        return (
          <S.subContainer key={test.id}>
            <S.H2>{test.title}</S.H2>
            <S.P>{test.content}</S.P>
          </S.subContainer>
        );
      })}
    </S.Container>
  );
}
