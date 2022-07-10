import Head from "next/head";
import useSWR from "swr";
import Footer from "../components/Footer/Footer";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/Navbar/Navbar";

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Home() {
  const { data, error } = useSWR("/api/podcasts", fetcher);

  return (
    <>
      <Head>
        <title>This One Time At Summer Camp | A podcast</title>
      </Head>
      <main>
        <Navbar title="THIS ONE TIME AT SUMMER CAMP" />
        <Jumbotron />
        <div id="episodes" className="flex flex-row justify-center my-24 mx-12">
          <div className="w-full lg:w-1/2">
            {!data && <p>Loading</p>}
            {data &&
              data.data.map((episode) => {
                return (
                  <div key={episode.id} className="my-4">
                    <iframe
                      style={{ borderRadius: "12px" }}
                      src={`https://open.spotify.com/embed/episode/${episode.id}?utm_source=generator`}
                      width="100%"
                      height="232"
                      frameBorder="0"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                      security="restricted"
                    ></iframe>
                  </div>
                );
              })}
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
