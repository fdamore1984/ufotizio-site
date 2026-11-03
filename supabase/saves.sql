-- Tabella dei salvataggi dei giochi (Supabase, progetto wbxgjxlhxuxrfzpihikq)
-- e regola di sicurezza RLS, com'è nel database di produzione.
-- Non si applica da sola: è la documentazione di ciò che sta su Supabase.
-- Se la regola cambia nel pannello, va cambiata anche qui (e viceversa: si
-- copia da qui nel SQL Editor).
--
-- Colonne usate dal sito (public/account/cloud.js, window.ufotizioCloud):
--   user_id     uuid     l'account (auth.users.id)
--   game        text     il gioco ("ciccio-massacro", "gobelino")
--   name        text     il file del giocatore in user:// (vedi Cloud.files()
--                        nei repo dei giochi)
--   text        text     il contenuto del file (null se cancellato)
--   updated_at  bigint   quando è stato scritto (millisecondi), per tenere
--                        la versione più recente fra browser e account
--   deleted     boolean  file cancellato (resta la riga, così la
--                        cancellazione arriva anche agli altri dispositivi)
--
-- Sicurezza: l'RLS è attiva e c'è una sola regola, per tutte le operazioni.
-- Ognuno legge, scrive, modifica e cancella solo le righe col proprio
-- user_id (qual), e non può scrivere righe con lo user_id di un altro
-- (with check). Per i visitatori senza account auth.uid() è null: non vedono
-- e non scrivono niente. Verificato il 2026-11-03 con la chiave publishable:
-- lettura anonima 0 righe, inserimento anonimo rifiutato, modifica e
-- cancellazione anonime 0 righe.

alter table public.saves enable row level security;

create policy "solo i propri salvataggi" on public.saves
  for all
  to public
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Ritocco facoltativo, non ancora applicato in produzione: stessa regola
-- solo per gli utenti con account e con auth.uid() calcolato una volta per
-- query invece che per ogni riga (consiglio di Supabase per le prestazioni).
--
-- alter policy "solo i propri salvataggi" on public.saves
--   to authenticated
--   using ((select auth.uid()) = user_id)
--   with check ((select auth.uid()) = user_id);
