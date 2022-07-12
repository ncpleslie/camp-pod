import SpotifyEmbedController from "./spotify_embed_controller.interface";

export default interface SpotifyIframeApi {
  createController: (
    element: HTMLElement,
    options: SpotifyIframeApiOptions,
    callback: (embedController: SpotifyEmbedController) => void
  ) => void;
}

interface SpotifyIframeApiOptions {
  uri: string;
}
