import ListenNowBtn from "../UI/ListenNowBtn";
import ParallaxLogo from "./ParallaxLogo/ParallaxLogo";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <div>
      <ParallaxLogo />
      <div className="hero absolute top-2/3">
        <div className="hero-content flex-col md:flex-row">
          <div className="rounded-xl shadow-2xl"></div>
          <div className="mx-12 flex flex-col gap-8 max-w-4xl">
            <p className="text-center">
              Pete and Nick use their many years of experience at camp to
              discuss the highs and lows of working at camps in the US and other
              countries. Everybody we meet who has been to a camp have some
              amazing stories to tell.
            </p>
            <ListenNowBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
