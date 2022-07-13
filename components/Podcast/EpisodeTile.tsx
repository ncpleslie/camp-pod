import PodcastEpisode from "../../interfaces/podcast_episode.interface";

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
    <div className="h-[152px] rounded-xl shadow-lg p-4 pb-8 bg-white">
      <div className="flex flex-row justify-between flex-nowrap items-end gap-4">
        <img
          className="self-center rounded-lg"
          src={episode.images[2].url}
          style={{}}
        />
        <div>
          <h3 className="font-bold text-lg">{episode.name}</h3>
          <div
            className="overflow-y-auto h-24"
            dangerouslySetInnerHTML={{ __html: episode.html_description }}
          ></div>
        </div>
        <button
          key={episode.id}
          onClick={() => onEpisodeSelected(episode)}
          className={` btn btn-primary`}
          disabled={isSelected}
        >
          Play
        </button>
      </div>
    </div>
  );
};

export default EpisodeTile;
