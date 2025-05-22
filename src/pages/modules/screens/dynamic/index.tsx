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
}

export default function PostId({ content, isBtn, Readable }: Post) {
  return (
    <S.Container>
      {" "}
      <S.H1>{content?.title}</S.H1>
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
      </S.User>
      <S.Figure>
        <Image src={Mock} alt="" className="NextImage" />
      </S.Figure>
      <S.subContainer>
        <S.Texts>
          <S.P>{content?.content}</S.P>
        </S.Texts>
      </S.subContainer>
    </S.Container>
  );
}
