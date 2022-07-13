import { useRef, useEffect } from "react";
import useSpotify from "../../hooks/use_spotify.hook";
import PodcastEpisode from "../../interfaces/podcast_episode.interface";
import EpisodeTile from "./EpisodeTile";
import PlayerEmbed from "./PlayerEmbed";

interface PodcastProps {
  podcasts: PodcastEpisode[];
}

const Podcasts: React.FC<PodcastProps> = ({ podcasts }) => {
  const { selectedEpisode, setNewEpisode } = useSpotify();

  useEffect(() => {
    setNewEpisode(podcasts[0]);
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4">
        {podcasts.map((episode) => (
          <div key={episode.id}>
            {selectedEpisode && episode.id === selectedEpisode.id ? (
              <PlayerEmbed episodeId={episode.id} />
            ) : (
              <EpisodeTile
                episode={episode}
                isSelected={
                  selectedEpisode && episode.id === selectedEpisode.id
                }
                onEpisodeSelected={setNewEpisode}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Podcasts;
