export interface Hobby {
  id: string;
  icon: string;
  label: { en: string; pt: string };
  blurb: { en: string; pt: string };
}

export interface Academy {
  id: string;
  school: string;
  qualification: string;
  course: string;
  period: { en: string; pt: string };
  location: string;
  points: { en: string[]; pt: string[] };
}

export interface PersonalProject {
  id: string;
  name: string | { en: string; pt: string };
  period: { en: string; pt: string };
  type: { en: string; pt: string };
  affiliation?: { en: string; pt: string };
  blurb: { en: string; pt: string };
  stack: string[];
  glyph: string;
}

export const HOBBIES: Hobby[] = [
  { id: 'photography', icon: '◉', label: { en: 'Photography', pt: 'Fotografia' }, blurb: { en: 'Slow looking. Mostly buildings, light, and the occasional dog.', pt: 'Olhar devagar. Sobretudo edifícios, luz e algum cão pelo meio.' } },
  { id: 'cinema', icon: '▷', label: { en: 'Cinema', pt: 'Cinema' }, blurb: { en: 'Long-form storytelling, room-temperature popcorn, end credits stayed for.', pt: 'Narrativas longas, pipocas à temperatura ambiente, créditos finais até ao fim.' } },
  { id: 'cooking', icon: '✿', label: { en: 'Cooking', pt: 'Cozinhar' }, blurb: { en: 'Slow weekends, more salt than the recipe says, learning by tasting.', pt: 'Fins-de-semana lentos, mais sal do que a receita pede, aprender a provar.' } },
  { id: 'travel', icon: '✈', label: { en: 'Travel', pt: 'Viagens' }, blurb: { en: 'Map-led wandering and cities walked end-to-end on foot.', pt: 'Vagueio guiado pelo mapa e cidades atravessadas a pé de uma ponta à outra.' } },
];

export const ACADEMY: Academy[] = [
  {
    id: 'ips', school: 'Instituto Politécnico de Santarém',
    qualification: 'TESP — Professional Certificate Level 5', course: 'Programação de Computadores',
    period: { en: 'September 2016 — March 2018', pt: 'Setembro 2016 — Março 2018' }, location: 'Santarém, PT',
    points: {
      en: ['General Education: English, Portuguese & Mathematics.', 'Technical: Programming for the Web, Mobile Devices, Databases.', 'Multimedia Product Development.'],
      pt: ['Formação geral: Inglês, Português e Matemática.', 'Componente técnica: Programação para Web, Mobile, Bases de Dados.', 'Desenvolvimento de Produtos Multimédia.'],
    },
  },
  {
    id: 'ferreira-dias', school: 'Escola Secundária Ferreira Dias',
    qualification: 'Professional Certificate Level 4 — 12.º ano', course: 'Gestão e Programação de Sistemas Informáticos',
    period: { en: 'Secondary education', pt: 'Ensino secundário' }, location: 'Cacém, PT',
    points: {
      en: ['Networking and operating systems.', 'Software development with planning component.', 'Foundational hardware exposure.'],
      pt: ['Redes e sistemas operativos.', 'Desenvolvimento de software com componente de planeamento.', 'Introdução a hardware.'],
    },
  },
];

export const PERSONAL_PROJECTS: PersonalProject[] = [
  { id: 'clicker-maker', name: 'Clicker Maker', period: { en: 'Sep 2015 — Present', pt: 'Set 2015 — Atualidade' }, type: { en: 'Mobile game', pt: 'Jogo mobile' }, blurb: { en: 'A long-running personal mobile game project — a clicker / idle game built and tweaked over many years. Still in pocket.', pt: 'Projeto pessoal de longa data — um clicker/idle game para mobile, construído e refinado ao longo de muitos anos. Continua em bolso.' }, stack: ['Mobile', 'Game Loop'], glyph: '▶' },
  { id: 'parkview', name: 'ParkView', period: { en: 'Sep 2014 — Present', pt: 'Set 2014 — Atualidade' }, type: { en: 'Web application', pt: 'Aplicação web' }, affiliation: { en: 'Escola Secundária Ferreira Dias', pt: 'Escola Secundária Ferreira Dias' }, blurb: { en: 'An application that visualises available spaces in car parks — built around real-time occupancy data.', pt: 'Aplicação que visualiza lugares disponíveis em parques de estacionamento — construída em torno de dados de ocupação em tempo real.' }, stack: ['Web', 'Real-time data'], glyph: '◐' },
  { id: 'mimocadroid', name: 'Mimocadroid', period: { en: 'Dec 2017 — Jan 2018', pt: 'Dez 2017 — Jan 2018' }, type: { en: 'Educational mobile app', pt: 'App educacional mobile' }, affiliation: { en: 'Instituto Politécnico de Santarém', pt: 'Instituto Politécnico de Santarém' }, blurb: { en: 'A mobile re-imagining of "Os Jogos da Mimocas" — helping people with cognitive impairments learn through play.', pt: 'Reinterpretação mobile de "Os Jogos da Mimocas" — ajuda pessoas com défices cognitivos a aprender através do jogo.' }, stack: ['Android', 'Educational'], glyph: '✦' },
  { id: 'agro-survey', name: { en: 'National Agricultural Fair Survey', pt: 'Inquéritos da Feira Nacional da Agricultura' }, period: { en: 'Apr 2017 — Jun 2017', pt: 'Abr 2017 — Jun 2017' }, type: { en: 'Field survey app', pt: 'App de inquéritos em campo' }, affiliation: { en: 'Instituto Politécnico de Santarém', pt: 'Instituto Politécnico de Santarém' }, blurb: { en: 'Digital questionnaire system used on the ground at Santarém\'s National Agricultural Fair.', pt: 'Sistema digital de questionários usado no terreno na Feira Nacional da Agricultura de Santarém.' }, stack: ['Mobile', 'Forms'], glyph: '❒' },
];
