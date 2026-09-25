/*
  ============================================================
  DESIGN LIBRARY — seus links ficam aqui
  ============================================================
  Para adicionar um site, copie um bloco { ... } e edite:

    {
      name: "Nome do site",
      url: "https://site.com/",
      category: "ui",            // uma das chaves de CATEGORIES abaixo
      description: "O que o site faz.",
      tags: ["React", "Animação"], // livre — viram filtros automaticamente
      image: "previews/site.png"   // OPCIONAL — imagem própria de prévia
    },

  Sem "image", a prévia é gerada automaticamente (screenshot do site).

  Para criar uma categoria nova, adicione em CATEGORIES:
    chave: { label: "Nome", emoji: "🧩", color: "#hex" }
  ============================================================
*/

const CATEGORIES = {
  ui:     { label: "UI / Componentes React", emoji: "🎨", color: "#8b7cff" },
  motion: { label: "Motion e efeitos",       emoji: "✨", color: "#ff8a5c" },
};

const LINKS = [
  // 🎨 UI / Componentes React
  {
    name: "SmoothUI",
    url: "https://smoothui.dev/",
    category: "ui",
    description:
      "Biblioteca com 130 componentes React animados, feitos como “drop-in replacement” do shadcn/ui, com Motion, Tailwind, blocks, templates e integração com IA.",
    tags: ["React", "Componentes", "Animação", "Tailwind", "shadcn", "IA"],
  },
  {
    name: "beUI",
    url: "https://beui.dev",
    category: "ui",
    description:
      "Biblioteca open source de componentes animados para React/Next.js, usando Motion + Tailwind. Permite copiar e colar ou instalar via shadcn CLI.",
    tags: ["React", "Componentes", "Animação", "Tailwind", "shadcn", "Open source"],
  },
  {
    name: "reactbites.dev",
    url: "https://reactbites.dev",
    category: "ui",
    description: "Coleção de componentes e snippets para React.",
    tags: ["React", "Componentes", "Snippets"],
  },
  {
    name: "21st.dev",
    url: "https://21st.dev/",
    category: "ui",
    description: "Biblioteca de componentes e recursos de UI para desenvolvimento com IA.",
    tags: ["React", "Componentes", "IA"],
  },
  {
    name: "Forma — Icon Creator",
    url: "https://iconcreator.dev/",
    category: "ui",
    description:
      "Ferramenta para criar e customizar ícones usando Tabler, Lucide, Phosphor, Iconoir e Heroicons, com exportação para SVG ou PNG.",
    tags: ["Ícones", "Ferramenta", "SVG"],
  },
  {
    name: "Design Spells",
    url: "https://designspells.com/",
    category: "ui",
    description:
      "Curadoria de microinterações e detalhes de UI para criar interfaces mais refinadas.",
    tags: ["Inspiração", "Microinterações", "Curadoria"],
  },
  {
    name: "Inspora",
    url: "https://www.inspora.design/",
    category: "ui",
    description: "Referências e inspiração para design de interfaces.",
    tags: ["Inspiração", "Curadoria"],
  },
  {
    name: "Motion Sites",
    url: "https://motionsites.ai/",
    category: "ui",
    description: "Galeria e referências de sites com foco em motion design.",
    tags: ["Inspiração", "Animação", "Galeria"],
  },
  {
    name: "Isocons",
    url: "https://www.isocons.app/",
    category: "ui",
    description: "Biblioteca de ícones isométricos.",
    tags: ["Ícones", "3D"],
  },

  // ✨ Motion e efeitos
  {
    name: "Kinetics — Colorion",
    url: "https://kinetics.colorion.co/",
    category: "motion",
    description: "Efeitos de motion open source, fáceis de copiar e usar.",
    tags: ["Animação", "Efeitos", "Open source"],
  },
  {
    name: "Animated Buttons — Colorion",
    url: "https://animatedbuttons.colorion.co/",
    category: "motion",
    description: "Coleção de botões CSS animados.",
    tags: ["Animação", "CSS", "Botões"],
  },
];
