import LogoTitle from "../../public/logo_title.svg";
import ListenNowBtn from "../UI/ListenNowBtn";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="navbar bg-neutral flex flex-row justify-end">
      <div className="absolute top-4 left-5 z-50 max-w-[300px]">
        <LogoTitle />
      </div>
      <ListenNowBtn />
    </div>
  );
};

export default Navbar;
