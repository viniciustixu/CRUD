import "./globals.css";
import HomeBtn from '@/components/HomeBtn';
import Filters from '@/components/Filters';
import Search from '@/components/Search';
import AddMovieBtn from '@/components/addMovieBtn';
import { ShowMsgContainer } from "@/components/ShowMsg";
import { Suspense } from 'react';



export const metadata = {
  title: "CineTest – Movies, Series & Reviews",
  description: "Discover movies and series, read reviews, check cast details, and explore information about your favorite titles.",
  keywords: "movies, series, reviews, cast, ratings, cinema, trailers, IMDb, film news",
  author: "Tixu",
  robots: "index, follow",
  icons: {
    icon: "/favicon.png"
  },
  openGraph: {
    images: [
      {
        url: 'https://cinetest.vercel.app/previewImg.webp',
        alt: 'image preview',
      },
    ],
    type: 'website',
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <header>
            <nav className="navbar bg-[#EEEEEE] justify-between gap-5">
              <div>
                <Filters />
              </div>
              <Search />
              <div className='flex gap-2'>
                <AddMovieBtn />
                <HomeBtn />
                <ShowMsgContainer />
              </div>
            </nav>
          </header>
          {children}
        </Suspense>
      </body>
    </html >
  );
}
