export const skills: {
  group: string;
  items: {
    id: string;
    light: () => Promise<typeof import('*.svg?component-solid')>;
    dark?: () => Promise<typeof import('*.svg?component-solid')>;
  }[];
}[] = [
  {
    group: 'Programming Languages',
    items: [
      {
        id: 'csharp',
        light: () =>
          import('~/lib/assets/images/skills/csharp.svg?component-solid'),
      },
      {
        id: 'ts',
        light: () =>
          import('~/lib/assets/images/skills/typescript.svg?component-solid'),
      },
    ],
  },
  {
    group: 'Infrastructure',
    items: [
      {
        id: 'aws',
        light: () =>
          import('~/lib/assets/images/skills/aws.svg?component-solid'),
      },
      {
        id: 'github',
        light: () =>
          import('~/lib/assets/images/skills/github.svg?component-solid'),
      },
      {
        id: 'vercel',
        light: () =>
          import('~/lib/assets/images/skills/vercel.svg?component-solid'),
      },
    ],
  },
  {
    group: 'Dev Tools',
    items: [
      {
        id: 'git',
        light: () =>
          import('~/lib/assets/images/skills/git.svg?component-solid'),
      },
      {
        id: 'vscode',
        light: () =>
          import('~/lib/assets/images/skills/vscode.svg?component-solid'),
      },
    ],
  },
];
