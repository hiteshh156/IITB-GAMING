import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: [
        { name: "SDK", path: "/sdk" },
        { name: "Tools", path: "/tools" },
        { name: "Assets", path: "/assets" },
        { name: "Plugins", path: "/plugins" }
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", path: "/docs" },
        { name: "Tutorials", path: "/tutorials" },
        { name: "API Reference", path: "/api-reference" },
        { name: "Examples", path: "/examples" }
      ],
    },
    {
      title: "Community",
      links: [
        { name: "Forums", path: "/forums" },
        { name: "Discord", path: "/discord" },
        { name: "Blog", path: "/blog" },
        { name: "Showcase", path: "/showcase" }
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", path: "/about" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
        { name: "Legal", path: "/legal" }
      ],
    },
  ];

  return (
    <footer className="bg-primary text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © 2024 IITB GAMING. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <Link to="#" className="text-white/70 hover:text-white transition-colors">
              GitHub
            </Link>
            <Link to="#" className="text-white/70 hover:text-white transition-colors">
              Discord
            </Link>
            <Link to="#" className="text-white/70 hover:text-white transition-colors">
              Twitter
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;