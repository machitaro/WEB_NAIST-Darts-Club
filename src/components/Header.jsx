import { Link } from "react-router-dom";

export const Header = ({onClickToggleMenu}) => {
    return (
        <header className="z-10">
            <div className="flex mx-auto p-2 px-2 md:px-8 items-center">
                <Link to="/" className="font-bold flex items-center">
                    <span className="text-xl md:text-2xl ml-3">NAISTダーツ倶楽部</span>
                    <div className="w-8 h-8 md:w-10 md:h-10 overflow-hidden ml-1 md:ml-2">
                        <img 
                            src="./img/logo.jpg" 
                            alt="NAIST Darts Club Logo"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </Link>
                <button className="ml-auto" onClick={onClickToggleMenu}>
                    <div className="w-12 h-12 md:w-16 md:h-16 overflow-hidden">
                        <img 
                        src="./img/menu_open.png" 
                        alt="menu"
                        className="w-full h-full object-contain"
                        />
                    </div>
                </button>
            </div>
        </header>
    );
  };