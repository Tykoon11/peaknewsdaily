import dynamic from 'next/dynamic';
const PillarTemplate = dynamic(() => import('../pillar-template'), { ssr: true });

export const metadata = { 
  title: 'Crypto Safety, Custody & DeFi | PeakNewsDaily',
  description: 'Secure crypto trading with wallet custody, DeFi safety, and operational security best practices.'
};

export default function Page() { 
  return <PillarTemplate pillarId="crypto-safety" />; 
}