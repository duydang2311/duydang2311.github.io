export const skills: {
  group: string;
  items: {
    id: string;
    light: () => Promise<typeof import('*.svg')>;
    dark?: () => Promise<typeof import('*.svg')>;
  }[];
}[] = [
  {
    group: 'Programming Languages',
    items: [
      {
        id: 'csharp',
        light: () => import('~/lib/assets/images/skills/csharp.svg'),
      },
      {
        id: 'ts',
        light: () => import('~/lib/assets/images/skills/typescript.svg'),
      },
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      {
        id: 'aws',
        light: () => import('~/lib/assets/images/skills/aws.svg'),
      },
      {
        id: 'github',
        light: () => import('~/lib/assets/images/skills/github.svg'),
      },
      {
        id: 'vercel',
        light: () => import('~/lib/assets/images/skills/vercel.svg'),
      },
    ],
  },
  {
    group: 'Dev Tools',
    items: [
      {
        id: 'git',
        light: () => import('~/lib/assets/images/skills/git.svg'),
      },
      {
        id: 'vscode',
        light: () => import('~/lib/assets/images/skills/vscode.svg'),
      },
    ],
  },
];
