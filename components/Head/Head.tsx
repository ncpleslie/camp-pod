import Head from "next/head";

const PodHead: React.FC = () => {
  return (
    <Head>
      <title>This One Time At Summer Camp | A Podcast</title>
      <script
        src="https://open.spotify.com/embed-podcast/iframe-api/v1"
        async
      ></script>
    </Head>
  );
};

export default PodHead;
