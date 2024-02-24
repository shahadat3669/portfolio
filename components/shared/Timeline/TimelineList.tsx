import Link from 'next/link';
import React from 'react';
import type { IconType } from 'react-icons';

type TimelineListProps = {
  timelineListIcon: IconType;
  timelineList: {
    id: number;
    listItemTitle: string;
    listItemSubtitle: string;
    listItemDuration?: string;
    listItemLink?: string;
    listItemDescription?: string;
  }[];
};

const TimelineList = ({ timelineList, timelineListIcon: TimelineListIcon }: TimelineListProps) => {
  return (
    <ul className="flex flex-col gap-10">
      {timelineList.map((item) => (
        <li key={item.id} className="flex flex-col gap-4 md:flex-row">
          <div className="h-fit w-fit flex-1 rounded-full bg-[#ea4343] p-3">
            <TimelineListIcon className="text-xl text-white" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
              <div className="flex-1 font-josefin-sense font-bold leading-[1.2] tracking-[-0.2px] text-[#15111e] dark:text-white">
                <h5 className="text-lg ">
                  {item.listItemLink ? (
                    <Link href={item.listItemLink} target="_blank">
                      {item.listItemTitle}
                    </Link>
                  ) : (
                    item.listItemTitle
                  )}
                </h5>
                <h6>{item.listItemSubtitle}</h6>
              </div>
              <span className="w-fit">{item.listItemDuration}</span>
            </div>
            <p>{item.listItemDescription}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TimelineList;
