import Button from "../button";
import * as S from "./styles";
import Image from "next/image";
import Mock from "@/pages/assets/images/mock.png";

interface Post {
  content?: {
    id: any;
    user_data: { user_id: any; user_name: any };
    title: any;
    content: any;
    date: any;
  };
  Readable?: boolean;
  isBtn?: boolean;
  width?: string;
  height?: string;
  $hero?: boolean;
}

export default function Post({
  content,
  isBtn,
  Readable,
  width,
  height,
  $hero,
}: Post) {
  const save = {
    id: 0,
    user_id: 0,
    title:
      "Desvendando o JavaScript: Dicas e Técnicas Essenciais para Desenvolvedores",
    content:
      "TypeScript, uma superconjunto de JavaScript, tem se tornado uma escolha popular entre desenvolvedores para garantir código mais seguro e fácil de manter. Neste artigo, vamos explorar os benefícios da tipagem estática no...",
  };

  return (
    <S.Container>
      <S.Figure width={width} height={height} $hero={$hero}>
        <Image src={Mock} alt="" className="NextImage" />
      </S.Figure>
      <S.subContainer>
        <S.Texts>
          <S.H1 width={width}>{content?.title}</S.H1>

          {Readable ? <S.P>{content?.content}</S.P> : null}
        </S.Texts>
        <S.User>
          <S.UserInfo>
            <Image src={Mock} alt="" className="UserImage" />
            {/* <p>
              por <span>John Doe</span> - <span>25/05/2025</span>
            </p> */}
            <S.P>
              por <span>{content?.user_data.user_name}</span> -{" "}
              <span>{content?.date}</span>
            </S.P>
          </S.UserInfo>
          {isBtn ? <Button>Ler Mais</Button> : null}
        </S.User>
      </S.subContainer>
    </S.Container>
  );
}
