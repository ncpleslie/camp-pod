import { GetStaticProps } from "next";
import Footer from "../components/Footer/Footer";
import PodHead from "../components/Head/Head";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import Navbar from "../components/Navbar/Navbar";
import PodcastEpisode from "../interfaces/podcast_episode.interface";
import { getPodcastEpisodes } from "../static_props/podcast";
import Podcasts from "../components/Podcast/Podcasts";

export const getStaticProps: GetStaticProps = async () => {
  const data = await getPodcastEpisodes();

  return {
    props: { podcasts: data },
    revalidate: 60,
  };
};

interface HomeProps {
  podcasts: PodcastEpisode[];
}

const Home: React.FC<HomeProps> = ({ podcasts }) => {
  return (
    <>
      <PodHead />
      <main>
        <Navbar title="THIS ONE TIME AT SUMMER CAMP" />
        <Jumbotron />
        <div id="episodes" className="flex flex-row justify-center my-24 mx-12">
          <div className="w-full lg:w-1/2">
            <Podcasts podcasts={podcasts} />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default Home;
