-- Rode isto uma vez no Supabase → SQL Editor.
-- Qualquer pessoa pode ENVIAR um link (fica pendente) e VER apenas os aprovados.
-- Para aprovar: Table Editor → links → marque a coluna "approved" como true.

create table if not exists public.links (
  id          uuid primary key default gen_random_uuid(),
  name        text not null check (char_length(name) between 2 and 80),
  url         text not null check (url ~* '^https?://[^ ]+$' and char_length(url) <= 300),
  category    text not null check (char_length(category) <= 40),
  description text not null check (char_length(description) between 10 and 400),
  tags        text[] not null default '{}' check (cardinality(tags) <= 8),
  approved    boolean not null default false,
  created_at  timestamptz not null default now()
);

create unique index if not exists links_url_unique on public.links (lower(url));

alter table public.links enable row level security;

drop policy if exists "ver aprovados" on public.links;
create policy "ver aprovados" on public.links
  for select to anon using (approved = true);

drop policy if exists "enviar sugestao" on public.links;
create policy "enviar sugestao" on public.links
  for insert to anon with check (approved = false);

grant select, insert on public.links to anon;
