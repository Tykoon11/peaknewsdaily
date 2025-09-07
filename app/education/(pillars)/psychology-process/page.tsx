import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Trader Psychology & Process | PeakNewsDaily',
  description: 'Develop trading discipline, process improvement, and psychological edge for consistent performance.'
};

export default function Page() { 
  return <PillarTemplate pillarId="psychology-process" />; 
}