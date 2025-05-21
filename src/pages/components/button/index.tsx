import * as S from "./styles";

interface btnProps {
  color?: string;
  size?: string;
  children: React.ReactNode;
}

export default function Button({ color, size, children }: btnProps) {
  return (
    <S.Button $color={color} $size={size}>
      {children}
    </S.Button>
  );
}
