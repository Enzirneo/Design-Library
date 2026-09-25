/*
  ============================================================
  CATEGORIAS — os links em si ficam no Supabase (tabela "links").
  Para adicionar/editar/apagar um link: Supabase → Table Editor → links.
  (Linhas com approved = true aparecem no site.)

  Para criar uma categoria nova, adicione uma linha abaixo:
    chave: { label: "Nome", emoji: "🧩", color: "#hex" }
  e use essa "chave" na coluna "category" dos links.
  ============================================================
*/

const CATEGORIES = {
  ui:     { label: "UI / Componentes React", emoji: "🎨", color: "#8b7cff" },
  motion: { label: "Motion e efeitos",       emoji: "✨", color: "#ff8a5c" },
  skills: { label: "Skills p/ Agentes de IA", emoji: "🤖", color: "#4fd8ff" },
};
