import * as S from "./styles";
import Mock from "@/pages/assets/images/mock.png";
import Image, { StaticImageData } from "next/image";

interface topProps {
  id?: number;
  Images: string | StaticImageData;
  title?: string;
  date?: string;
}

export default function Top({ id, Images, title, date }: topProps) {
  const test = [
    {
      id: 1,
      Image: Mock,
      title: "mockado",
      date: "22/03/2025",
    },
    {
      id: 2,
      Image: Mock,
      title: "mockado",
      date: "22/03/2025",
    },
    {
      id: 3,
      Image: Mock,
      title: "mockado",
      date: "22/03/2025",
    },
  ];

  return (
    <S.Container>
      <S.Top>
        <figure>
          <Image src={Images} alt="" className="NextImage" />
        </figure>
        <h1>{id}</h1>
      </S.Top>
      <div>
        <S.h2>{title}</S.h2>
        <S.p>{date}</S.p>
      </div>
    </S.Container>
  );
}
