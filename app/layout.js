import "./globals.css";
import Home from './components/Home';
import Filters from './components/Filters';
import Search from './components/Search';


export const metadata = {
  title: "CineTest – Movies, Series & Reviews",
  description: "Discover movies and series, read reviews, check cast details, and explore information about your favorite titles.",
  keywords: "movies, series, reviews, cast, ratings, cinema, trailers, IMDb, film news",
  author: "Tixu",
  robots: "index, follow",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar bg-base-300 justify-between">
            <div>
              <Filters />
            </div>
            <Search />
            <Home />
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
