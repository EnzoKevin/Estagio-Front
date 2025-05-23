"use client";

import React, { useState, useRef, ChangeEvent } from "react";
import { Formik, Form, Field } from "formik";
import { FormPostMobile } from "./mobile";
import * as S from "./styles";

export default function FormPost() {
  const [avatar, setAvatar] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [location, setLocation] = useState<string | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (avatar: File | null, preview: string | null) => {
    console.log("Arquivo:", setAvatar(avatar));
    console.log("Preview:", setPreviewUrl(preview));
  };

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
      <FormPostMobile
        propAvatar={avatar}
        propPreview={previewUrl}
        onImageChange={handleImageChange}
      />
      <S.Container>
        {" "}
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
                <S.BtnGroup>
                  <S.Button $red={true}>Cancelar</S.Button>
                  <S.Button $red={false}>Salvar</S.Button>
                </S.BtnGroup>
              </S.Top>
              <S.name>
                <label htmlFor="titulo">Título</label>
                <Field className="title" name="titulo" type="text" />
              </S.name>
              <S.Photo>
                <S.name>
                  <label htmlFor="imagem">Imagem</label>

                  <S.input type="text" defaultValue={location} readOnly />
                  <S.FileButton onClick={handleFileClick}>
                    Selecionar
                  </S.FileButton>
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
                <S.Figure>
                  {previewUrl && (
                    <img
                      src={previewUrl}
                      alt="Preview do avatar"
                      className="NextImage"
                    />
                  )}
                </S.Figure>
              </S.Photo>

              <S.name>
                <label htmlFor="conteudo">Conteúdo</label>
                <Field
                  name="conteudo"
                  as="textarea"
                  className="content"
                  placeholder="Escreva seu artigo"
                />
              </S.name>

              <button type="submit">Salvar</button>
            </Form>
          )}
        </Formik>
      </S.Container>{" "}
    </>
  );
}
