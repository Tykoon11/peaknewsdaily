import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Strategy, Setups & Timing | PeakNewsDaily',
  description: 'Learn trading strategies, entry setups, and timing techniques from breakouts to mean reversion.'
};

export default function Page() { 
  return <PillarTemplate pillarId="strategy-entries" />; 
}