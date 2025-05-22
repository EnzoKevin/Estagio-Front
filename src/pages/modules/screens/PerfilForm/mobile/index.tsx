import * as S from "./styles";
import { useState, ChangeEvent, useRef } from "react";

export default function ProfileMobile() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const [nome, setNome] = useState("John");
  const [sobrenome, setSobrenome] = useState("Doe");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setLocation(e.target.files?.[0].name);
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <S.Container>
      <S.top>
        <h1>Perfil</h1>
      </S.top>
      <S.SubContainer>
        <S.Perfil>
          <S.avatar>
            {previewUrl && (
              <img
                src={previewUrl}
                alt="Preview do avatar"
                className="NextImage"
              />
            )}
            <S.name>
              <S.label>Avatar</S.label>
              <S.input
                type="text"
                defaultValue={location}
                readOnly
                onClick={handleFileClick}
              />

              <S.HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </S.name>
          </S.avatar>
          <S.name>
            <S.label> Nome</S.label>
            <S.input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              defaultValue={nome}
            />
          </S.name>
          <S.name>
            <S.label>Sobrenome</S.label>
            <S.input
              type="text"
              onChange={(e) => setSobrenome(e.target.value)}
              defaultValue={sobrenome}
            />
          </S.name>
        </S.Perfil>

        <S.account>
          <S.name>
            <S.label> Email</S.label>
            <S.input
              type="text"
              onChange={(e) => setNome(e.target.value)}
              defaultValue={nome}
            />
          </S.name>
          <S.name>
            <S.label>Senha</S.label>
            <S.input
              type="text"
              onChange={(e) => setSobrenome(e.target.value)}
              defaultValue={sobrenome}
            />
          </S.name>
          <S.name>
            <S.label>Repetir Senha</S.label>
            <S.input
              type="text"
              onChange={(e) => setSobrenome(e.target.value)}
              defaultValue={sobrenome}
            />
          </S.name>
        </S.account>
        <S.Button $red={false}>Salvar</S.Button>
      </S.SubContainer>
    </S.Container>
  );
}
