import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Instruments, Markets & Event Risk | PeakNewsDaily',
  description: 'Navigate futures, options, ETFs and event-driven trading with comprehensive market knowledge.'
};

export default function Page() { 
  return <PillarTemplate pillarId="markets-instruments" />; 
}