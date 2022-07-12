export default interface PodcastEpisode {
  audio_preview_url: string;
  description: string;
  duration_ms: number;
  explicit: boolean;
  external_urls: ExternalUrl;
  href: string;
  html_description: string;
  id: string;
  images: PodcastImage[];
  is_external_hosted: boolean;
  is_playable: boolean;
  language: string;
  languages: string[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
}

interface ExternalUrl {
  spotify: string;
}

interface PodcastImage {
  height: number;
  url: string;
  width: number;
}
