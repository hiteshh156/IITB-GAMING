import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Products",
      links: ["SDK", "Tools", "Assets", "Plugins"],
    },
    {
      title: "Resources",
      links: ["Documentation", "Tutorials", "API Reference", "Examples"],
    },
    {
      title: "Community",
      links: ["Forums", "Discord", "Blog", "Showcase"],
    },
    {
      title: "Company",
      links: ["About", "Careers", "Contact", "Legal"],
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
                  <li key={link}>
                    <Link
                      to={`/${link.toLowerCase()}`}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {link}
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