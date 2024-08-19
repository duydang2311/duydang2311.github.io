import {
  SkillsSection,
  ProjectsSection,
  IntroductionSection,
} from './(components)';

export default function Portfolio() {
  return (
    <main class="items-center h-full content-center px-16 py-4 space-y-32">
      <IntroductionSection />
      <SkillsSection />
      <ProjectsSection />
    </main>
  );
}
