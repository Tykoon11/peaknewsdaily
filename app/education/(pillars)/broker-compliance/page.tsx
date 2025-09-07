import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Broker, Compliance & Taxes | PeakNewsDaily',
  description: 'Essential broker due diligence, regulatory compliance, and tax considerations for traders.'
};

export default function Page() { 
  return <PillarTemplate pillarId="broker-compliance" />; 
}