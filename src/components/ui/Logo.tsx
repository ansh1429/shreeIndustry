import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center justify-center w-10 h-10 bg-primary-700 rounded-md">
      <Layers className="text-accent-400" size={24} />
    </div>
  );
};

export default Logo;