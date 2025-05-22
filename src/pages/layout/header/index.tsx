import { Icon } from "@/pages/assets/icons";
import * as S from "./styles";
import Link from "next/link";
import Button from "../../components/button";

export default function Header() {
  const UserOn = 0;
  return (
    <S.Header>
      <S.Icon>
        <Icon />
      </S.Icon>
      <S.Navigation>
        <Link href={"/"}>Home</Link>

        <Link href={"/Artigos"}>Artigos</Link>
        {UserOn ? null : (
          <>
            | <Link href={"/login"}>Login</Link>
            <Button>
              <Link href={"/register"}>Registrar</Link>
            </Button>
          </>
        )}
      </S.Navigation>
    </S.Header>
  );
}
