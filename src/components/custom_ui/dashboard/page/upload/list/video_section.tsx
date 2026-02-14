import type { TVideo } from "@/demo/video_and_articles";
import VideoModal from "./video_modal";

interface VideoSectionProps {
  videos: TVideo[];
}

const Video_section: React.FC<VideoSectionProps> = ({ videos }) => {
  return (
    <div className="space-y-6">
      <p className="text-lg font-medium">Videos</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-3 lg:grid-cols-4 xl:grid-cols-6">
        {videos.map((video) => (
          <div key={video.id} className="p-2 border rounded-md">
            <div className="aspect-video rounded-md relative overflow-hidden">
              {/* Background Image */}
              <img
                src={video.image}
                // alt={video.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Optional overlay for contrast */}
              <div className="absolute inset-0 bg-black/30" />

              {/* Video Modal Trigger */}
              <VideoModal
                title={video.title}
                videoSrc={video.videoSrc}
                posterSrc={video.image} // use thumbnail as poster
                autoPlay={false}
                desc={video.description}
              />
            </div>

            {/* Video Info */}
            <div className="mt-2">
              <p className="font-medium">{video.title}</p>
              <p className="text-sm line-clamp-2">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Video_section;
