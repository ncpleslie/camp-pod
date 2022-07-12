import { useState, useRef, useEffect } from "react";
import PodcastEpisode from "../../interfaces/podcast_episode.interface";
import SpotifyIframeApi from "../../interfaces/spofity_iframe_api.interface";
import SpotifyEmbedController from "../../interfaces/spotify_embed_controller.interface";

interface PodcastProps {
  podcasts: PodcastEpisode[];
}

const Podcasts: React.FC<PodcastProps> = ({ podcasts }) => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode>(
    podcasts[0]
  );
  const embedRef = useRef<HTMLDivElement>(null);
  const [embedController, setEmbedController] =
    useState<SpotifyEmbedController>();

  useEffect(() => {
    window.onSpotifyIframeApiReady = (iFrameAPI: SpotifyIframeApi) => {
      const options = {
        uri: `${selectedEpisode.uri}`,
        height: "200",
      };
      const callback = (embedController: SpotifyEmbedController) =>
        setEmbedController(embedController);
      iFrameAPI.createController(embedRef.current, options, callback);
    };
  }, []);

  const onNewEpisodeSelected = (episode: PodcastEpisode) => {
    if (!embedController) {
      return;
    }

    embedController.loadUri(episode.uri);
    setSelectedEpisode(episode);
  };

  return (
    <>
      <div className="shadow-lg h-[152px] my-4 rounded-xl">
        <div ref={embedRef}></div>
      </div>
      <div className="flex flex-col gap-4">
        {podcasts.map((episode) => {
          return (
            <button
              key={episode.id}
              onClick={() => onNewEpisodeSelected(episode)}
              className={
                episode.id === selectedEpisode.id
                  ? "bg-green-300"
                  : "bg-red-200"
              }
            >
              Play {episode.name}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default Podcasts;
