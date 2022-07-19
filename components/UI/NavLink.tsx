interface NavLinkProps {
  href: string;
  title: string;
  className: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title, className }) => {
  return (
    <a
      className={`text-accent hover:text-accent-focus active:text-accent-content ${className}`}
      href={href}
      title={`Navigate to ${title}`}
    >
      {title}
    </a>
  );
};

export default NavLink;
