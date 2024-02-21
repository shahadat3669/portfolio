import React from 'react';

import { cn } from '@/libs/utils';

type ProgressBarProps = {
  containerClasses?: string;
  bgClasses?: string;
  progressClasses?: string;
  progress?: number;
  text?: string;
};

const ProgressBar = ({
  bgClasses = 'bg-white/30 h-2',
  progress = 80,
  progressClasses = 'bg-white',
  text,
  containerClasses,
}: ProgressBarProps) => {
  return (
    <div
      className={cn(
        'relative font-josefin-sense text-xl font-bold leading-[1.7] tracking-[-.2px] text-white',
        containerClasses
      )}>
      {text && (
        <div className="mb-2 flex items-center justify-between text-lg">
          <div>{text}</div>
          <div>{progress}%</div>
        </div>
      )}
      <div className={cn('flex overflow-hidden rounded text-xs', bgClasses)}>
        <div
          style={{ width: `${progress}%` }}
          className={cn('duration-[2s] delay-500 transition-all ease-out', progressClasses)}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
