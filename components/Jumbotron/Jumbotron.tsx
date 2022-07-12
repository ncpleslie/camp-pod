import Logo from "../../public/logo.svg";

interface JumbotronProps {}

const Jumbotron: React.FC<JumbotronProps> = () => {
  return (
    <>
      <div className="hero bg-base-100 my-24">
        <div className="hero-content flex-col md:flex-row">
          <div className="rounded-xl shadow-2xl">
            <Logo />
          </div>
          <div className="mx-12 flex flex-col gap-8 max-w-4xl">
            <h1 className="text-5xl font-bold text-center md:text-left hidden md:block">
              This one time at summer camp
            </h1>
            <p>
              Pete and Nick use their many years of experience at camp to
              discuss the highs and lows of working at camps in the US and other
              countries. Everybody we meet who has been to a camp have some
              amazing stories to tell.
            </p>
            <a className="btn btn-primary" href="#episodes">
              Listen Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jumbotron;
