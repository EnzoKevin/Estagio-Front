"use client";

import * as S from "./styles";
import { ChangeEvent, useState, useRef } from "react";
import Image from "next/image";
import Mock from "@/pages/assets/images/mock.png";
import ProfileMobile from "./mobile";

export default function NovoArtigoPage() {
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
    <>
      <ProfileMobile />
      <S.Container>
        <S.top>
          <h1>Editar Perfil</h1>
          <S.BtnGroup>
            <S.Button $red={true}>Cancelar</S.Button>
            <S.Button $red={false}>Salvar</S.Button>
          </S.BtnGroup>
        </S.top>
        <S.SubContainer>
          <S.Perfil>
            <S.name>
              <label>Inserir Avatar</label>
              <S.input type="text" value={location} readOnly />
              <S.FileButton onClick={handleFileClick}>Selecionar</S.FileButton>
              <S.HiddenFileInput
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            </S.name>
            <S.name>
              <label> Nome</label>
              <S.input
                type="text"
                onChange={(e) => setNome(e.target.value)}
                defaultValue={nome}
              />
            </S.name>
            <S.name>
              <label>Sobrenome</label>
              <S.input
                type="text"
                onChange={(e) => setSobrenome(e.target.value)}
                defaultValue={sobrenome}
              />
            </S.name>
          </S.Perfil>
          <S.save>
            <S.Figure>
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Preview do avatar"
                  className="NextImage"
                />
              )}
            </S.Figure>
          </S.save>
        </S.SubContainer>
      </S.Container>
    </>
  );
}
