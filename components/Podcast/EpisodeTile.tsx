import PodcastEpisode from "../../interfaces/podcast_episode.interface";
import { stringDateToDisplayableDate } from "../../utils/helper.utils";

interface EpisodeTileProps {
  episode: PodcastEpisode;
  isSelected: boolean;
  onEpisodeSelected: (episode: PodcastEpisode) => void;
}

const EpisodeTile: React.FC<EpisodeTileProps> = ({
  episode,
  isSelected,
  onEpisodeSelected,
}) => {
  return (
    <div className="h-[152px] rounded-xl shadow-lg p-2 md:p-4 bg-neutral flex flex-col md:flex-row justify-between flex-nowrap gap-0 md:gap-4">
      <img
        className="self-center rounded-lg h-full aspect-square"
        src={episode.images[1].url}
      />
      <div className="self-start justify-self-start truncate h-full text-neutral-content w-full">
        <h3
          className="font-bold text-sm md:text-lg text-center md:text-left truncate"
          title={episode.name}
        >
          {episode.name}
        </h3>
        <p className="text-sm text-center md:text-left">
          {stringDateToDisplayableDate(episode.release_date)}
        </p>
        <p className="truncate hidden md:block" title={episode.description}>
          {episode.description}
        </p>
      </div>
      <button
        key={episode.id}
        onClick={() => onEpisodeSelected(episode)}
        className="btn btn-primary self-center min-h-0 h-6 md:h-12 md:min-h-12"
        disabled={isSelected}
      >
        Play
      </button>
    </div>
  );
};

export default EpisodeTile;
