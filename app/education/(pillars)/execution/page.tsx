import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Orders, Execution & Microstructure | PeakNewsDaily',
  description: 'Master order types, execution tactics, and microstructure to reduce trading costs and slippage.'
};

export default function Page() { 
  return <PillarTemplate pillarId="execution" />; 
}