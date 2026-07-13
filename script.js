const translations = {
  en: {
    metaTitle: 'Dmytro Kolida — Solutions & Integration Engineer',
    metaDescription: 'Dmytro Kolida — Solutions & Integration Engineer. Production integrations, process automation, legacy modernization, and reliable systems.',
    ogDescription: 'I turn fragmented business processes and legacy systems into reliable production integrations.',
    skip: 'Skip to content', navExpertise: 'Expertise', navWork: 'Selected work', navAbout: 'About', navContact: 'Contact',
    availability: 'Open to opportunities', portraitAlt: 'Portrait of Dmytro Kolida', location: 'Based near Warsaw, Poland',
    context: 'Engineering + operations + business context', ownership: 'OWNERSHIP: END → END', role: 'Solutions & Integration Engineer',
    heroTitle: 'Systems that<br><span class="text-acid">work in reality.</span>',
    heroDescription: 'I turn fragmented processes and legacy systems into reliable production integrations — connecting applications, data, infrastructure, and business operations.',
    exploreWork: 'Explore selected work', startConversation: 'Start a conversation',
    metricBackend: 'Backend systems', metricProduction: 'Production operations', metricIntegration: 'Integration & data', nineYears: '9 years', metricOwnership: 'E-commerce ownership',
    expertiseEyebrow: '01 / Expertise', expertiseTitle: 'One engineer across the whole system.',
    expertiseIntro: 'From a vague operational need to architecture, implementation, deployment, and incident resolution.',
    expertise1Title: 'Integration engineering', expertise1Text: 'Reliable connections between APIs, databases, files, marketplaces, and systems without a clean public interface.',
    expertise1Item1: 'REST APIs & webhooks', expertise1Item2: 'Data mapping & SQL', expertise1Item3: 'Retries, validation & idempotency',
    expertise2Title: 'Production systems', expertise2Text: 'Hands-on ownership across application code, containers, operating systems, databases, networks, and failures.',
    expertise2Item2: 'Monitoring & troubleshooting', expertise2Item3: 'Deployments, backups & security',
    expertise3Title: 'Automation & modernization', expertise3Text: 'Replacing fragile manual work and legacy constraints with maintainable pipelines and controlled change.',
    expertise3Item1: 'Python process automation', expertise3Item2: 'Legacy PHP modernization', expertise3Item3: 'AI-enabled workflows',
    workEyebrow: '02 / Selected work', workTitle: 'Evidence over buzzwords.',
    workIntro: 'Selected public work and anonymized evidence from private repositories. The summaries show the engineering scope without exposing source code, clients, vendors, or confidential implementation details.',
    case1Kicker: 'Private engineering work · Anonymized', case1Title: 'Multi-platform product catalog synchronization',
    case1Text: 'Built a modular integration that synchronizes product data and media between a commerce platform and an external marketplace, including category and attribute mapping.',
    tagMapping: 'Data mapping', tagAdapters: 'Modular adapters', engineeringEvidence: 'Engineering evidence',
    case1Result: 'Catalog data<br>Media assets<br>Taxonomy mapping', privateNote: 'Repository remains private; summary intentionally omits identifying details.',
    case2Kicker: 'Private integration · Anonymized', case2Title: 'Retail loyalty and digital-wallet integration',
    case2Text: 'Connected a Django application to an external retail system, combining customer and loyalty data with persistence, administration tools, a web interface, and mobile-wallet pass generation.',
    tagWallet: 'Digital wallet', tagAdmin: 'Admin workflows', case2Result: 'External API<br>Application state<br>Wallet passes',
    case3Kicker: 'Private automation · Anonymized', case3Title: 'Public-record data extraction pipeline',
    case3Text: 'Created a Python workflow for collecting records from a public source, structuring the results, and checking exported CSV data for downstream use.',
    tagBrowserAutomation: 'Browser automation', tagValidation: 'Validation', tagExtraction: 'Data extraction', case3Result: 'Source navigation<br>Structured export<br>Data checks',
    case4Kicker: 'Private product work · Anonymized', case4Title: 'Business calculator embedded in a CMS',
    case4Text: 'Developed a custom web plugin that turns domain-specific rules into an interactive calculation flow, with a PHP integration layer and a compiled JavaScript/SCSS interface.',
    tagCmsPlugin: 'CMS plugin', case4Result: 'Business rules<br>Interactive UI<br>CMS integration', publicKicker: 'Hackathon project · Open source',
    publicText: 'A Python project developed in a time-boxed team environment, showing rapid problem framing, prototyping, and delivery.',
    tagPrototyping: 'Rapid prototyping', tagTeam: 'Team delivery', viewGithub: 'View on GitHub',
    awardTitle: 'CoinSwipe — 1st place in the DragonSwap bounty', awardText: 'Recognized for turning an idea into a working technical solution under hackathon constraints.', awardedProject: 'Awarded project',
    warsawMossAwardTitle: 'Warsaw Moss — 3rd place', warsawMossAwardText: 'Awarded at HumanTech Hack 2024 for an innovation-for-good project delivered by the Warsaw Moss team.',
    viewProject: 'View project', viewDiploma: 'View diploma', diplomaAlt: 'HumanTech Hack 2024 third-place diploma for Dmytro Kolida',
    aboutEyebrow: '03 / About', aboutTitle: 'Technical judgment shaped by operating a real business.',
    aboutLead: 'I work where application code, infrastructure, imperfect data, and business reality meet.',
    aboutText1: 'My engineering experience spans Python and PHP applications, APIs, SQL, Linux, Docker, production troubleshooting, and legacy modernization. Nine years of e-commerce ownership taught me to judge technology by operational cost, risk, and outcomes — not novelty.',
    aboutText2: 'I’m at my best when the requirements are ambiguous, several systems have to cooperate, and someone needs to own the result after deployment.',
    howIWork: 'How I work', workProcess: 'Discover → design → deliver → operate', currentFocus: 'Current focus', focusText: 'Reliable cloud integrations & controlled AI automation',
    credentialsEyebrow: '04 / Credentials', credentialsTitle: 'Learning backed by completed work.', credentialsIntro: 'Selected certificates documenting computer-science foundations and participation in intensive engineering events.',
    completionCertificate: 'Completion certificate', attendanceCertificate: 'Attendance certificate', cs50Text: 'Completed ten problem sets, ten labs, and a final project.', hackyeahText: 'Participated in the two-day, 33-hour hackathon and its engineering challenges.',
    viewCertificate: 'View certificate', cs50Alt: 'Harvard CS50x completion certificate for Dmytro Kolida', hackyeahAlt: 'HackYeah 2024 certificate of attendance for Dmytro Kolida',
    toolkitEyebrow: '05 / Toolkit', toolkitTitle: 'Tools in service of outcomes.', toolBuild: 'Build', toolIntegrate: 'Integrate', toolOperate: 'Operate',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logging · Backups', toolData: 'Data', toolDataList: 'PostgreSQL · MySQL · Redis · Validation · Data mapping',
    toolExpanding: 'Expanding', toolBusiness: 'Business', toolBusinessList: 'Discovery · Architecture · E-commerce · Mentoring · Ownership',
    contactEyebrow: '06 / Contact', contactTitle: 'Have a difficult system to connect?', copyEmail: 'Copy email',
    cvSoon: 'CV PDF — coming soon', cvTitle: 'Add the final PDF file to assets/ and update this link',
    footerText: 'Built for clarity, reliability, and the web.', backTop: 'Back to top', emailCopied: 'Email copied',
    openMenu: 'Open menu', closeMenu: 'Close menu', switchLanguage: 'Switch to Polish'
  },
  pl: {
    metaTitle: 'Dmytro Kolida — Inżynier rozwiązań i integracji',
    metaDescription: 'Dmytro Kolida — Inżynier rozwiązań i integracji. Integracje produkcyjne, automatyzacja procesów, modernizacja systemów legacy i niezawodne rozwiązania.',
    ogDescription: 'Zmieniam rozproszone procesy biznesowe i systemy legacy w niezawodne integracje produkcyjne.',
    skip: 'Przejdź do treści', navExpertise: 'Kompetencje', navWork: 'Wybrane realizacje', navAbout: 'O mnie', navContact: 'Kontakt',
    availability: 'Otwarty na nowe możliwości', portraitAlt: 'Portret Dmytra Kolidy', location: 'Okolice Warszawy, Polska',
    context: 'Inżynieria + operacje + kontekst biznesowy', ownership: 'ODPOWIEDZIALNOŚĆ: END TO END', role: 'Inżynier rozwiązań i integracji',
    heroTitle: 'Systemy, które<br><span class="text-acid">działają w praktyce.</span>',
    heroDescription: 'Zmieniam rozproszone procesy i systemy legacy w niezawodne integracje produkcyjne — łącząc aplikacje, dane, infrastrukturę i operacje biznesowe.',
    exploreWork: 'Zobacz wybrane realizacje', startConversation: 'Porozmawiajmy',
    metricBackend: 'Systemy backendowe', metricProduction: 'Utrzymanie produkcji', metricIntegration: 'Integracje i dane', nineYears: '9 lat', metricOwnership: 'Prowadzenie e-commerce',
    expertiseEyebrow: '01 / Kompetencje', expertiseTitle: 'Jeden inżynier, cały system.',
    expertiseIntro: 'Od niejasnej potrzeby operacyjnej po architekturę, implementację, wdrożenie i rozwiązywanie incydentów.',
    expertise1Title: 'Inżynieria integracji', expertise1Text: 'Niezawodne połączenia między API, bazami danych, plikami, marketplace’ami i systemami bez przejrzystego publicznego interfejsu.',
    expertise1Item1: 'REST API i webhooki', expertise1Item2: 'Mapowanie danych i SQL', expertise1Item3: 'Ponowienia, walidacja i idempotencja',
    expertise2Title: 'Systemy produkcyjne', expertise2Text: 'Praktyczna odpowiedzialność za kod aplikacji, kontenery, systemy operacyjne, bazy danych, sieci i awarie.',
    expertise2Item2: 'Monitoring i diagnozowanie problemów', expertise2Item3: 'Wdrożenia, kopie zapasowe i bezpieczeństwo',
    expertise3Title: 'Automatyzacja i modernizacja', expertise3Text: 'Zastępowanie kruchej pracy ręcznej i ograniczeń legacy utrzymywalnymi pipeline’ami oraz kontrolowaną zmianą.',
    expertise3Item1: 'Automatyzacja procesów w Pythonie', expertise3Item2: 'Modernizacja legacy PHP', expertise3Item3: 'Procesy wspierane przez AI',
    workEyebrow: '02 / Wybrane realizacje', workTitle: 'Dowody zamiast modnych haseł.',
    workIntro: 'Wybrane projekty publiczne i zanonimizowane dowody z prywatnych repozytoriów. Opisy pokazują zakres inżynierski bez ujawniania kodu, klientów, dostawców ani poufnych szczegółów implementacji.',
    case1Kicker: 'Prywatny projekt inżynierski · Anonimowy', case1Title: 'Synchronizacja katalogu produktów między platformami',
    case1Text: 'Zbudowałem modułową integrację synchronizującą dane i zdjęcia produktów między platformą e-commerce a zewnętrznym marketplace’em, wraz z mapowaniem kategorii i atrybutów.',
    tagMapping: 'Mapowanie danych', tagAdapters: 'Modułowe adaptery', engineeringEvidence: 'Dowody inżynierskie',
    case1Result: 'Dane katalogowe<br>Materiały graficzne<br>Mapowanie taksonomii', privateNote: 'Repozytorium pozostaje prywatne; opis celowo pomija dane identyfikujące.',
    case2Kicker: 'Prywatna integracja · Anonimowa', case2Title: 'Integracja programu lojalnościowego i portfela cyfrowego',
    case2Text: 'Połączyłem aplikację Django z zewnętrznym systemem sprzedażowym, integrując dane klientów i programu lojalnościowego z warstwą danych, panelem administracyjnym, interfejsem webowym i generowaniem kart do portfela mobilnego.',
    tagWallet: 'Portfel cyfrowy', tagAdmin: 'Procesy administracyjne', case2Result: 'Zewnętrzne API<br>Stan aplikacji<br>Karty mobilne',
    case3Kicker: 'Prywatna automatyzacja · Anonimowa', case3Title: 'Pipeline pozyskiwania danych z rejestrów publicznych',
    case3Text: 'Stworzyłem proces w Pythonie do pobierania rekordów z publicznego źródła, porządkowania wyników i sprawdzania wyeksportowanych danych CSV przed dalszym użyciem.',
    tagBrowserAutomation: 'Automatyzacja przeglądarki', tagValidation: 'Walidacja', tagExtraction: 'Ekstrakcja danych', case3Result: 'Nawigacja po źródle<br>Strukturyzowany eksport<br>Kontrola danych',
    case4Kicker: 'Prywatny produkt · Anonimowy', case4Title: 'Kalkulator biznesowy osadzony w CMS',
    case4Text: 'Opracowałem niestandardową wtyczkę webową, która przekłada reguły domenowe na interaktywny proces obliczeń, z warstwą integracyjną PHP oraz kompilowanym interfejsem JavaScript/SCSS.',
    tagCmsPlugin: 'Wtyczka CMS', case4Result: 'Reguły biznesowe<br>Interaktywny UI<br>Integracja z CMS', publicKicker: 'Projekt hackathonowy · Open source',
    publicText: 'Projekt w Pythonie zrealizowany przez zespół w ograniczonym czasie, pokazujący szybkie definiowanie problemu, prototypowanie i dostarczenie rozwiązania.',
    tagPrototyping: 'Szybkie prototypowanie', tagTeam: 'Praca zespołowa', viewGithub: 'Zobacz na GitHubie',
    awardTitle: 'CoinSwipe — 1. miejsce w bounty DragonSwap', awardText: 'Wyróżnienie za przekształcenie pomysłu w działające rozwiązanie techniczne w warunkach hackathonu.', awardedProject: 'Nagrodzony projekt',
    warsawMossAwardTitle: 'Warsaw Moss — 3. miejsce', warsawMossAwardText: 'Projekt zespołu Warsaw Moss nagrodzony podczas HumanTech Hack 2024 za innowacyjne rozwiązanie służące dobru społecznemu.',
    viewProject: 'Zobacz projekt', viewDiploma: 'Zobacz dyplom', diplomaAlt: 'Dyplom Dmytra Kolidy za 3. miejsce podczas HumanTech Hack 2024',
    aboutEyebrow: '03 / O mnie', aboutTitle: 'Decyzje techniczne oparte na doświadczeniu w prowadzeniu realnego biznesu.',
    aboutLead: 'Pracuję tam, gdzie spotykają się kod aplikacji, infrastruktura, niedoskonałe dane i realia biznesowe.',
    aboutText1: 'Moje doświadczenie inżynierskie obejmuje aplikacje Python i PHP, API, SQL, Linux, Docker, diagnozowanie problemów produkcyjnych oraz modernizację systemów legacy. Dziewięć lat prowadzenia e-commerce nauczyło mnie oceniać technologię przez pryzmat kosztu operacyjnego, ryzyka i efektów — nie nowości.',
    aboutText2: 'Najlepiej działam, gdy wymagania są niejednoznaczne, kilka systemów musi współpracować, a ktoś powinien wziąć odpowiedzialność za rezultat po wdrożeniu.',
    howIWork: 'Jak pracuję', workProcess: 'Analiza → projekt → wdrożenie → utrzymanie', currentFocus: 'Obecny kierunek', focusText: 'Niezawodne integracje chmurowe i kontrolowana automatyzacja AI',
    credentialsEyebrow: '04 / Certyfikaty', credentialsTitle: 'Nauka potwierdzona wykonaną pracą.', credentialsIntro: 'Wybrane certyfikaty dokumentujące podstawy informatyki oraz udział w intensywnych wydarzeniach inżynierskich.',
    completionCertificate: 'Certyfikat ukończenia', attendanceCertificate: 'Certyfikat uczestnictwa', cs50Text: 'Ukończyłem dziesięć zestawów problemów, dziesięć laboratoriów i projekt końcowy.', hackyeahText: 'Uczestniczyłem w dwudniowym, 33-godzinnym hackathonie i jego wyzwaniach inżynierskich.',
    viewCertificate: 'Zobacz certyfikat', cs50Alt: 'Certyfikat ukończenia Harvard CS50x dla Dmytra Kolidy', hackyeahAlt: 'Certyfikat uczestnictwa Dmytra Kolidy w HackYeah 2024',
    toolkitEyebrow: '05 / Narzędzia', toolkitTitle: 'Narzędzia służą rezultatom.', toolBuild: 'Tworzenie', toolIntegrate: 'Integracje', toolOperate: 'Utrzymanie',
    toolOperateList: 'Linux · Docker · Proxmox · CI/CD · Logi · Kopie zapasowe', toolData: 'Dane', toolDataList: 'PostgreSQL · MySQL · Redis · Walidacja · Mapowanie danych',
    toolExpanding: 'Rozwijam', toolBusiness: 'Biznes', toolBusinessList: 'Analiza potrzeb · Architektura · E-commerce · Mentoring · Odpowiedzialność',
    contactEyebrow: '06 / Kontakt', contactTitle: 'Masz trudny system do zintegrowania?', copyEmail: 'Kopiuj e-mail',
    cvSoon: 'CV PDF — wkrótce', cvTitle: 'Dodaj finalny plik PDF do katalogu assets/ i zaktualizuj ten link',
    footerText: 'Zbudowane z myślą o przejrzystości, niezawodności i sieci.', backTop: 'Wróć na górę', emailCopied: 'Adres e-mail skopiowany',
    openMenu: 'Otwórz menu', closeMenu: 'Zamknij menu', switchLanguage: 'Przełącz na język angielski'
  }
};

const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const languageToggle = document.querySelector('#languageToggle');
const copyButton = document.querySelector('#copyEmail');
const toast = document.querySelector('#toast');
let currentLanguage = localStorage.getItem('portfolio-language') || (navigator.language.toLowerCase().startsWith('pl') ? 'pl' : 'en');

function applyLanguage(language) {
  const copy = translations[language] || translations.en;
  currentLanguage = language;
  document.documentElement.lang = language;
  document.title = copy.metaTitle;
  document.querySelector('meta[name="description"]').content = copy.metaDescription;
  document.querySelector('meta[property="og:title"]').content = copy.metaTitle;
  document.querySelector('meta[property="og:description"]').content = copy.ogDescription;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = copy[element.dataset.i18n];
    if (value !== undefined) element.textContent = value;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    const value = copy[element.dataset.i18nHtml];
    if (value !== undefined) element.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-title]').forEach((element) => {
    const value = copy[element.dataset.i18nTitle];
    if (value !== undefined) element.title = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
    const value = copy[element.dataset.i18nAlt];
    if (value !== undefined) element.alt = value;
  });

  languageToggle.querySelector('.language-current').textContent = language.toUpperCase();
  languageToggle.querySelector('.language-next').textContent = language === 'en' ? 'PL' : 'EN';
  languageToggle.setAttribute('aria-label', copy.switchLanguage);
  languageToggle.title = copy.switchLanguage;
  const menuOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-label', menuOpen ? copy.closeMenu : copy.openMenu);
  localStorage.setItem('portfolio-language', language);
}

languageToggle?.addEventListener('click', () => applyLanguage(currentLanguage === 'en' ? 'pl' : 'en'));

menuButton?.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? translations[currentLanguage].openMenu : translations[currentLanguage].closeMenu);
  mobileMenu.classList.toggle('hidden', isOpen);
});

mobileMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', translations[currentLanguage].openMenu);
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

copyButton?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('dmytrokolida@gmail.com');
    toast.classList.add('show');
    window.setTimeout(() => toast.classList.remove('show'), 1800);
  } catch {
    window.location.href = 'mailto:dmytrokolida@gmail.com';
  }
});

document.querySelector('#year').textContent = new Date().getFullYear();
applyLanguage(currentLanguage);
