import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import VideoPlayer from "./video_player";
import { Play } from "lucide-react";

interface VideoModalProps {
  title: string;
  videoSrc: string;
  posterSrc?: string;
  autoPlay?: boolean;
  desc?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  title,
  videoSrc,
  posterSrc,
  autoPlay = false,
  desc,
}) => {
  return (
    <Dialog>
      {/* Trigger with thumbnail + play button overlay */}
      <DialogTrigger className="relative block w-full aspect-video rounded-md overflow-hidden hover:cursor-pointer">
        {posterSrc && (
          <img
            src={posterSrc}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#2A9D8FE5] rounded-full w-10 h-10 flex justify-center items-center z-10 hover:w-11 hover:h-11 transition-all duration-150">
          <Play size={20} className="fill-white stroke-white" />
        </div>
      </DialogTrigger>

      {/* Modal Content */}
      <DialogContent className="w-[95vw] max-w-[95vw] sm:max-w-3xl lg:max-w-5xl  p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="mb-1"></DialogTitle>
        </DialogHeader>

        <DialogDescription asChild>
          <div className="px-6 pb-6 space-y-5">
            <VideoPlayer
              src={videoSrc}
              poster={posterSrc}
              autoPlay={autoPlay}
              loop={false}
              muted={false}
            />
            {title && (
              <div className="text-lg font-medium text-black">{title}</div>
            )}
            {desc && <div className="text-base ">{desc}</div>}
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default VideoModal;
