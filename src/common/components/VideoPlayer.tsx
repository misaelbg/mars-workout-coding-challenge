import { VideoProps } from "@/types/video.type";

const VideoPlayer = ({ src }: VideoProps) => {
  return (
    <video
      className="mb-6 w-full aspect-video mr-2"
      controls
      autoPlay={true}
      muted
      playsInline
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};

export default VideoPlayer;
