import LogoTitle from "../../public/logo_title.svg";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="navbar bg-neutral">
      <div className="absolute top-4">
        <LogoTitle />
      </div>
    </div>
  );
};

export default Navbar;
