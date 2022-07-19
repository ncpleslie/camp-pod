import ApplePodcastsTile from "../UI/podcast_tiles/ApplePodcastsTile";
import GooglePodcastsTile from "../UI/podcast_tiles/GooglePodcastsTile";
import SpotifyPodcastsTile from "../UI/podcast_tiles/SpotifyPodcastsTile";

const Description: React.FC = () => {
  return (
    <div className="py-12 grid place-content-center bg-neutral">
      <div className="text-center text-base-content max-w-prose mx-8 bg-base-100 p-8 rounded-xl shadow-xl">
        <h1 className="text-center text-3xl mb-4 text-bold">
          The One Time At Summer Camp
        </h1>
        <p>
          Pete and Nick use their many years of experience at camp to discuss
          the highs and lows of working at camps in the US and other countries.
          Everybody we meet who has been to a camp have some amazing stories to
          tell.
        </p>
        <div className="flex flex-row gap-2 mt-4">
          <a
            className="transition ease-in-out hover:scale-110 delay-150 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
            target="_blank"
            rel="noopener"
            href="https://open.spotify.com/show/5sTfLG6GhzJ1SYDY3kWLMR"
          >
            <SpotifyPodcastsTile />
          </a>
          <a
            className="transition ease-in-out hover:scale-110 delay-150 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
            target="_blank"
            rel="noopener"
            href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS8xOTgxNTE5LnJzcw=="
          >
            <GooglePodcastsTile />
          </a>
          <a
            className="transition ease-in-out hover:scale-110 delay-150 duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none"
            target="_blank"
            rel="noopener"
            href="https://podcasts.apple.com/podcast/id1621708943"
          >
            <ApplePodcastsTile />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
