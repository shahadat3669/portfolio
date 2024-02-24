import React from 'react';
import type { IconType } from 'react-icons';

import type { ResumeListItemProps } from '@/libs/data';

import TimelineList from './TimelineList';

type TimelineProps = {
  timelineTitle: string;
  timelineListIcon: IconType;
  timelineList: ResumeListItemProps[];
};

const Timeline = ({ timelineTitle, timelineListIcon, timelineList }: TimelineProps) => {
  return (
    <div className="flex flex-col gap-8">
      <h4 className="relative font-josefin-sense text-2xl font-bold leading-[1.2] tracking-[-.2px] text-[#15111e] dark:text-white">
        {timelineTitle && <span className="c-title-marker">{timelineTitle}</span>}
      </h4>
      <TimelineList timelineList={timelineList} timelineListIcon={timelineListIcon} />
    </div>
  );
};

export default Timeline;
