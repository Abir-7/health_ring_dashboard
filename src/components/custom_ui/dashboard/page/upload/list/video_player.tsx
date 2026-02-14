import ReactPlayer from "react-player";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
}) => {
  return (
    <div className="  aspect-auto w-full bg-black">
      <ReactPlayer
        src={src}
        playing={autoPlay}
        loop={loop}
        muted={muted}
        poster={poster}
        controls
        width="100%"
        height="100%"
        playsInline
      />
    </div>
  );
};

export default VideoPlayer;
