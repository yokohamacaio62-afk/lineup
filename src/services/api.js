// Acesso a dados separado dos componentes visuais.

const PICSUM_URL = 'https://picsum.photos/v2/list'

// Usuário mockado para a autenticação (não há back-end).
const MOCK_USER = { nome: 'Aluno LineUP', email: 'aluno@lineup.com', senha: 'lineup123' }

/** Login mockado. */
export async function login(email, senha) {
  if (email !== MOCK_USER.email || senha !== MOCK_USER.senha) {
    throw new Error('E-mail ou senha inválidos.')
  }
  return { nome: MOCK_USER.nome, email: MOCK_USER.email }
}

/** Busca as capturas na API pública Picsum Photos. */
export async function getCapturas() {
  const res = await fetch(`${PICSUM_URL}?limit=12`)
  if (!res.ok) throw new Error('Erro ao carregar capturas.')
  const data = await res.json()
  return data.map((foto) => ({
    id: foto.id,
    autor: foto.author,
    imagem: `https://picsum.photos/id/${foto.id}/480/360`,
  }))
}
