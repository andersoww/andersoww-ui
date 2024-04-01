"use client";

import { Tabs } from "@andersoww/roque-ui";
import { CalendarRange, KeyRound } from "lucide-react";

function ExampleTabs() {
  return (
    <div className="w-screen h-screen flex bg-white flex-col items-center">
      <div className="bg-white w-1/2 rounded-lg p-3 h-fit mt-20 border border-stone-300 text-stone-900">
        <Tabs.Root>
          <Tabs.Tab key="one" title="Plans">
            Content of Tab Pane 1
          </Tabs.Tab>
          <Tabs.Tab key="two" title="Keys">
            Content of Tab Pane 2
          </Tabs.Tab>

          <Tabs.Tab key="three" title="Services" disabled />
        </Tabs.Root>
      </div>

      <div className="bg-white w-1/2 rounded-lg p-3 h-fit mt-20 border border-stone-300 text-stone-900">
        <Tabs.Root>
          <Tabs.Header>Anderson</Tabs.Header>
          <Tabs.Tab
            key="one"
            title={
              <div className="flex items-center space-x-2">
                <CalendarRange className="w-4 h-4" />
                <span>Photos</span>
              </div>
            }
          >
            Content of Tab Pane 1
          </Tabs.Tab>
          <Tabs.Tab
            key="two"
            title={
              <div className="flex items-center space-x-2">
                <KeyRound className="w-4 h-4" />
                <span>Keys</span>
              </div>
            }
          >
            Content of Tab Pane 2
          </Tabs.Tab>

          <Tabs.Tab key="three" title="Services" disabled />
        </Tabs.Root>
      </div>
    </div>
  );
}

export { ExampleTabs };
