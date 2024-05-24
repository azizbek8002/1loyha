import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { tabsData } from "../../constant";
 
export function UnderlineTabs() {
  const [activeTab, setActiveTab] = React.useState("Характеристики");

  return (
    <Tabs value={activeTab} className="mt-12"> 
      <TabsHeader
        className="rounded-none w-full  bg-transparent p-0"
        indicatorProps={{
          className:
            "bg-transparent border-b-2  shadow-none rounded-none text-primary",
        }}
      >
        {tabsData.map(({ label, value }) => (
          <Tab
            key={value}
            value={value}
            onClick={() => setActiveTab(value)}
            className={activeTab === value ? "text-title-color font-bold text-xl" : ""}
          >
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {tabsData.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}