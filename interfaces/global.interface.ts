export {};

declare global {
  /**
   * The global window.
   */
  interface Window {
    onSpotifyIframeApiReady: unknown;
  }
}
