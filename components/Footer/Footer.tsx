import ApplePodcastsIcon from "../UI/icons/ApplePodcastsIcon";
import InstagramIcon from "../UI/icons/InstagramIcon";
import SpotifyIcon from "../UI/icons/SpotifyIcon";

const Footer: React.FC<{}> = () => {
  return (
    <footer className="footer items-center p-4 bg-base-100 text-base-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a
          href="https://www.instagram.com/thisonetimeatsummercamppod"
          title="See This One Time At Summer on Instagram"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/this-one-time-at-summer-camp/"
          title="Listen to This One Time At Summer Camp on Apple Podcasts"
          target="_blank"
          rel="noreferrer"
        >
          <ApplePodcastsIcon />
        </a>
        <a
          href="https://open.spotify.com/show/5sTfLG6GhzJ1SYDY3kWLMR"
          title="Listen to This One Time At Summer Camp on Spotify"
          target="_blank"
          rel="noreferrer"
        >
          <SpotifyIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
