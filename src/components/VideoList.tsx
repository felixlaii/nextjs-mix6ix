import Link from "next/link";

interface VideoSectionItemProps {
  videoSrc: string;

  id: number;
}

const VideoList: React.FC<VideoSectionItemProps> = ({ videoSrc, id }) => {
  return (
    <div>
      <Link href={`/video/${id}`}></Link>
    </div>
  );
};

export default VideoList;
