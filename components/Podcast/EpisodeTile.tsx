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
    <div className="h-[152px] rounded-xl shadow-lg p-4 bg-neutral flex flex-row justify-between flex-nowrap gap-4">
      <img
        className="self-center rounded-lg h-full aspect-square"
        src={episode.images[1].url}
      />
      <div className="self-start justify-self-start truncate h-full text-neutral-content">
        <h3 className="font-bold text-lg text-left">{episode.name}</h3>
        <p>{stringDateToDisplayableDate(episode.release_date)}</p>
        <p className="truncate" title={episode.description}>
          {episode.description}
        </p>
      </div>
      <button
        key={episode.id}
        onClick={() => onEpisodeSelected(episode)}
        className="btn btn-primary self-center"
        disabled={isSelected}
      >
        Play
      </button>
    </div>
  );
};

export default EpisodeTile;
