import { Injectable, signal, computed } from '@angular/core';

export type Lang = 'en' | 'pt';

export interface I18nData {
  nav: { about: string; work: string; projects: string; life: string; skills: string; contact: string };
  hero: { portfolio: string; available: string; location: string; currently: string; atCo: string; lede: string; scroll: string; pageOf: string; roles: string[] };
  about: { path: string; title: string; p1: string; p2: string; p3: string; portraitMeta: string[]; facts: [string, string][] };
  interlude: { pre: string; quote: string; sig: string };
  work: { path: string; title: string; hint: string };
  projects: { path: string; title: string; hint: string };
  life: { path: string; title: string; hobbiesLabel: string; academyLabel: string };
  skills: { path: string; title: string; languages: string };
  foot: { pre: string; big: string; meta: string[] };
}

const EN: I18nData = {
  nav: { about: 'About', work: 'Work', projects: 'Projects', life: 'Life', skills: 'Skills', contact: 'Contact' },
  hero: {
    portfolio: 'ruben-severino@11.0.0', available: 'Available for collaboration', location: 'Sintra · Lisbon, PT',
    currently: 'Currently', atCo: 'at', lede: 'Building <em>quietly resilient</em> front&#8209;end systems &mdash; and learning to lead the people who build them.',
    scroll: 'Scroll to explore', pageOf: '01 / 04',
    roles: ['Lead Developer', 'Angular Specialist', 'Front-End Architect', 'Team Player', 'Code Reviewer'],
  },
  about: {
    path: 'about.md',
    title: 'A decade of front&#8209;end work, mostly in <em>Angular</em>, mostly with teams that ship.',
    p1: "I'm a Front-End Lead Developer based between Sintra and Lisbon. I specialise in Angular and have spent the last decade shipping interfaces inside large engineering teams — most recently seven years at NTT DATA, and now leading the front-end practice at Six-Factor.",
    p2: 'My focus is on coding practices that hold up: components other developers actually want to use, sensible state, and the kind of careful risk assessment that keeps clients out of trouble and engineers out of late-night rollbacks.',
    p3: 'I want to grow into a leader who <em>inspires and supports</em> others. That means I read more pull requests than I write, ask more questions than I answer, and take collaboration seriously.',
    portraitMeta: ['↑ Ruben Severino', 'Sintra, PT  ·  2025'],
    facts: [
      ['Based', 'Sintra · Lisbon, PT'], ['Now', 'Front-End Lead at Six-Factor (since Feb 2025)'],
      ['Before', 'NTT DATA — 7 years'], ['Languages', 'PT (native), EN (pro), ES (basic)'],
      ['Studied', 'IPS — Programação de Computadores'], ['Reach', 'rubenfranciscos@gmail.com'],
    ],
  },
  interlude: {
    pre: '— Off-hours',
    quote: '&ldquo;<em>I genuinely thrive in collaborative environments</em> &mdash; eagerly engaging with others and contributing as an active team member.&rdquo;',
    sig: '↑ R.S., from a self-summary',
  },
  work: { path: 'career.log', title: 'Eleven years of <em>shipping</em> &mdash; one timeline.', hint: '↓ Click a card to reveal the projects, clients & stack.' },
  projects: { path: 'projects/', title: 'Side&nbsp;quests &mdash; what I build when <em>nobody\'s watching</em>.', hint: 'Personal builds, school work & one mobile game still in pocket.' },
  life: { path: 'life.yml', title: 'Where I <em>studied</em>, what I do when I\'m <em>not at the keyboard</em>.', hobbiesLabel: 'Off-screen', academyLabel: 'Academy' },
  skills: { path: 'skills.json', title: 'The toolkit, <em>honestly</em> rated.', languages: 'Languages' },
  foot: { pre: '$ contact --reach', big: 'Let\'s talk.', meta: ['© 2026 Ruben Severino', 'Cacém · Sintra · Lisbon, PT', 'Built in Angular\'s spare time'] },
};

const PT: I18nData = {
  nav: { about: 'Sobre', work: 'Carreira', projects: 'Projetos', life: 'Vida', skills: 'Skills', contact: 'Contacto' },
  hero: {
    portfolio: 'ruben-severino@11.0.0', available: 'Disponível para colaborar', location: 'Sintra · Lisboa, PT',
    currently: 'Atualmente', atCo: 'na', lede: 'Construo sistemas de <em>front&#8209;end resilientes</em> &mdash; e estou a aprender a liderar quem os constrói.',
    scroll: 'Desliza para explorar', pageOf: '01 / 04',
    roles: ['Lead Developer', 'Especialista em Angular', 'Arquiteto Front-End', 'Trabalhador de equipa', 'Revisor de código'],
  },
  about: {
    path: 'about.md',
    title: 'Uma década de front&#8209;end, sobretudo em <em>Angular</em>, sobretudo em equipas que entregam.',
    p1: 'Sou Front-End Lead Developer, entre Sintra e Lisboa. Especializo-me em Angular e passei a última década a entregar interfaces em equipas de engenharia grandes — sete anos na NTT DATA e, agora, a liderar a prática de front-end na Six-Factor.',
    p2: 'O meu foco está em práticas de código que aguentam: componentes que os outros developers querem mesmo usar, estado sensato e o tipo de avaliação de risco que mantém os clientes fora de problemas e os engenheiros fora de rollbacks à meia-noite.',
    p3: 'Quero crescer como um líder que <em>inspira e apoia</em> os outros. Isso significa ler mais pull requests do que as que escrevo, fazer mais perguntas do que respostas e levar a colaboração a sério.',
    portraitMeta: ['↑ Ruben Severino', 'Sintra, PT  ·  2025'],
    facts: [
      ['Localização', 'Sintra · Lisboa, PT'], ['Agora', 'Front-End Lead na Six-Factor (desde Fev 2025)'],
      ['Antes', 'NTT DATA — 7 anos'], ['Idiomas', 'PT (nativo), EN (profissional), ES (básico)'],
      ['Formação', 'IPS — Programação de Computadores'], ['Contacto', 'rubenfranciscos@gmail.com'],
    ],
  },
  interlude: {
    pre: '— Fora do trabalho',
    quote: '&ldquo;<em>Cresço em ambientes colaborativos</em> &mdash; envolvo-me com os outros e contribuo como membro ativo da equipa.&rdquo;',
    sig: '↑ R.S., da auto-descrição',
  },
  work: { path: 'career.log', title: 'Onze anos de <em>entregas</em> &mdash; uma só timeline.', hint: '↓ Clica num cartão para ver os projetos, clientes e stack.' },
  projects: { path: 'projects/', title: 'Side&nbsp;quests &mdash; o que construo quando <em>ninguém está a ver</em>.', hint: 'Projetos pessoais, trabalhos académicos e um jogo de telemóvel ainda em bolso.' },
  life: { path: 'life.yml', title: 'Onde <em>estudei</em> e o que faço quando <em>não estou no teclado</em>.', hobbiesLabel: 'Fora do ecrã', academyLabel: 'Formação' },
  skills: { path: 'skills.json', title: 'A caixa de ferramentas, <em>honestamente</em> avaliada.', languages: 'Idiomas' },
  foot: { pre: '$ contact --reach', big: 'Vamos conversar.', meta: ['© 2026 Ruben Severino', 'Cacém · Sintra · Lisboa, PT', 'Feito nos tempos livres do Angular'] },
};

@Injectable({ providedIn: 'root' })
export class I18nService {
  readonly lang = signal<Lang>('en');
  readonly t = computed<I18nData>(() => this.lang() === 'en' ? EN : PT);

  toggle() { this.lang.update(l => l === 'en' ? 'pt' : 'en'); }
  set(lang: Lang) { this.lang.set(lang); }
}
