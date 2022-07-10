import request from "request";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client_id = process.env.CLIENT_ID;
  const client_secret = process.env.CLIENT_SECRET;
  const showId = process.env.SHOW_ID;

  const authOptions = {
    url: "https://accounts.spotify.com/api/token",
    method: "POST",
    headers: {
      Authorization:
        "Basic " +
        new Buffer(client_id + ":" + client_secret).toString("base64"),
    },
    form: {
      grant_type: "client_credentials",
    },
    json: true,
  };

  request(authOptions, (error, response, data) => {
    if (data.access_token) {
      const showOptions = {
        url: ` 	https://api.spotify.com/v1/shows/${showId}/episodes?market=US`,
        method: "GET",
        headers: {
          Authorization: "Bearer " + data.access_token,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      };

      request(showOptions, (error, response, data) => {
        res.status(200).json({ data: JSON.parse(data).items });
      });
    } else {
      res.status(500);
    }
  });
}
