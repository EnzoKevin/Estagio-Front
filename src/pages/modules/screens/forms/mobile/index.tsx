"use client";

import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as S from "./styles";

interface bigger {
  onImageChange?: (avatar: File | null, preview: string | null) => void;
  propAvatar?: File | null;
  propPreview?: string | null;
}

export function FormPostMobile({
  onImageChange,
  propAvatar,
  propPreview,
}: bigger) {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setAvatar(propAvatar || null);
    setPreviewUrl(propPreview || null);
  }, [propAvatar, propPreview]);

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const preview = file ? URL.createObjectURL(file) : null;
    setLocation(e.target.files?.[0].name);
    if (file) {
      setAvatar(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
    if (onImageChange) {
      onImageChange(file || null, preview);
    }
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          titulo: "",
          imagem: null as File | null,
          conteudo: "",
        }}
        onSubmit={(values) => {
          const formData = new FormData();
          formData.append("titulo", values.titulo);
          formData.append("conteudo", values.conteudo);
          if (values.imagem) {
            formData.append("imagem", values.imagem); // só anexa se houver imagem
          }

          /* fetch("/api/posts", {
            method: "POST",
            body: formData,
          })
            .then((res) => res.json())
            .then((data) => console.log("Post enviado:", data))
            .catch((err) => console.error("Erro:", err)); */
        }}
      >
        {({ setFieldValue }) => (
          <Form>
            <S.Top>
              <h2>Novo Artigo</h2>
            </S.Top>
            <S.Photo>
              <S.Figure>
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview do avatar"
                    className="NextImage"
                  />
                )}
              </S.Figure>{" "}
              <S.name>
                <label htmlFor="imagem">Banner</label>

                <S.input
                  type="text"
                  defaultValue={location}
                  onClick={handleFileClick}
                  readOnly
                />

                <S.HiddenFileInput
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    handleFileChange(event);
                    const file = event.currentTarget.files?.[0] || null;
                    setFieldValue("imagem", file);
                  }}
                />
              </S.name>
            </S.Photo>

            <S.name>
              <label htmlFor="titulo">Título</label>
              <Field className="title" name="titulo" type="text" />
            </S.name>

            <S.name>
              <label htmlFor="conteudo">Conteúdo</label>
              <Field
                name="conteudo"
                as="textarea"
                className="content"
                placeholder="Escreva seu artigo"
              />
            </S.name>

            <S.Button type="submit" $red={false}>
              Salvar
            </S.Button>
          </Form>
        )}
      </Formik>
    </S.Container>
  );
}
