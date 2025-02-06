export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="w-full bg-main py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">
           © {currentYear} NAIST Darts Club
          </p>
        </div>
      </footer>
    );
  };