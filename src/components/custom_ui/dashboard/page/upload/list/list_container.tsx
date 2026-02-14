import { Input } from "@/components/ui/input";
import Video_section from "./video_section";

import Article_section from "./article_section";
import { articles, demoVideos } from "@/demo/video_and_articles";

const ListContainer = () => {
  return (
    <div className="space-y-6 ">
      <Input placeholder="Search..." className="mt-6"></Input>
      <Video_section videos={demoVideos}></Video_section>
      <Article_section articles={articles}></Article_section>
    </div>
  );
};

export default ListContainer;
