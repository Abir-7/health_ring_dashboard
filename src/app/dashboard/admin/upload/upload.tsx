import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Content_container from "@/components/custom_ui/dashboard/page/upload/content/content_container";
import ListContainer from "@/components/custom_ui/dashboard/page/upload/list/list_container";

const Upload = () => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    // Initialize from localStorage or default to "content"
    return localStorage.getItem("uploadActiveTab") || "content";
  });

  // Save to localStorage whenever tab changes
  useEffect(() => {
    localStorage.setItem("uploadActiveTab", activeTab);
  }, [activeTab]);

  return (
    <div className="p-6 space-y-6 ">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="">
        <TabsList className="bg-transparent gap-3">
          <TabsTrigger
            value="content"
            className="data-[state=active]:bg-gray-500 data-[state=active]:text-white rounded-sm border border-gray-400 text-[14px] px-4 py-4"
          >
            Content
          </TabsTrigger>
          <TabsTrigger
            value="list"
            className="data-[state=active]:bg-gray-500 data-[state=active]:text-white rounded-sm border-gray-400 text-[14px] px-4 py-4"
          >
            List
          </TabsTrigger>
        </TabsList>
        <TabsContent value="content" className="">
          <Content_container></Content_container>
        </TabsContent>
        <TabsContent value="list">
          <ListContainer></ListContainer>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Upload;
