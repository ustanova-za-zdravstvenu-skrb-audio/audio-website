# Changelog — audio.hr

Kronološki popis svih promjena na web stranici **Ustanove za zdravstvenu skrb AUDIO** (audio.hr).
**Najnovije je na vrhu.**

> 👤 **Novi agent / developer — pročitaj ovo PRVO.** Ovdje vidiš što je zadnje napravljeno i u kojem je stanju projekt.
>
> ⚠️ **PRAVILO: svaka nova promjena MORA se dopisati ovdje** — kratki opis riječima, pod današnjim datumom, **najnovije na vrhu** — prije ili odmah nakon commita. Ne preskakati.

---

## 2026-09-28
- **Hero slider:** maknuta akcentna crtica iznad naslova (`.hs-text::before`) — djelovala kao „AI" kliše.
- **Naslovnica — „Zašto AUDIO":** maknuta kartica „Pristupačna lokacija" (ostaju 3: Briga za pacijente, Iskusni stručnjaci, Moderan dijagnostički centar).
- **Naslovnica — hero slider:** naslovnica dobila rotirajući hero slider sa 6 usluga (privatna obiteljska medicina, Mounjaro program, specijalističke ambulante, ultrazvučna dijagnostika, kožne promjene, akupunktura) i pravim editorial fotografijama (optimizirane ~100 KB). Auto-izmjena 5 s + strelice/točke, suptilan Ken Burns zoom, postupan ulazak teksta, gumbi „Saznajte više" + „Naručite se". Na mobilnom **split-prikaz** (slika gore u prirodnom kadru + tekst na plavoj podlozi dolje) da se široke slike ne sijeku; slike poravnate desno (3. slika na 70 % da se vide monitori).
- **Naslovnica — pojednostavljena (10 → 6 sekcija):** maknute sekcija „Privatne usluge" i teaseri „O nama", „Ordinacije" i „Tim"; „Zašto AUDIO" skraćen sa 6 na 4 kartice. Ostaje: slider, Usluge, Zašto AUDIO + partneri, Novosti, Brojke, Kontakt. Stranica kraća i fokusiranija (podstranice i dalje dostupne u navigaciji).
- **/usluge — premium redizajn:** uvod skraćen na jednu rečenicu + hero podnaslov; **privatne usluge presložene u konkretan popis** (6 glavnih usluga kao kartice s opisom + odvojena grupa „Dijagnostika i pretrage": UZV, EKG, Holter tlaka, vađenje krvi, fizikalna terapija — „sve u istom danu") umjesto općenitih marketinških kartica; sav sadržaj izveden iz Draginih mailova i starog sadržaja stranice; FAQ dobio novu editorial fotografiju.
- **Anti-spam forme:** dodan „time-trap" (odbacuje slanja brža od 3 s = gotovo sigurno bot), uz postojeći honeypot. Bez CAPTCHA-e, ništa se ne prikuplja, nevidljivo pacijentu, GDPR-čisto. *(Odlučeno protiv Web3Forms+Turnstile i protiv obaveznog polja telefon — nepotrebno / GDPR rizik za trenutni volumen.)*
- **Kontakt forma → `doktor@audio.hr`:** endpoint prebačen (prije `ordinacija@`), FormSubmit aktiviran i testiran (stiže uredno).
- **HTTPS popravljen:** certifikat za audio.hr se danima nije izdao (GitHub je servirao svoj `*.github.io` cert → „Nije sigurno"). Riješeno ponovnim postavljanjem custom domene → izdan Let's Encrypt certifikat + uključen Enforce HTTPS. Stranica sad sigurna na `https://audio.hr`.

## 2026-09-24 — Go-live + veliki dizajn/CMS update
- **audio.hr UŽIVO:** DNS prebačen tako da web ide na GitHub Pages; e-pošta (`@audio.hr`) ostala netaknuta na starom hostingu.
- **Tim:** dodan Antonio Klarić (medicinski tehničar); Drago Paušek i Đurđica Paušek dobili oznaku „sudski vještak".
- **CMS prošireno:** radno vrijeme, adrese, telefoni/e-mailovi te HZZO usluge + FAQ sada su uredivi kroz Pages CMS. Kontakt podaci centralizirani (promjena na jednom mjestu ažurira cijelu stranicu).
- **Pravila privatnosti:** prepisana u točnu, GDPR-usklađenu verziju (AZOP, pravna osnova, obrađivači, rok čuvanja). Obrazac dobio poveznicu na politiku + napomenu da se ne šalju osjetljivi zdravstveni podaci.
- **Footer karte:** custom SVG karte s **točnim ulicama i parkovima** (podaci iz OpenStreetMapa), svijetli editorial stil s imenima najvećih ulica i pinom na adresi.
- **Footer:** redizajn (logo + kratki opis + brze poveznice, akcentna linija, čišće lokacijske kartice).
- **/ordinacije:** editorial premium kartice s mini-kartom na vrhu, simetrične, radno vrijeme uredivo iz CMS-a.
- **Kontakt sekcija:** premium izgled (svijetli band, icon-badgevi, istaknuta forma s akcentom i „glow" fokusom).
- **/usluge:** HZZO usluge posložene u **akordeon** (puno preglednije); kontakt obrazac usklađen s naslovnicom.
- **/tim:** redizajn kartica (velike okrugle slike/inicijali s teal prstenom, centrirano, hover).
- **Mobilni izbornik:** premium full-screen (velika serif tipografija, animacija stavki, hamburger→X, brzi „Nazovite nas", zaključan scroll u pozadini).
- **Prijelazi između stranica:** suptilna animacija (cross-document View Transitions, Chrome+Safari).
- **Navigacija:** redoslijed Usluge · Ordinacije · Novosti · Tim · O nama.
- **Naslovne trake podstranica:** suptilan medicinski uzorak, drugi set ikona po stranici.

## 2026-08 — Postavljanje i početni sadržaj
- Astro + Pages CMS stranica postavljena na GitHub Pages (staging), kasnije prebačena na audio.hr.
- Puni naziv ustanove posvuda (bez navodnika); O nama / Ordinacije / Tim kao zasebne stranice + teaseri na naslovnici.
- Kontakt forma (FormSubmit + honeypot); CMS uređivanje Novosti / Obavijesti / Tim / Usluge; uklonjena stara „Mounjaro" obavijest.
