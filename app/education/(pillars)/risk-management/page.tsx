import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Risk & Money Management | PeakNewsDaily',
  description: 'Master position sizing, stop losses, and risk management strategies for sustainable trading success.'
};

export default function Page() { 
  return <PillarTemplate pillarId="risk-management" />; 
}