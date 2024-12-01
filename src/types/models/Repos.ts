import { z } from 'zod';

export const RepoSchema = z.object({
  id: z.number(),
  node_id: z.string(),
  name: z.string(),
  full_name: z.string(),
  private: z.boolean(),
  owner: z.object({
    login: z.string(),
    id: z.number(),
    avatar_url: z.string().url(),
    html_url: z.string().url(),
  }),
  html_url: z.string().url(),
  description: z.string().nullable(),
  fork: z.boolean(),
  url: z.string().url(),
  created_at: z.string(),
  updated_at: z.string(),
  pushed_at: z.string(),
  language: z.string().nullable(),
  stargazers_count: z.number(),
  watchers_count: z.number(),
  forks_count: z.number(),
  open_issues_count: z.number(),
  default_branch: z.string(),
  permissions: z.object({
    admin: z.boolean(),
    push: z.boolean(),
    pull: z.boolean(),
  }),
});

export type Repo = z.infer<typeof RepoSchema>;
