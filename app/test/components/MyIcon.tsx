const test = 'Rose';
import { Rose as Icon } from 'lucide-react';

interface IIcon {
  iconName: string;
}
// Usage

const MyIcon = () => {
  return <Icon color='#09090b' className='m-4' size={96} />;
};

export default MyIcon;
