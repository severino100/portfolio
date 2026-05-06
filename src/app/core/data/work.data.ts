export interface Project {
  client: string;
  logo: string | null;
  title: { en: string; pt: string };
  stack: string[];
  note: { en: string; pt: string };
}

export interface WorkEntry {
  co: string;
  logo: string | null;
  role: { en: string; pt: string };
  period: { en: string; pt: string };
  location: string;
  blurb: { en: string; pt: string };
  projects: Project[];
}

export const WORK: WorkEntry[] = [
  {
    co: 'Six-Factor', logo: 'assets/logos/six-factor.png',
    role: { en: 'Front-End Lead Developer', pt: 'Front-End Lead Developer' },
    period: { en: 'Feb 2025 — Present', pt: 'Fev 2025 — Atualidade' },
    location: 'Sintra, PT',
    blurb: { en: 'Leading the front-end practice. Setting standards, reviewing code, mentoring engineers, assessing delivery risk.', pt: 'A liderar a prática de front-end. Defino padrões, revejo código, faço mentoria a engenheiros e avalio risco de entrega.' },
    projects: [
      { client: '[ Em breve ]', logo: null, title: { en: 'Lead engagement', pt: 'Liderança técnica' }, stack: ['Angular', 'PrimeNG', 'TypeScript'], note: { en: 'Architecture · code standards · mentoring', pt: 'Arquitetura · padrões de código · mentoria' } },
    ],
  },
  {
    co: 'NTT DATA', logo: 'assets/logos/ntt-data.png',
    role: { en: 'Senior Front-End Developer', pt: 'Senior Front-End Developer' },
    period: { en: 'Jun 2022 — Feb 2025', pt: 'Jun 2022 — Fev 2025' },
    location: 'Lisboa, PT',
    blurb: { en: 'Senior engineer & technical lead of a 3-developer team. Conducted technical interviews for both NTT DATA and the client. Owned web application development end-to-end with Angular 11–15.', pt: 'Engenheiro sénior e líder técnico de uma equipa de 3 developers. Conduzi entrevistas técnicas para a NTT DATA e para o cliente. Responsável pela aplicação web end-to-end em Angular 11–15.' },
    projects: [
      { client: 'Santander', logo: 'assets/logos/santander.png', title: { en: 'Banking web application', pt: 'Aplicação web de banca' }, stack: ['Angular 11–15', 'TypeScript', 'SCSS', 'PrimeNG', 'Bootstrap', 'Invision'], note: { en: 'Tech lead of 3 developers · estimation & delivery · Agile SCRUM', pt: 'Líder técnico de 3 developers · estimativas e entregas · Agile SCRUM' } },
    ],
  },
  {
    co: 'NTT DATA', logo: 'assets/logos/ntt-data.png',
    role: { en: 'Front-End Developer', pt: 'Front-End Developer' },
    period: { en: 'Mar 2019 — Aug 2022', pt: 'Mar 2019 — Ago 2022' },
    location: 'Lisboa, PT',
    blurb: { en: 'Mid-level Angular engineer across multiple international client projects. REST integration, component development, agile delivery.', pt: 'Engenheiro Angular intermédio em múltiplos projetos internacionais. Integração REST, desenvolvimento de componentes, entrega ágil.' },
    projects: [
      { client: 'EDP', logo: 'assets/logos/edp.png', title: { en: 'Energy web application', pt: 'Aplicação web de energia' }, stack: ['Angular 8', 'AngularJS', 'TypeScript', 'JavaScript', 'Bootstrap'], note: { en: 'RESTful API integration · SCRUM', pt: 'Integração com APIs REST · SCRUM' } },
      { client: 'Caixa Geral de Depósitos', logo: 'assets/logos/cgd.png', title: { en: 'Banking front-end', pt: 'Front-end de banca' }, stack: ['Angular 8', 'TypeScript', 'SCSS', 'DevOps', 'Git'], note: { en: 'REST integration · agile delivery', pt: 'Integração REST · entrega ágil' } },
      { client: 'NRI', logo: null, title: { en: 'Front-end build-out', pt: 'Desenvolvimento de front-end' }, stack: ['Angular 7', 'TypeScript', 'SCSS', 'SVN'], note: { en: 'Component development · agile delivery', pt: 'Desenvolvimento de componentes · entrega ágil' } },
      { client: 'International Organization', logo: null, title: { en: 'Web pages & components', pt: 'Páginas e componentes web' }, stack: ['Angular 6/7', 'TypeScript', 'SCSS', 'JIRA'], note: { en: 'REST integration · client guidance & troubleshooting', pt: 'Integração REST · acompanhamento e suporte ao cliente' } },
    ],
  },
  {
    co: 'NTT DATA', logo: 'assets/logos/ntt-data.png',
    role: { en: 'Junior Full-Stack Developer', pt: 'Junior Full-Stack Developer' },
    period: { en: 'Mar 2018 — Mar 2019', pt: 'Mar 2018 — Mar 2019' },
    location: 'Lisboa, PT',
    blurb: { en: 'Full-stack delivery on enterprise client projects in the .NET ecosystem.', pt: 'Entrega full-stack em projetos de clientes enterprise no ecossistema .NET.' },
    projects: [
      { client: 'Mediolanum', logo: 'assets/logos/mediolanum.png', title: { en: 'Front-end development', pt: 'Desenvolvimento de front-end' }, stack: ['C#', 'ASP.NET', 'Visual Basic', 'JIRA', 'Git'], note: { en: 'Front-end work in a Microsoft stack', pt: 'Trabalho de front-end em stack Microsoft' } },
      { client: 'DKV', logo: 'assets/logos/dkv.png', title: { en: 'Full-stack delivery', pt: 'Entrega full-stack' }, stack: ['MVC', 'C#', 'ASP.NET', 'Visual Basic'], note: { en: 'Services dev · REST integration · SCRUM', pt: 'Desenvolvimento de serviços · integração REST · SCRUM' } },
    ],
  },
  {
    co: 'ITEN Solutions', logo: 'assets/logos/iten.png',
    role: { en: 'Intern — Junior Developer', pt: 'Estágio — Junior Developer' },
    period: { en: 'Mar 2015 — Jun 2015', pt: 'Mar 2015 — Jun 2015' },
    location: 'Carnaxide, PT',
    blurb: { en: 'First taste of shipped software — a system letting bus passengers request stops from their phone via Beacons.', pt: 'Primeiro contacto com software entregue — sistema que permite a passageiros pedir paragem do autocarro via Beacons.' },
    projects: [
      { client: 'Internal R&D', logo: null, title: { en: 'Beacon-based bus stop system', pt: 'Sistema de paragens com Beacons' }, stack: ['Mobile', 'Beacons', 'BLE'], note: { en: 'Internship project', pt: 'Projeto de estágio' } },
    ],
  },
];
