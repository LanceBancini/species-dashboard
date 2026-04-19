import dynamic from 'next/dynamic';
import { LucideProps } from 'lucide-react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export const allowedIcons = ['bell-electric', 'cat', 'bird', 'vegan', 'dog', 'squirrel', 'bug', 'paw-print', 'rabbit', 'worm', 'clover', 'fish', 'sprout', 'leaf', 'panda', 'clover', 'snail', 'turtle', 'x'] as const;

export type AllowedIconName = (typeof allowedIcons)[number];

interface IconProps extends LucideProps {
  name: AllowedIconName;
}

// Ohne Loading-Fallback - Icons werden sofort geladen
const iconComponents = Object.fromEntries(allowedIcons.map((key) => [key, dynamic(dynamicIconImports[key])])) as Record<AllowedIconName, React.ComponentType<LucideProps>>;

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = iconComponents[name];
  return <LucideIcon {...props} />;
};

export default Icon;
