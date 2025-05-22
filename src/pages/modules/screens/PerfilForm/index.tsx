"use client";

import { ChangeEvent, useState } from "react";
import * as S from "./styles";

export default function PerfilForm() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [nome, setNome] = useState("John");
  const [sobrenome, setSobrenome] = useState("Doe");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  return (
    <S.Container>
      <div>
        <S.Title>Editar Perfil</S.Title>
        <S.Form>
          <S.InputGroup>
            <S.Label>Inserir avatar</S.Label>
            <S.Input type="file" onChange={handleFileChange} />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Nome</S.Label>
            <S.Input
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>Sobrenome</S.Label>
            <S.Input
              value={sobrenome}
              onChange={(e) => setSobrenome(e.target.value)}
              placeholder="Sobrenome"
            />
          </S.InputGroup>

          <S.ButtonGroup>
            <S.Button className="cancel">Cancelar</S.Button>
            <S.Button className="save">Salvar</S.Button>
          </S.ButtonGroup>
        </S.Form>
      </div>

      {previewUrl && (
        <S.AvatarPreview src={previewUrl} alt="Preview do avatar" />
      )}
    </S.Container>
  );
}
