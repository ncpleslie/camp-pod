import { useState } from "react";
import LoadingIndicator from "../UI/LoadingIndicator";

interface PlayerEmbedProps {
  episodeId: string;
}

const PlayerEmbed: React.FC<PlayerEmbedProps> = ({ episodeId }) => {
  const [loaded, setLoaded] = useState(false);
  const onLoaded = () => {
    setLoaded(true);
  };

  return (
    <div className="shadow-lg h-[152px] my-4 rounded-xl relative bg-[#657B7F]">
      {!loaded && (
        <div className="absolute top-1/4 left-[47%] translate-y-1/4 ">
          <LoadingIndicator />
        </div>
      )}
      <iframe
        style={{ borderRadius: "12px" }}
        src={`https://open.spotify.com/embed/episode/${episodeId}?utm_source=generator`}
        width="100%"
        height="152"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        onLoad={onLoaded}
      ></iframe>
    </div>
  );
};

export default PlayerEmbed;