"use client";
import * as S from "./styles";
import Post from "@/pages/components/post";
import { save } from "@/pages/mocks";

export default function Articles() {
  const mock = save;

  return (
    <S.Container>
      {mock.map((mock) => {
        return (
          <S.SubContainer key={mock.id}>
            <Post key={mock.id} content={mock} Readable={true} width="369px" />;
          </S.SubContainer>
        );
      })}
    </S.Container>
  );
}
