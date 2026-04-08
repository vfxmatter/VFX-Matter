import { Hero } from '@/src/components/Hero';
import { CorePillars } from '@/src/components/CorePillars';
import { WhyItMatters } from '@/src/components/WhyItMatters';

export function Home({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <main>
      <Hero onStart={() => onNavigate('elements')} />
      <CorePillars onSelect={onNavigate} />
      <WhyItMatters />
    </main>
  );
}
