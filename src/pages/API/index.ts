const API_URL = "http://localhost:3000";

export async function login(email: string, senha: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) throw new Error("Erro ao fazer login");
  return res.json();
}

export async function getMe(token: string) {
  const res = await fetch(`${API_URL}/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Erro ao buscar usuário");
  return res.json();
}

export async function getMyPosts(token: string) {
  const res = await fetch(`${API_URL}/me/posts`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return res.json();
}

export async function createPost(
  token: string,
  titulo: string,
  conteudo: string,
  imagem?: File
) {
  const formData = new FormData();
  formData.append("titulo", titulo);
  formData.append("conteudo", conteudo);
  if (imagem) formData.append("imagem", imagem);

  const res = await fetch(`${API_URL}/me/posts`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  if (!res.ok) throw new Error("Erro ao criar post");
  return res.json();
}

export async function updatePost(
  token: string,
  id: number,
  titulo: string,
  conteudo: string
) {
  const res = await fetch(`${API_URL}/me/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ titulo, conteudo }),
  });
  if (!res.ok) throw new Error("Erro ao atualizar post");
  return res.json();
}

export async function deletePost(token: string, id: number) {
  const res = await fetch(`${API_URL}/me/posts/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Erro ao excluir post");
  return res.json();
}
