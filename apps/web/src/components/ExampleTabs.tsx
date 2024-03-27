"use client";
import { Tabs } from "@andersoww/roque-ui";

function ExampleTabs() {
  return (
    <div className="w-screen h-screen flex justify-center bg-white">
      <div className="bg-white w-1/2 rounded-lg p-3 h-fit mt-20 border border-stone-300 text-stone-900">
        <Tabs.Root
          fallback={
            <div className="w-full h-[400px] bg-[#353535] rounded-lg animate-pulse mt-3" />
          }
        >
          <Tabs.Tab key="one" title="Plans">
            Content of Tab Pane 1
          </Tabs.Tab>
          <Tabs.Tab key="two" title="Keys">
            Content of Tab Pane 2
          </Tabs.Tab>

          <Tabs.Tab key="three" title="Services" />
        </Tabs.Root>
      </div>
    </div>
  );
}

export { ExampleTabs };
