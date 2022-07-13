import { useState } from "react";
import PodcastEpisode from "../interfaces/podcast_episode.interface";

/**
 * Spotify related hooks.
 * @returns
 */
const useSpotify = () => {
  const [selectedEpisode, setSelectedEpisode] = useState<PodcastEpisode>();

  const setNewEpisode = (episode: PodcastEpisode) => {
    setSelectedEpisode(episode);
  };

  return { selectedEpisode, setNewEpisode };
};

export default useSpotify;
