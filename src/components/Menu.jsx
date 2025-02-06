import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Menu = (props) => {
  const { isMenuOpen, onClickCloseMenu, menuItems } = props;
  const MenuLink = ({ href, children }) => {
    const isHashLink = href.includes('#');
    return isHashLink ? (
      <HashLink
        smooth
        to={href}
        className="no-underline relative hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-main after:scale-x-0 after:transition-transform after:duration-300"
        onClick={onClickCloseMenu}
      >
        {children}
      </HashLink>
    ) : (
      <Link
        to={href}
        className="no-underline relative hover:after:scale-x-100 after:content-[''] after:absolute after:w-full after:h-0.5 after:-bottom-1 after:left-0 after:bg-main after:scale-x-0 after:transition-transform after:duration-300"
        onClick={onClickCloseMenu}
      >
        {children}
      </Link>
    );
  };
  return (
    <div 
      className={`fixed inset-0 bg-white/90 transition-all duration-300 z-10 ${
        isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="sticky top-0 h-screen">
        <header>
          <div className="flex mx-auto p-2 px-3 md:px-8 items-center">
            <button className="ml-auto z-20" onClick={onClickCloseMenu}>
              <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden">
                <img 
                src="./img/menu_close.png" 
                alt="batsu"
                className="w-full h-full object-contain"
                />
              </div>
            </button>
          </div>
        </header>

        <div className="absolute inset-0 flex justify-center items-center">
          <nav>
            <ul className="list-none p-0">
              {menuItems.map((item) => (
                <li key={item.title} className="mb-8 text-2xl md:text-4xl">
                  <MenuLink href={item.link}>
                    {item.title}
                  </MenuLink>
                  {item.subItems && (
                    <ul className="mt-5 ml-8">
                      {item.subItems.map((subItem) => (
                        <li key={subItem.title} className="mb-4 text-xl md:text-2xl">
                          <MenuLink href={subItem.link}>
                            {subItem.title}
                          </MenuLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};
