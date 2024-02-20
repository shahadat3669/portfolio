import React from 'react';

import { cn } from '@/libs/utils';

type ProgressBarProps = {
  bgColorClass?: string;
  fgColorClass?: string;
  progress?: number;
  heightClass?: string;
  text?: string;
};

const ProgressBar = ({
  bgColorClass = 'bg-white/30',
  progress = 80,
  heightClass = 'h-2',
  fgColorClass = 'bg-white',
  text,
}: ProgressBarProps) => {
  return (
    <div className="relative font-josefin-sense text-xl font-bold leading-[1.7] tracking-[-.2px] text-white">
      {text && (
        <div className="mb-2 flex items-center justify-between text-lg">
          <div>{text}</div>
          <div>{progress}%</div>
        </div>
      )}
      <div className={cn('flex overflow-hidden rounded text-xs', bgColorClass, heightClass)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('duration-[2s] delay-500 transition-all ease-out', fgColorClass)}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
