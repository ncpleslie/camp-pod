import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <div className="navbar bg-neutral">
      <div>
        <Link href="/" passHref>
          <Image
            src="/logo_title.svg"
            alt="This one time at summer camp logo"
            width={300}
            height={80}
          />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
