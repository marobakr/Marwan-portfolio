export interface Notion {
  id: string;
  title: string;
  url: string;
  coverImage: string;
  description: string;
  rule: string;
}
export type notionRules =
  | 'JavaScript'
  | 'Angular'
  | 'TypeScript'
  | 'SCSS'
  | 'CSharp'
  | 'Github';
