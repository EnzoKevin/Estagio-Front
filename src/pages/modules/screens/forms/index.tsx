"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import * as S from "./styles";

export default function NewArticle() {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [text, setText] = useState("");
  const [preview, setPreview] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // garante que estamos no cliente
  }, []);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  }

  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [image]);

  function handleSubmit() {
    alert("Artigo salvo!");
  }

  return (
    <S.Container>
      <S.Title>Novo Artigo</S.Title>
      <S.Form>
        <S.Label>Título</S.Label>
        <S.Input
          type="text"
          placeholder="Adicione um título"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <S.Label>Inserir imagem</S.Label>

        {/* Input de texto para mostrar nome da imagem só no cliente */}
        {isClient && (
          <S.Input
            type="text"
            placeholder="Adicione uma imagem"
            value={image?.name || ""}
            readOnly
          />
        )}

        <S.FileInput
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Preview da imagem somente no cliente */}
        {isClient && preview && (
          <S.ImagePreview>
            <Image
              src={preview}
              alt="Preview"
              fill
              unoptimized
              style={{ objectFit: "cover" }}
            />
          </S.ImagePreview>
        )}

        <S.Label>Texto</S.Label>
        <S.TextArea
          placeholder="Escreva seu artigo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <S.Buttons>
          <S.Button $variant="cancel">Cancelar</S.Button>
          <S.Button $variant="save" onClick={handleSubmit}>
            Salvar
          </S.Button>
        </S.Buttons>
      </S.Form>
    </S.Container>
  );
}
