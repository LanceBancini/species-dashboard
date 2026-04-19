import { Particles } from '@/src/components/ui/shadcn-io/particles';

export default function InteractiveHero() {
  const fullBackground: string = '';
  const containerBackground: string = 'absolute inset-0 w-full z-0  m-0 p-0';
  return (
    <Particles
      className={fullBackground}
      //pretier ignore
      quantity={50}
      ease={70}
      staticity={50}
      color='#f1f5f9'
      size={0.9}
      refresh={true}
      vy={-0.1}
      vx={-0.0}
    />
  );
}
