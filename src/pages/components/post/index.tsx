import Button from "../button";
import * as S from "./styles";
import Image from "next/image";
import Mock from "@/pages/assets/images/mock.png";

export default function Post() {
  const IsBtn = 1;

  return (
    <S.Container>
      <S.Figure>
        <Image src={Mock} alt="" className="NextImage" />
      </S.Figure>
      <S.subContainer>
        <h1>
          Desvendando o JavaScript: Dicas e Técnicas Essenciais para
          Desenvolvedores
        </h1>
        <S.User>
          <Image src={Mock} alt="" className="UserImage" />
          <p>
            por <span>John Doe</span>
          </p>
          {IsBtn ? <Button>Ler Mais</Button> : null}
        </S.User>
      </S.subContainer>
    </S.Container>
  );
}
