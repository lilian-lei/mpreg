import { Link } from "react-router";

export default function Taskbar() {
  const navItems = [
    { label: "m-preg", href: "/m-preg" },
    { label: "web chat", href: "/" },
    { label: "downloads", href: "/downloads" },
    { label: "repository", href: "/repository" },
    { label: "contact", href: "/contact" },
    { label: "about", href: "/about" },
  ];

  return (
    <div className="w-full bg-card border-b border-border">
      <div className="flex items-center justify-center h-12 px-6 gap-8">
        {navItems.map((item) => (
          item.href.startsWith("#") ? (
            <a
              key={item.label}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 capitalize"
            >
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-200 capitalize"
            >
              {item.label}
            </Link>
          )
        ))}
      </div>
    </div>
  );
}