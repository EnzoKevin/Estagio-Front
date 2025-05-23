"use client";
import * as S from "./styles";
import Post from "@/pages/components/post";
import BlackBar from "@/pages/components/blackBar";
import Top from "@/pages/components/tops";
import { home, save } from "@/pages/mocks";

export default function Hero() {
  const mock = home;
  const post = save;

  return (
    <S.Container>
      <S.SubContainer>
        <Post
          content={post[0]}
          isBtn={true}
          width="369px"
          height="224px"
          $hero={true}
        />
        <BlackBar />
      </S.SubContainer>
      <S.Row>
        {mock.map((mock) => {
          return (
            <Top
              key={mock.id}
              id={mock.id}
              Images={mock.Image}
              date={mock.date}
              title={mock.title}
            />
          );
        })}
      </S.Row>
    </S.Container>
  );
}
