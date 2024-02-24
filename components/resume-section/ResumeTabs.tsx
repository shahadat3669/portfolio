'use client';

import { Tab } from '@headlessui/react';
import React from 'react';

import { educationData, experienceData, resumeTabsData } from '@/libs/data';
import { cn } from '@/libs/utils';

import Timeline from '../shared/Timeline';

const ResumeTabs = () => {
  return (
    <div className="w-full">
      <Tab.Group>
        {({ selectedIndex }) => (
          <>
            <Tab.List className="flex justify-center gap-4 rounded-md bg-white p-1 shadow-sm dark:bg-[#4d4c4c] dark:text-white md:p-2">
              {resumeTabsData.map((resumeTab) => (
                <Tab
                  key={resumeTab.id}
                  className={cn(
                    'ui-focus-visible:outline-none ui-focus-visible:ring ui-focus-visible:ring-indigo-300 py-2 flex-1 whitespace-nowrap text-sm font-medium transition-colors ease-in-out focus-visible:outline-none duration-300 rounded-md md:text-lg lg:py-4 lg:text-xl',
                    resumeTab.id === selectedIndex
                      ? 'bg-[#ea4343] text-white'
                      : 'text-[#ea4343] hover:bg-[#ea4343] hover:text-white'
                  )}>
                  {resumeTab.title}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-8 lg:mt-16">
              <Tab.Panel className={cn('focus:outline-none focus:ring-0 flex flex-col gap-12 lg:flex-row')}>
                <Timeline
                  timelineTitle={educationData.title}
                  timelineListIcon={educationData.icon}
                  timelineList={educationData.list}
                />
                <Timeline
                  timelineTitle={experienceData.title}
                  timelineListIcon={experienceData.icon}
                  timelineList={experienceData.list}
                />
              </Tab.Panel>
            </Tab.Panels>
          </>
        )}
      </Tab.Group>
    </div>
  );
};

export default ResumeTabs;
