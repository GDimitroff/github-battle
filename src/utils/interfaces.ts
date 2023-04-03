export interface Repo {
  id: number;
  name: string;
  owner: Owner;
  created_at: Date;
  updated_at: Date;
  stargazers_count: number;
  language: string;
  forks: number;
  open_issues: number;
  watchers: number;
}

export interface Owner {
  login: string;
  avatar_url: string;
  type: string;
}
