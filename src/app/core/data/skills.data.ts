export interface SkillItem {
  name: string;
  years: string;
  level: number;
}

export interface SkillGroup {
  title: string;
  note: string;
  items: SkillItem[];
}

export interface LangItem {
  name: string;
  level: string;
  pct: number;
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Top Skills', note: 'Surfaced from a decade of project work',
    items: [
      { name: 'Angular', years: '5+ yrs (v6 → v15)', level: 0.96 },
      { name: 'PrimeNG', years: 'Daily', level: 0.92 },
      { name: 'TypeScript', years: '5+ yrs', level: 0.9 },
      { name: 'NgRx', years: 'State management', level: 0.82 },
      { name: 'SCSS / CSS', years: 'Component styling', level: 0.88 },
    ],
  },
  {
    title: 'Process & team', note: 'How I work alongside engineers and clients',
    items: [
      { name: 'Agile / SCRUM', years: 'Refinements + dailies', level: 0.92 },
      { name: 'Estimating', years: 'Delivery planning', level: 0.85 },
      { name: 'Technical interviews', years: 'For company + client', level: 0.82 },
      { name: 'Leadership', years: 'Lead of 3-dev team', level: 0.78 },
      { name: 'Code review', years: 'Daily practice', level: 0.88 },
    ],
  },
  {
    title: 'Tooling', note: "What's open in my IDE",
    items: [
      { name: 'Git', years: 'Daily', level: 0.94 },
      { name: 'JIRA', years: 'Top skill', level: 0.9 },
      { name: 'Jenkins', years: 'CI / CD', level: 0.7 },
      { name: 'Bootstrap', years: 'Layout primitives', level: 0.84 },
      { name: 'Invision', years: 'Design handoff', level: 0.7 },
    ],
  },
  {
    title: 'Earlier stack', note: 'Used in junior full-stack work',
    items: [
      { name: 'C# / ASP.NET', years: 'Mediolanum, DKV', level: 0.62 },
      { name: 'MVC', years: 'DKV', level: 0.6 },
      { name: 'REST integration', years: 'Many projects', level: 0.86 },
      { name: 'AngularJS', years: 'Legacy EDP work', level: 0.65 },
    ],
  },
];

export const LANGUAGES: LangItem[] = [
  { name: 'Português', level: 'Native', pct: 1 },
  { name: 'English', level: 'Professional working', pct: 0.78 },
  { name: 'Español', level: 'Elementary', pct: 0.32 },
];
