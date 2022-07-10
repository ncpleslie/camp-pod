interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="navbar bg-neutral">
      <a className="w-48">
        <img src="./logo_title.svg" />
      </a>
    </div>
  );
};

export default Navbar;
