import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Systems, Testing & Automation | PeakNewsDaily',
  description: 'Learn backtesting, forward testing, and trading automation with proper risk guardrails.'
};

export default function Page() { 
  return <PillarTemplate pillarId="systems-testing" />; 
}