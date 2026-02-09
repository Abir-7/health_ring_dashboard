import Articles_upload from "./articles_upload";
import BannerUploads from "./banner_upload";
import Video_upload from "./video_upload";

const Content_container = () => {
  return (
    <div className="space-y-6 mt-6">
      <div className="space-y-6">
        <p className="text-lg">Video Upload</p>
        <Video_upload></Video_upload>
      </div>
      <div className="space-y-6">
        <p className="text-lg">Articles Upload</p>
        <Articles_upload></Articles_upload>
      </div>
      <div className="space-y-6">
        <p className="text-lg">Banner Upload</p>
        <BannerUploads></BannerUploads>
      </div>
    </div>
  );
};

export default Content_container;
