import axios from "axios";
import PodcastResponse from "../interfaces/response/podcast_response.interface";
import SpotifyAuthResponse from "../interfaces/response/spotify_auth_response.interface";

export const getPodcastEpisodes = async () => {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const showId = process.env.SHOW_ID;
  const spotifyAccountBaseUrl = "https://accounts.spotify.com/api/";
  const spotifyShowBaseUrl = "https://api.spotify.com/v1/shows/";

  // Get the auth token from spotify.
  const authToken = Buffer.from(`${client_id}:${client_secret}`).toString(
    "base64"
  );

  const grantTypeForm = new URLSearchParams();
  grantTypeForm.append("grant_type", "client_credentials");

  const { data: authData } = await axios.post<SpotifyAuthResponse>(
    `${spotifyAccountBaseUrl}token`,
    grantTypeForm,
    {
      headers: {
        Authorization: `Basic ${authToken}`,
      },
    }
  );

  // Query for a list of podcast episodes.
  const { data } = await axios.get<PodcastResponse>(
    `${spotifyShowBaseUrl}${showId}/episodes?market=US`,
    {
      headers: {
        Authorization: "Bearer " + authData.access_token,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

  return data.items;
};
